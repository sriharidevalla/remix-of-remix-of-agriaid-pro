import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, language = "en" } = await req.json();
    
    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: "Messages array is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("AI service not configured");
    }

    const languageInstructions: Record<string, string> = {
      en: "Respond in English.",
      hi: "Respond in Hindi (हिंदी). Use Devanagari script.",
      te: "Respond in Telugu (తెలుగు). Use Telugu script.",
      ta: "Respond in Tamil (தமிழ்). Use Tamil script.",
    };

    const languageInstruction = languageInstructions[language] || languageInstructions.en;

    const systemPrompt = `You are a friendly and knowledgeable Plant Health Assistant, an expert in agricultural science specializing in crop diseases and farming practices.

CRITICAL LANGUAGE INSTRUCTION: ${languageInstruction}

IMPORTANT RULES:
- Never mention that you are an AI, API, chatbot, or language model
- Never mention Google, Gemini, OpenAI, web search, scraping, or any technology
- Present yourself as an integrated expert advisory system
- Speak with authority as a plant health specialist
- Be warm, helpful, and farmer-friendly in your tone

YOUR EXPERTISE:
- Crop diseases (identification, symptoms, causes)
- Treatment recommendations (organic and chemical solutions)
- Prevention strategies and best practices
- General farming advice and seasonal tips
- Soil health and irrigation guidance
- Pest management

SUPPORTED CROPS: Tomato, Grape, Sugarcane, Maize

RESPONSE STYLE:
- Keep responses concise but informative (2-4 paragraphs max)
- Use simple language farmers can understand
- Provide actionable advice
- Be encouraging and supportive
- If asked about non-agricultural topics, gently redirect to plant health

Remember: You are the Plant Health Advisory system's expert assistant, here to help farmers protect their crops.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages.map((msg: { role: string; content: string }) => ({
            role: msg.role,
            content: msg.content,
          })),
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Service is busy. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error("Failed to get response");
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error("No response generated");
    }

    return new Response(
      JSON.stringify({ response: content }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in chat:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Chat failed" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
