import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.43.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Comprehensive knowledge base for the chatbot
const diseaseKnowledge = `
CROP DISEASE KNOWLEDGE BASE:

TOMATO DISEASES:
1. Early Blight (Alternaria solani)
   - Symptoms: Dark brown spots with concentric rings (target pattern), yellow halos, lower leaves first
   - Treatment: Copper fungicides, chlorothalonil, remove infected leaves, neem oil
   - Prevention: Crop rotation (3 years), mulching, avoid overhead watering

2. Late Blight (Phytophthora infestans)
   - Symptoms: Water-soaked gray-green spots, white fuzzy mold on undersides, rapid death
   - Treatment: Copper hydroxide, metalaxyl (systemic), remove and burn infected plants
   - Prevention: Resistant varieties (Legend, Defiant), avoid overhead irrigation

3. Leaf Mold (Passalora fulva)
   - Symptoms: Yellow spots on upper surface, olive-green velvety growth underneath
   - Treatment: Improve ventilation, sulfur fungicides, remove infected leaves
   - Prevention: Maintain humidity <85%, good air circulation

4. Septoria Leaf Spot
   - Symptoms: Small circular spots (1.5-3mm) with dark borders, gray centers with black dots
   - Treatment: Chlorothalonil, copper fungicides, remove infected leaves
   - Prevention: Drip irrigation, mulching, crop rotation

5. Mosaic Virus
   - Symptoms: Mottled light/dark green patterns, leaf distortion, stunted growth
   - Treatment: No cure - remove infected plants, disinfect tools with 10% bleach
   - Prevention: Virus-free seeds, wash hands before handling, no smoking near plants

6. Yellow Leaf Curl Virus
   - Symptoms: Severe upward leaf curling, yellowing margins, stunted bushy growth
   - Treatment: Remove infected plants, control whiteflies (imidacloprid)
   - Prevention: TYLCV-resistant varieties, 50-mesh nets, yellow sticky traps

POTATO DISEASES:
1. Early Blight - Similar to tomato, dark lesions with concentric rings
2. Late Blight - The Irish Famine disease, devastating if uncontrolled
   - Treatment: Metalaxyl, mancozeb, kill vines 2-3 weeks before harvest

GRAPE DISEASES:
1. Black Rot (Guignardia bidwellii)
   - Symptoms: Tan spots with dark borders, fruit shrivel to black mummies
   - Treatment: Mancozeb at bud break, myclobutanil during bloom
   - Prevention: Remove all mummies before spring, prune for open canopy

2. Esca (Black Measles)
   - Symptoms: Tiger-stripe leaves, dark spots on berries, sudden vine death
   - Treatment: No cure, trunk renewal possible, wound protectants
   - Prevention: Protect pruning wounds, prune in dry weather

CORN/MAIZE DISEASES:
1. Gray Leaf Spot (Cercospora)
   - Symptoms: Rectangular gray-tan lesions parallel to veins
   - Treatment: Strobilurin or triazole fungicides at VT/R1 stage
   - Prevention: Resistant hybrids, crop rotation, bury residue

2. Common Rust
   - Symptoms: Small cinnamon-brown pustules on both leaf surfaces
   - Treatment: Triazole/strobilurin fungicides when pustules appear
   - Prevention: Resistant hybrids, early detection

3. Northern Corn Leaf Blight
   - Symptoms: Long cigar-shaped gray-green lesions (2.5-15 cm)
   - Treatment: Fungicides at VT-R1 stage
   - Prevention: Resistant hybrids with Ht genes, crop rotation

RICE DISEASES:
1. Bacterial Leaf Blight
   - Symptoms: Water-soaked streaks on leaf margins, yellowing to straw color
   - Treatment: No effective chemical control, drain fields
   - Prevention: Resistant varieties, balanced nitrogen, proper drainage

2. Brown Spot
   - Symptoms: Oval brown spots with gray centers, dark margins
   - Treatment: Tricyclazole, improve soil fertility
   - Prevention: Healthy seed, balanced fertilizers, potassium

WHEAT DISEASES:
1. Brown/Leaf Rust
   - Symptoms: Small round orange-brown pustules scattered on leaves
   - Treatment: Triazole fungicides (propiconazole, tebuconazole)
   - Prevention: Resistant varieties, destroy volunteer wheat

2. Yellow/Stripe Rust
   - Symptoms: Yellow-orange pustules in stripes along veins
   - Treatment: Triazole + strobilurin combinations immediately
   - Prevention: Resistant varieties with Yr genes, avoid early sowing

COTTON DISEASES:
1. Cotton Leaf Curl Virus
   - Symptoms: Severe leaf curling, vein thickening, stunted bushy growth
   - Treatment: Remove infected plants, control whiteflies
   - Prevention: CLCuV-resistant varieties, early sowing, reflective mulches

2. Fusarium Wilt
   - Symptoms: Yellowing, wilting one side first, vascular browning
   - Treatment: No effective chemical control
   - Prevention: Resistant varieties, 3-4 year rotation, nematode control

CITRUS/ORANGE DISEASES:
1. Citrus Greening (HLB)
   - Symptoms: Blotchy mottle, yellow shoot, small lopsided bitter fruit
   - Treatment: No cure, remove trees, intensive psyllid control
   - Prevention: Certified disease-free nursery stock, psyllid control

CHILLI/PEPPER DISEASES:
1. Bacterial Spot
   - Symptoms: Small water-soaked spots, brown with yellow halos, scab on fruit
   - Treatment: Copper bactericides weekly, avoid overhead irrigation
   - Prevention: Hot-water treated seed, resistant varieties

GENERAL FARMING TIPS:
- Always use certified disease-free seeds
- Practice crop rotation (minimum 2-3 years)
- Ensure proper drainage and spacing
- Monitor regularly for early detection
- Apply fungicides preventively in high-risk periods
- Remove and destroy infected plant material (don't compost)
- Disinfect tools between plants
- Maintain balanced nutrition - stressed plants are more susceptible
`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, language = "en", sessionId } = await req.json();
    
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

    // Initialize Supabase client for conversation memory (optional)
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    
    let conversationHistory: { role: string; content: string }[] = [];
    let supabase: ReturnType<typeof createClient> | null = null;
    
    if (supabaseUrl && supabaseKey && sessionId) {
      try {
        supabase = createClient(supabaseUrl, supabaseKey);
        
        // Try to fetch conversation history
        const { data: historyData } = await supabase
          .from("chat_history")
          .select("messages")
          .eq("session_id", sessionId)
          .single();
        
        if (historyData?.messages && Array.isArray(historyData.messages)) {
          conversationHistory = historyData.messages as { role: string; content: string }[];
        }
      } catch (dbError) {
        console.log("Chat history not available, using session only:", dbError);
      }
    }

    const languageInstructions: Record<string, string> = {
      en: "Respond in English.",
      hi: "Respond in Hindi (हिंदी). Use Devanagari script.",
      te: "Respond in Telugu (తెలుగు). Use Telugu script.",
      ta: "Respond in Tamil (தமிழ்). Use Tamil script.",
      kn: "Respond in Kannada (ಕನ್ನಡ). Use Kannada script.",
      ml: "Respond in Malayalam (മലയാളം). Use Malayalam script.",
      mr: "Respond in Marathi (मराठी). Use Devanagari script.",
      bn: "Respond in Bengali (বাংলা). Use Bengali script.",
      gu: "Respond in Gujarati (ગુજરાતી). Use Gujarati script.",
      pa: "Respond in Punjabi (ਪੰਜਾਬੀ). Use Gurmukhi script.",
    };

    const languageInstruction = languageInstructions[language] || languageInstructions.en;

    const systemPrompt = `You are a friendly and expert Plant Health Advisory System, trained with EfficientNet-B4 and Vision Transformer (ViT) models on the PlantVillage and PlantDoc datasets covering 15 crops and 50+ diseases.

CRITICAL LANGUAGE INSTRUCTION: ${languageInstruction}

${diseaseKnowledge}

IMPORTANT RULES:
- Never mention that you are an AI, API, chatbot, or language model
- Never mention Google, Gemini, OpenAI, web search, scraping, or any technology
- Present yourself as an integrated expert plant health advisory system
- Speak with authority as a plant pathologist specialist
- Be warm, helpful, and farmer-friendly in your tone

YOUR CAPABILITIES:
- Identify and diagnose crop diseases based on symptoms
- Provide detailed treatment recommendations (organic and chemical)
- Suggest prevention strategies and best practices
- Answer questions about specific crops and diseases
- Give seasonal farming advice
- Explain soil health and irrigation guidance
- Pest management recommendations

SUPPORTED CROPS: Tomato, Potato, Grape, Apple, Corn/Maize, Rice, Wheat, Cotton, Orange/Citrus, Chilli/Pepper, Cucumber, Strawberry, Sugarcane, Soybean, Bell Pepper

RESPONSE STYLE:
- Keep responses concise but informative (2-4 paragraphs max)
- Use simple language farmers can understand
- Provide specific, actionable advice
- Include both organic and chemical treatment options when relevant
- Be encouraging and supportive
- If asked about non-agricultural topics, gently redirect to plant health

MEMORY: You have memory of our entire conversation. Use previous context to provide more relevant and personalized responses.

Remember: You are the Plant Health Advisory System's expert assistant, here to help farmers protect their crops and improve yields.`;

    // Combine conversation history with current messages
    const allMessages = [
      ...conversationHistory.slice(-10), // Keep last 10 messages for context
      ...messages.map((msg: { role: string; content: string }) => ({
        role: msg.role,
        content: msg.content,
      })),
    ];

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
          ...allMessages,
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

    // Store updated conversation history (optional)
    if (supabase && sessionId) {
      try {
        const updatedMessages = [
          ...allMessages,
          { role: "assistant", content: content }
        ].slice(-20); // Keep last 20 messages

        await supabase
          .from("chat_history")
          .upsert({
            session_id: sessionId,
            messages: updatedMessages,
            updated_at: new Date().toISOString(),
          }, { onConflict: "session_id" });
      } catch (saveError) {
        console.log("Could not save chat history:", saveError);
      }
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
