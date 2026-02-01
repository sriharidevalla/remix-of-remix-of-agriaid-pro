import { useCallback } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import DiagnosisSection from "@/components/DiagnosisSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  const scrollToDiagnosis = useCallback(() => {
    const element = document.getElementById("diagnosis");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection onGetStarted={scrollToDiagnosis} />
      <FeaturesSection />
      <DiagnosisSection />
      <HowItWorksSection />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
