import { useState, useCallback, useRef } from "react";
import { Upload, Camera, Leaf, Loader2, CheckCircle, AlertTriangle, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";

const crops = [
  { id: "tomato", nameKey: "crop.tomato", emoji: "🍅" },
  { id: "grape", nameKey: "crop.grape", emoji: "🍇" },
  { id: "sugarcane", nameKey: "crop.sugarcane", emoji: "🎋" },
  { id: "maize", nameKey: "crop.maize", emoji: "🌽" },
  { id: "potato", nameKey: "crop.potato", emoji: "🥔" },
  { id: "apple", nameKey: "crop.apple", emoji: "🍎" },
];

interface DiagnosisResult {
  disease: string;
  confidence: number;
  severity: string;
  symptoms: string[];
  treatment: string[];
  prevention: string[];
}

const DiagnosisSection = () => {
  const { t } = useLanguage();
  const [selectedCrop, setSelectedCrop] = useState<string>("");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<DiagnosisResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleImageUpload = useCallback((file: File) => {
    if (!selectedCrop) {
      toast({
        title: t("diagnosis.selectCropFirst"),
        description: t("diagnosis.selectCropDescription"),
        variant: "destructive",
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage(e.target?.result as string);
      setResult(null);
    };
    reader.readAsDataURL(file);
  }, [selectedCrop, toast, t]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      handleImageUpload(file);
    }
  }, [handleImageUpload]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const handleCameraClick = () => {
    if (!selectedCrop) {
      toast({
        title: t("diagnosis.selectCropFirst"),
        description: t("diagnosis.selectCropDescription"),
        variant: "destructive",
      });
      return;
    }
    cameraInputRef.current?.click();
  };

  const analyzeCrop = async () => {
    if (!uploadedImage || !selectedCrop) return;

    setIsAnalyzing(true);
    try {
      console.log("Starting analysis for crop:", selectedCrop);
      
      const { data, error } = await supabase.functions.invoke("analyze-crop", {
        body: { 
          image: uploadedImage,
          cropType: selectedCrop 
        },
      });

      console.log("Analysis response:", { data, error });

      if (error) {
        console.error("Supabase function error:", error);
        throw new Error(error.message || t("diagnosis.analysisFailed"));
      }

      if (data?.error) {
        throw new Error(data.error);
      }

      if (!data?.result) {
        throw new Error("No analysis result received");
      }

      setResult(data.result);
      toast({
        title: t("diagnosis.analysisComplete"),
        description: t("diagnosis.analysisSuccessDescription"),
      });
    } catch (error) {
      console.error("Analysis error:", error);
      toast({
        title: t("diagnosis.analysisFailed"),
        description: error instanceof Error ? error.message : "Unable to analyze the image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "low": return "text-success bg-success/10";
      case "medium": return "text-warning bg-warning/10";
      case "high": return "text-destructive/80 bg-destructive/10";
      case "critical": return "text-destructive bg-destructive/10";
      default: return "text-muted-foreground bg-muted";
    }
  };

  return (
    <section id="diagnosis" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="section-badge mx-auto mb-6">
            <Leaf className="w-4 h-4" />
            <span>{t("diagnosis.badge")}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("diagnosis.title")}{" "}
            <span className="text-gradient">{t("diagnosis.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("diagnosis.description")}
          </p>
        </div>

        {/* Crop Selection */}
        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-sm font-medium mb-3 text-center">{t("diagnosis.selectCrop")}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {crops.map((crop) => (
              <button
                key={crop.id}
                onClick={() => setSelectedCrop(crop.id)}
                className={`px-6 py-3 rounded-full border-2 transition-all duration-200 flex items-center gap-2 ${
                  selectedCrop === crop.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border hover:border-primary/50 bg-card"
                }`}
              >
                <span className="text-xl">{crop.emoji}</span>
                <span className="font-medium">{t(crop.nameKey)}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Upload Section */}
          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Upload className="w-5 h-5 text-primary" />
              {t("diagnosis.uploadTitle")}
            </h3>
            
            <div
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              onClick={() => selectedCrop && fileInputRef.current?.click()}
              className={`upload-zone text-center ${!selectedCrop ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              {uploadedImage ? (
                <div className="space-y-4">
                  <img
                    src={uploadedImage}
                    alt="Uploaded crop"
                    className="max-h-48 mx-auto rounded-lg object-cover"
                  />
                  <p className="text-sm text-muted-foreground">
                    {t("diagnosis.imageUploaded")}
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-full bg-accent mx-auto flex items-center justify-center">
                    <Image className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{t("diagnosis.dragDrop")}</p>
                    <p className="text-sm text-muted-foreground">{t("diagnosis.orClick")}</p>
                  </div>
                </div>
              )}
              
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
                disabled={!selectedCrop}
              />
            </div>
            
            {/* Camera input for mobile */}
            <input
              ref={cameraInputRef}
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleFileSelect}
              className="hidden"
              disabled={!selectedCrop}
            />
            
            <div className="flex gap-3 mt-4">
              <Button
                variant="outline"
                className="flex-1 gap-2"
                onClick={handleCameraClick}
                disabled={!selectedCrop}
              >
                <Camera className="w-4 h-4" />
                {t("diagnosis.takePhoto")}
              </Button>
              <Button
                className="flex-1 gap-2 bg-primary hover:bg-primary/90"
                onClick={() => fileInputRef.current?.click()}
                disabled={!selectedCrop}
              >
                <Upload className="w-4 h-4" />
                {t("diagnosis.browseFiles")}
              </Button>
            </div>
            
            {uploadedImage && (
              <Button
                className="w-full mt-4 bg-primary hover:bg-primary/90"
                onClick={analyzeCrop}
                disabled={isAnalyzing}
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {t("diagnosis.analyzing")}
                  </>
                ) : (
                  t("diagnosis.analyzeImage")
                )}
              </Button>
            )}
            
            <p className="text-xs text-muted-foreground mt-4 text-center">
              {t("diagnosis.uploadPrompt")}
            </p>
          </Card>

          {/* Results Section */}
          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              {result ? t("diagnosis.resultsTitle") : t("diagnosis.awaitingTitle")}
            </h3>
            
            {result ? (
              <div className="space-y-6 animate-fade-in">
                {/* Disease Name & Confidence */}
                <div className="bg-accent/50 rounded-xl p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-sm text-muted-foreground">{t("diagnosis.detectedDisease")}</p>
                      <h4 className="text-xl font-bold text-foreground">{result.disease}</h4>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(result.severity)}`}>
                      {result.severity}
                    </span>
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span>{t("diagnosis.confidence")}</span>
                      <span className="font-medium">{result.confidence}%</span>
                    </div>
                    <div className="h-2 bg-border rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${result.confidence}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Symptoms */}
                <div>
                  <h5 className="font-medium mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning" />
                    {t("diagnosis.symptomsDetected")}
                  </h5>
                  <ul className="space-y-1">
                    {result.symptoms.map((symptom, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {symptom}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Treatment */}
                <div>
                  <h5 className="font-medium mb-2 text-primary">{t("diagnosis.treatmentRecommendations")}</h5>
                  <ul className="space-y-2">
                    {result.treatment.map((item, i) => (
                      <li key={i} className="text-sm bg-card border border-border rounded-lg p-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Prevention */}
                <div>
                  <h5 className="font-medium mb-2 text-muted-foreground">{t("diagnosis.preventionTips")}</h5>
                  <ul className="space-y-1">
                    {result.prevention.map((tip, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-primary" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-accent mx-auto flex items-center justify-center mb-4">
                  <Leaf className="w-10 h-10 text-primary animate-pulse-gentle" />
                </div>
                <p className="font-medium mb-2">{t("diagnosis.awaitingTitle")}</p>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                  {t("diagnosis.awaitingDescription")}
                </p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DiagnosisSection;
