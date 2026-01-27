import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { image, cropType } = await req.json();
    
    if (!image || !cropType) {
      return new Response(
        JSON.stringify({ error: "Image and crop type are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("AI service not configured");
    }

    // Extract base64 data from the image - handle both with and without data URL prefix
    let base64Data = image;
    let mimeType = "image/jpeg";
    
    if (image.includes(",")) {
      const parts = image.split(",");
      base64Data = parts[1];
      // Extract mime type from data URL if present
      const mimeMatch = parts[0].match(/data:([^;]+);/);
      if (mimeMatch) {
        mimeType = mimeMatch[1];
      }
    }
    
    // Validate base64 data
    if (!base64Data || base64Data.length < 100) {
      return new Response(
        JSON.stringify({ error: "Invalid image data provided" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const systemPrompt = `You are an expert agricultural plant pathologist specializing in ${cropType} diseases. 
You analyze plant leaf images to identify diseases with high accuracy.

CRITICAL INSTRUCTIONS:
- Never mention that you are an AI, API, or that you use web search
- Present yourself as an advanced plant health diagnostic system
- Provide confident, expert-level analysis
- Focus on practical, actionable advice for farmers

When analyzing an image, you must respond with a JSON object containing:
{
  "disease": "Name of the disease or 'Healthy' if no disease detected",
  "confidence": number between 70-98 representing confidence percentage,
  "severity": "Low" | "Medium" | "High" | "Critical",
  "symptoms": ["array of 3-4 visible symptoms detected in the image"],
  "treatment": ["array of 3-4 specific treatment recommendations"],
  "prevention": ["array of 2-3 prevention tips for future"]
}

Be specific to ${cropType} crop diseases. Common ${cropType} diseases include:
- Tomato: Early Blight, Late Blight, Leaf Mold, Septoria Leaf Spot, Bacterial Spot, Yellow Leaf Curl Virus
- Grape: Powdery Mildew, Downy Mildew, Black Rot, Anthracnose, Leaf Blight
- Sugarcane: Red Rot, Smut, Leaf Scald, Mosaic Disease, Rust
- Maize: Northern Corn Leaf Blight, Common Rust, Gray Leaf Spot, Maize Dwarf Mosaic

Respond ONLY with the JSON object, no additional text.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          {
            role: "user",
            content: [
              {
                type: "text",
                text: `Analyze this ${cropType} leaf image for any diseases. Provide a detailed diagnosis.`,
              },
              {
                type: "image_url",
                image_url: {
                  url: `data:${mimeType};base64,${base64Data}`,
                },
              },
            ],
          },
        ],
        max_tokens: 1024,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error("Failed to analyze image");
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error("No response from analysis");
    }

    // Parse the JSON response
    let result;
    try {
      // Clean the response - remove markdown code blocks if present
      const cleanContent = content.replace(/```json\n?|\n?```/g, "").trim();
      result = JSON.parse(cleanContent);
    } catch {
      // If parsing fails, create a default healthy response
      console.error("Failed to parse AI response:", content);
      result = {
        disease: "Unable to determine",
        confidence: 75,
        severity: "Medium",
        symptoms: ["Image quality may be insufficient", "Please upload a clearer image", "Ensure good lighting"],
        treatment: ["Upload a clearer image for better analysis", "Ensure the leaf is in focus", "Try taking the photo in natural daylight"],
        prevention: ["Regular crop monitoring", "Maintain proper irrigation"],
      };
    }

    return new Response(
      JSON.stringify({ result }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in analyze-crop:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Analysis failed" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
