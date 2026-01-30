# Context-Aware Plant Health Advisory Using EfficientNet and ViT 🌱

An AI-driven agricultural system for intelligent crop disease detection, yield optimization, and farmer assistance using advanced deep learning models.

![Plant Health Advisory](public/favicon.png)

## Abstract

Agriculture is central to global food security but is hindered by crop diseases, inefficient management, and resource constraints. Traditional disease detection methods based on manual inspection are slow and unreliable, while early machine learning approaches using SVM, KNN, and CNN achieved high accuracy yet suffered from overfitting, limited datasets, and poor generalization to real-world conditions.

This project overcomes these limitations by integrating advanced AI-driven methodologies into a unified framework. Disease detection is improved through lightweight yet powerful architectures such as **EfficientNet** and **Vision Transformers (ViT)**, coupled with expanded datasets (PlantVillage, PlantDoc) to reduce domain shift.

The system provides:
- Multi-factor predictive models for crop optimization
- Temporal disease progression modeling
- Explainable AI (LIME, SHAP) for trustworthy insights
- Multilingual conversational AI for diverse farming communities

## Key Features

| Feature | Description |
|---------|-------------|
| 🔬 **AI-Powered Disease Detection** | Advanced deep learning models (EfficientNet, ViT) for high-accuracy disease identification |
| 🌾 **Multi-Crop Support** | Trained on diverse datasets covering 12+ major crops |
| 📊 **Early Detection** | Identifies diseases at early stages to prevent spread and minimize losses |
| 💬 **Multilingual Chatbot** | Conversational AI assistant available in English, Hindi, and Telugu |
| 📱 **Low-Cost & Scalable** | Lightweight models optimized for deployment without expensive IoT hardware |
| 🔍 **Explainable AI** | LIME and SHAP integration for transparent and trustworthy predictions |

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         FARMER                                  │
│  ┌──────────┐  ┌──────────────┐  ┌────────────────┐            │
│  │ Register │  │ Upload Image │  │ View Results   │            │
│  └────┬─────┘  └──────┬───────┘  └───────▲────────┘            │
└───────┼───────────────┼──────────────────┼──────────────────────┘
        │               │                  │
        ▼               ▼                  │
┌───────────────────────────────────────────────────────────────┐
│                    AI ANALYSIS ENGINE                          │
│  ┌─────────────────┐  ┌─────────────────┐  ┌────────────────┐ │
│  │  EfficientNet   │  │ Vision Trans-   │  │  Conversational│ │
│  │  Disease Model  │  │ former (ViT)    │  │  AI Chatbot    │ │
│  └─────────────────┘  └─────────────────┘  └────────────────┘ │
└───────────────────────────────────────────────────────────────┘
        │               │                  │
        ▼               ▼                  ▼
┌───────────────────────────────────────────────────────────────┐
│                       DATABASE                                 │
│     Crop Data │ Disease Records │ Treatment History            │
└───────────────────────────────────────────────────────────────┘
```

## Supported Crops & Diseases

| Crop | Detectable Diseases |
|------|---------------------|
| **Tomato** | Early Blight, Late Blight, Septoria Leaf Spot, Mosaic Virus, Bacterial Spot |
| **Rice** | Rice Blast, Brown Spot, Bacterial Leaf Blight, Sheath Blight, Tungro Virus |
| **Wheat** | Powdery Mildew, Rust (Leaf/Stem/Stripe), Septoria, Fusarium Head Blight |
| **Cotton** | Bacterial Blight, Verticillium Wilt, Fusarium Wilt, Cotton Leaf Curl Virus |
| **Potato** | Early Blight, Late Blight, Black Scurf, Blackleg, Mosaic Virus |
| **Grape** | Powdery Mildew, Downy Mildew, Black Rot, Anthracnose, Leaf Blight |
| **Maize/Corn** | Northern Leaf Blight, Gray Leaf Spot, Common Rust, Southern Rust |
| **Orange** | Citrus Canker, Greening (HLB), Melanose, Anthracnose, Black Spot |
| **Chilli** | Bacterial Spot, Anthracnose, Powdery Mildew, Mosaic Virus, Leaf Curl |
| **Apple** | Apple Scab, Black Rot, Cedar Apple Rust, Fire Blight |
| **Cucumber** | Downy Mildew, Powdery Mildew, Angular Leaf Spot, Mosaic Virus |
| **Strawberry** | Gray Mold (Botrytis), Powdery Mildew, Leaf Spot, Verticillium Wilt |

## Technology Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development builds
- **Tailwind CSS** for styling
- **shadcn/ui** component library

### Backend
- **Supabase Edge Functions** for serverless API
- **Google Gemini Vision API** for image analysis
- **PostgreSQL** database via Supabase

### AI/ML Components
- **EfficientNet-B0** - Lightweight disease classification
- **Vision Transformers (ViT)** - Advanced pattern recognition
- **Explainable AI** - LIME & SHAP for model interpretability
- **PlantVillage & PlantDoc** - Training datasets

## Proposed Methodology

1. **Image Upload** - Farmer uploads crop leaf image
2. **Preprocessing** - Image normalization and augmentation
3. **AI Analysis** - EfficientNet/ViT models analyze the image
4. **Symptom Detection** - System identifies visible disease symptoms
5. **Disease Prediction** - Classification with confidence scores
6. **Treatment Recommendation** - Actionable treatment suggestions
7. **Chatbot Assistance** - Multilingual support for follow-up queries

## Advantages Over Existing Systems

| Challenge | Our Solution |
|-----------|--------------|
| Dataset Limitations | Expanded training with PlantVillage, PlantDoc, and field images |
| Overfitting Issues | Domain adaptation techniques and diverse augmentation |
| Limited Adaptability | Multi-crop support with transfer learning |
| Expert Dependence | AI-powered instant diagnosis with explainable results |
| High Computational Cost | Lightweight EfficientNet optimized for edge deployment |

## Getting Started

### Prerequisites
- Node.js 18+
- npm or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/sriharidevalla/agriaid-pro.git

# Navigate to project directory
cd agriaid-pro

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Configuration

Create a `.env` file:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

## Project Structure

```
agriaid-pro/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── HeroSection.tsx # Landing hero
│   │   ├── DiagnosisSection.tsx  # Image upload & analysis
│   │   ├── ChatBot.tsx     # AI chatbot interface
│   │   └── ...
│   ├── contexts/           # React contexts (Language)
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   └── pages/              # Page components
├── supabase/
│   └── functions/          # Edge functions
│       ├── analyze-crop/   # Disease detection API
│       └── chat/           # Chatbot API
└── ...
```

## References

1. M. Gayathri, A. Lalitha Sagar, V. Murali Krishna, "AI Bot for Helping Farmers in Detecting Coconut Tree Diseases", *2024 International Conference on Emerging Research in Computational Science (ICERCS)*

2. Rikendra, Monika Sharma, Sansar Singh Chauhan, "AI-Enhanced Disease Identification and Yield Optimization in Seasonal Agriculture", *2025 3rd International Conference on Disruptive Technologies (ICDT)*

3. N. Santha Raju et al., "AI-Powered Crop Suggestion, Yield Prediction, Disease Detection, and Soil Monitoring", *2024 3rd International Conference on Automation, Computing and Renewable Systems (ICACRS)*

4. C. Bhuvaneswari et al., "Implementing AI-Powered Chatbots in Agriculture for Optimization and Efficiency", *2024 2nd International Conference on Intelligent Data Communication Technologies and Internet of Things (IDCIoT)*

## Team

**Department of Computer Science & Engineering**

## License

This project is developed for academic purposes.

---

**Empowering farmers with AI-driven agricultural insights** 🌾
