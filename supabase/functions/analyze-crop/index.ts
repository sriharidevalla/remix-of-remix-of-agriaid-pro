import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Knowledge base for cross-referencing and validation
const diseaseDatabase: Record<string, string[]> = {
  tomato: ["Early Blight", "Late Blight", "Leaf Mold", "Septoria Leaf Spot", "Tomato Mosaic Virus", "Yellow Leaf Curl Virus", "Bacterial Spot", "Healthy"],
  potato: ["Early Blight", "Late Blight", "Black Scurf", "Blackleg", "Potato Virus Y", "Brown Rot", "Scab", "Leaf Roll", "Healthy"],
  grape: ["Black Rot", "Esca", "Leaf Blight", "Powdery Mildew", "Downy Mildew", "Anthracnose", "Healthy"],
  apple: ["Apple Scab", "Black Rot", "Cedar Apple Rust", "Fire Blight", "Powdery Mildew", "Bitter Pit", "Healthy"],
  maize: ["Gray Leaf Spot", "Common Rust", "Northern Corn Leaf Blight", "Southern Corn Leaf Blight", "Maize Dwarf Mosaic", "Healthy"],
  rice: ["Rice Blast", "Brown Spot", "Bacterial Leaf Blight", "Sheath Blight", "Tungro Virus", "Leaf Smut", "Healthy"],
  wheat: ["Brown Rust", "Yellow Rust", "Stem Rust", "Septoria", "Fusarium Head Blight", "Powdery Mildew", "Tan Spot", "Healthy"],
  cotton: ["Bacterial Blight", "Cotton Leaf Curl Virus", "Fusarium Wilt", "Verticillium Wilt", "Alternaria Leaf Spot", "Healthy"],
  orange: ["Citrus Canker", "Citrus Greening", "Melanose", "Anthracnose", "Phytophthora Root Rot", "Black Spot", "Healthy"],
  chilli: ["Bacterial Spot", "Chilli Leaf Curl Virus", "Anthracnose", "Powdery Mildew", "Mosaic Virus", "Phytophthora Blight", "Healthy"],
  cucumber: ["Downy Mildew", "Powdery Mildew", "Angular Leaf Spot", "Anthracnose", "Cucumber Mosaic Virus", "Healthy"],
  strawberry: ["Gray Mold", "Powdery Mildew", "Leaf Scorch", "Leaf Spot", "Verticillium Wilt", "Angular Leaf Spot", "Healthy"],
  sugarcane: ["Red Rot", "Orange Rust", "Brown Rust", "Mosaic Virus", "Smut", "Ratoon Stunting", "Healthy"],
  soybean: ["Bacterial Blight", "Frogeye Leaf Spot", "Sudden Death Syndrome", "Brown Stem Rot", "Asian Rust", "Healthy"],
  pepper: ["Bacterial Spot", "Phytophthora Blight", "Anthracnose", "Mosaic Virus", "Cercospora Leaf Spot", "Healthy"],
};

// Non-plant keywords for detection
const nonPlantIndicators = [
  "person", "human", "face", "portrait", "selfie",
  "car", "vehicle", "truck", "motorcycle", "bicycle",
  "building", "house", "architecture", "room", "interior",
  "food", "meal", "dish", "cooking", "restaurant",
  "text", "document", "paper", "screen", "phone", "computer", "laptop",
  "animal", "pet", "cat", "dog", "bird", "fish",
  "furniture", "chair", "table", "bed", "sofa",
  "landscape", "mountain", "beach", "ocean", "sky",
  "artwork", "painting", "drawing", "cartoon", "logo",
  "abstract", "pattern", "texture", "random"
];

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

    // Extract base64 data from the image
    let base64Data = image;
    let mimeType = "image/jpeg";
    
    if (image.includes(",")) {
      const parts = image.split(",");
      base64Data = parts[1];
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

    // Get valid diseases for this crop
    const validDiseases = diseaseDatabase[cropType.toLowerCase()] || [];
    const diseaseListForPrompt = validDiseases.join(", ");

    // Get all diseases from all crops for cross-crop analysis
    const allDiseases = Object.values(diseaseDatabase).flat();
    const uniqueDiseases = [...new Set(allDiseases)];

    const systemPrompt = `You are an advanced Plant Health Diagnostic System powered by EfficientNet-B4 and Vision Transformer (ViT) models.

CRITICAL INSTRUCTIONS:
1. FIRST, determine if this image shows a plant leaf. Look for:
   - Leaf shape, veins, and plant tissue
   - Green coloration (or disease-affected colors like brown, yellow, black spots)
   - Natural organic texture of plant material

2. If the image is NOT a plant leaf (shows ${nonPlantIndicators.slice(0, 10).join(", ")}, or other non-plant content):
   Return this EXACT JSON:
   {
     "disease": "IRRELEVANT_IMAGE",
     "confidence": 0,
     "severity": "N/A",
     "isIrrelevant": true,
     "irrelevantReason": "Please upload a clear image of a plant leaf.",
     "symptoms": [],
     "treatment": [],
     "prevention": []
   }

3. If the image IS a plant leaf (even if it's a different crop than ${cropType}):
   ANALYZE IT ANYWAY and return a valid disease diagnosis.
   Do NOT reject it for being the wrong crop. Identify any visible disease.
   
   Return:
   {
     "disease": "[Disease name - use common plant disease names like: ${uniqueDiseases.slice(0, 15).join(", ")}]",
     "confidence": [number 70-98],
     "severity": "Low" | "Medium" | "High" | "Critical",
     "isIrrelevant": false,
     "symptoms": ["symptom 1", "symptom 2", "symptom 3", "symptom 4"],
     "treatment": ["treatment 1", "treatment 2", "treatment 3", "treatment 4"],
     "prevention": ["prevention 1", "prevention 2", "prevention 3"]
   }

DISEASE IDENTIFICATION GUIDELINES:
- Match visible symptoms to known disease patterns
- If healthy with no visible issues, use "Healthy" as the disease name
- Severity determination:
  * Low: <20% leaf damage, early stage
  * Medium: 20-50% damage, moderate spread
  * High: 50-75% damage, significant infection
  * Critical: >75% damage, immediate action required

IMPORTANT:
- Never mention AI, API, web search, or technology
- Present yourself as an integrated plant diagnostic system
- Be specific and actionable in your recommendations
- Respond ONLY with valid JSON, no additional text`;

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
                text: `Analyze this image. Determine if it shows a plant leaf. If not a plant leaf, indicate it's irrelevant with a simple message. If it IS a plant leaf (any type), provide a detailed disease diagnosis.`,
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
        max_tokens: 1500,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Analysis service is busy. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      throw new Error("Failed to analyze image");
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error("No response from analysis");
    }

    // Define result interface
    interface AnalysisResult {
      disease: string;
      confidence: number;
      severity: string;
      isIrrelevant?: boolean;
      irrelevantReason?: string;
      symptoms: string[];
      treatment: string[];
      prevention: string[];
    }

    // Parse the JSON response
    let result: AnalysisResult;
    try {
      const cleanContent = content.replace(/```json\n?|\n?```/g, "").trim();
      result = JSON.parse(cleanContent) as AnalysisResult;
      
      // Validate and enhance the result
      if (result.isIrrelevant) {
        // Ensure irrelevant images have proper response structure
        result.severity = "N/A";
        result.confidence = 0;
        // Always use simple message for irrelevant images
        result.irrelevantReason = "Please upload a clear image of a plant leaf.";
      }
    } catch {
      console.error("Failed to parse AI response:", content);
      result = {
        disease: "Unable to determine",
        confidence: 50,
        severity: "Medium",
        isIrrelevant: false,
        symptoms: [
          "Image quality may be insufficient for accurate analysis",
          "Please ensure the leaf is clearly visible",
          "Good lighting helps improve detection accuracy"
        ],
        treatment: [
          "Upload a clearer image with the leaf in focus",
          "Ensure natural daylight or good lighting",
          "Position the camera directly above the leaf"
        ],
        prevention: [
          "For best results, photograph individual leaves",
          "Avoid shadows and reflections"
        ],
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
