# AgriAid Pro 🌱

An AI-powered plant health advisory system for crop disease diagnosis and agricultural guidance.

![Plant Health Advisory](public/favicon.png)

## Overview

AgriAid Pro helps farmers and agricultural professionals diagnose crop diseases using advanced image analysis. Simply upload a photo of your affected crop, and the system provides detailed diagnosis along with treatment recommendations.

### Key Features

- **🔬 AI-Powered Diagnosis** - Upload crop images for instant disease detection
- **🌾 Multi-Crop Support** - Supports 12+ crops including Tomato, Rice, Wheat, Cotton, and more
- **💬 Expert Chatbot** - Get personalized agricultural advice from our plant pathology assistant
- **🌍 Multi-Language** - Available in English, Hindi, and Telugu
- **📱 Responsive Design** - Works seamlessly on desktop and mobile devices

## Supported Crops

| Crop | Common Diseases Detected |
|------|-------------------------|
| Tomato | Early Blight, Late Blight, Septoria, Mosaic Virus |
| Rice | Rice Blast, Brown Spot, Bacterial Leaf Blight |
| Wheat | Powdery Mildew, Rust, Septoria, Fusarium |
| Cotton | Bacterial Blight, Verticillium Wilt, Leaf Curl Virus |
| Potato | Early Blight, Late Blight, Black Scurf |
| Grape | Powdery Mildew, Downy Mildew, Black Rot |
| Maize | Northern Leaf Blight, Gray Leaf Spot, Rust |
| Orange | Citrus Canker, Greening (HLB), Black Spot |
| Chilli | Bacterial Spot, Anthracnose, Leaf Curl |
| And more... | |

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Backend**: Supabase Edge Functions
- **AI**: Google Gemini Vision API
- **State Management**: TanStack Query

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

The application will be available at `http://localhost:5173`

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

## Project Structure

```
agriaid-pro/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── ui/          # shadcn/ui components
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── DiagnosisSection.tsx
│   │   ├── ChatBot.tsx
│   │   └── ...
│   ├── contexts/        # React contexts
│   ├── hooks/           # Custom hooks
│   ├── lib/             # Utility functions
│   └── pages/           # Page components
├── supabase/
│   └── functions/       # Edge functions
│       ├── analyze-crop/
│       └── chat/
└── ...
```

## Deployment

### Production Build

```bash
npm run build
```

The build output will be in the `dist/` directory, ready for deployment to any static hosting service.

### Recommended Hosting

- Vercel
- Netlify
- Cloudflare Pages

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Plant disease datasets and agricultural research references
- Open-source community for the amazing tools and libraries

---

**Made with ❤️ for farmers and agricultural communities**
