import { 
  Scan, 
  Brain, 
  MessageSquare, 
  FileText, 
  Globe, 
  TrendingUp 
} from "lucide-react";

const features = [
  {
    icon: Scan,
    title: "Disease Detection",
    description: "Upload a leaf image and get instant diagnosis using advanced AI visual analysis for accurate disease identification.",
  },
  {
    icon: Brain,
    title: "Explainable AI",
    description: "Understand AI decisions with clear explanations showing exactly why a diagnosis was made.",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbot Assistant",
    description: "Get instant answers about diseases, treatments, and farming best practices through our conversational AI.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need for{" "}
            <span className="text-gradient">Healthy Crops</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Powered by state-of-the-art AI technology for accurate, fast, and trustworthy results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
