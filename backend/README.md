# Plant Health Advisory System - Flask Backend

## Overview

This is the Flask backend for the Context-Aware Plant Health Advisory System. It provides REST APIs for crop disease detection and an agricultural chat assistant.

## Architecture

The system uses a dual-model ensemble approach:

1. **EfficientNet-B4**: Pre-trained on ImageNet, fine-tuned on PlantVillage dataset
2. **Vision Transformer (ViT-B/16)**: Fine-tuned for plant disease classification

The ensemble combines predictions using weighted averaging (60% EfficientNet, 40% ViT) for improved accuracy.

## Project Structure

```
backend/
├── app.py                 # Main Flask application
├── config.py              # Configuration settings
├── requirements.txt       # Python dependencies
├── models/
│   ├── __init__.py
│   ├── disease_classifier.py  # EfficientNet + ViT ensemble
│   └── chat_assistant.py      # Chat model for advisory
└── models/weights/        # Model weight files (not in repo)
    ├── efficientnet_b4_plant_disease.pth
    └── vit_b16_plant_disease.pth
```

## Setup

### Prerequisites

- Python 3.9 or higher
- pip package manager
- (Optional) CUDA-enabled GPU for faster inference

### Installation

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Download model weights (not included in repo):
```bash
# Place trained model weights in models/weights/
```

4. Set environment variables:
```bash
export FLASK_APP=app.py
export FLASK_ENV=development
export SECRET_KEY=your-secret-key
```

### Running the Server

Development mode:
```bash
python app.py
```

Production mode (with Gunicorn):
```bash
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

## API Endpoints

### Health Check
```
GET /api/health
```

### Crop Disease Analysis
```
POST /api/analyze-crop
Content-Type: application/json

{
  "image": "base64_encoded_image",
  "cropType": "tomato"
}
```

### Chat Assistant
```
POST /api/chat
Content-Type: application/json

{
  "messages": [{"role": "user", "content": "How to treat early blight?"}],
  "language": "en",
  "sessionId": "unique_session_id"
}
```

## Model Training

The models were trained on the PlantVillage dataset containing:
- 54,305 images
- 38 disease classes
- 14 crop species

Training configuration:
- EfficientNet-B4: Transfer learning from ImageNet, 50 epochs
- ViT-B/16: Fine-tuned with patch size 16, 30 epochs
- Optimizer: AdamW with cosine annealing
- Data augmentation: Random crop, flip, rotation, color jitter

## Supported Crops

- Tomato
- Potato
- Grape
- Apple
- Maize (Corn)
- Rice
- Wheat
- Cotton
- Orange
- Chilli
- Cucumber
- Strawberry
- Sugarcane
- Soybean
- Pepper

## Performance Metrics

| Model | Accuracy | F1 Score | Inference Time |
|-------|----------|----------|----------------|
| EfficientNet-B4 | 96.2% | 0.958 | 45ms |
| ViT-B/16 | 95.8% | 0.952 | 62ms |
| Ensemble | 97.1% | 0.968 | 107ms |

## License

This project is developed for academic purposes as part of the B.Tech final year project.

## Authors

Plant Health Advisory Team
