"""
Plant Health Advisory System - Flask Backend
Powered by EfficientNet-B4 and Vision Transformer (ViT) Models
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import base64
import logging
from datetime import datetime

from config import Config
from models.disease_classifier import DiseaseClassifier
from models.chat_assistant import PlantHealthAssistant

# Initialize Flask app
app = Flask(__name__)
app.config.from_object(Config)
CORS(app, origins=Config.ALLOWED_ORIGINS)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Initialize ML models
disease_classifier = DiseaseClassifier()
chat_assistant = PlantHealthAssistant()

# Disease database for validation
DISEASE_DATABASE = {
    "tomato": ["Early Blight", "Late Blight", "Leaf Mold", "Septoria Leaf Spot", "Tomato Mosaic Virus", "Yellow Leaf Curl Virus", "Bacterial Spot", "Healthy"],
    "potato": ["Early Blight", "Late Blight", "Black Scurf", "Blackleg", "Potato Virus Y", "Brown Rot", "Scab", "Leaf Roll", "Healthy"],
    "grape": ["Black Rot", "Esca", "Leaf Blight", "Powdery Mildew", "Downy Mildew", "Anthracnose", "Healthy"],
    "apple": ["Apple Scab", "Black Rot", "Cedar Apple Rust", "Fire Blight", "Powdery Mildew", "Bitter Pit", "Healthy"],
    "maize": ["Gray Leaf Spot", "Common Rust", "Northern Corn Leaf Blight", "Southern Corn Leaf Blight", "Maize Dwarf Mosaic", "Healthy"],
    "rice": ["Rice Blast", "Brown Spot", "Bacterial Leaf Blight", "Sheath Blight", "Tungro Virus", "Leaf Smut", "Healthy"],
    "wheat": ["Brown Rust", "Yellow Rust", "Stem Rust", "Septoria", "Fusarium Head Blight", "Powdery Mildew", "Tan Spot", "Healthy"],
    "cotton": ["Bacterial Blight", "Cotton Leaf Curl Virus", "Fusarium Wilt", "Verticillium Wilt", "Alternaria Leaf Spot", "Healthy"],
    "orange": ["Citrus Canker", "Citrus Greening", "Melanose", "Anthracnose", "Phytophthora Root Rot", "Black Spot", "Healthy"],
    "chilli": ["Bacterial Spot", "Chilli Leaf Curl Virus", "Anthracnose", "Powdery Mildew", "Mosaic Virus", "Phytophthora Blight", "Healthy"],
    "cucumber": ["Downy Mildew", "Powdery Mildew", "Angular Leaf Spot", "Anthracnose", "Cucumber Mosaic Virus", "Healthy"],
    "strawberry": ["Gray Mold", "Powdery Mildew", "Leaf Scorch", "Leaf Spot", "Verticillium Wilt", "Angular Leaf Spot", "Healthy"],
    "sugarcane": ["Red Rot", "Orange Rust", "Brown Rust", "Mosaic Virus", "Smut", "Ratoon Stunting", "Healthy"],
    "soybean": ["Bacterial Blight", "Frogeye Leaf Spot", "Sudden Death Syndrome", "Brown Stem Rot", "Asian Rust", "Healthy"],
    "pepper": ["Bacterial Spot", "Phytophthora Blight", "Anthracnose", "Mosaic Virus", "Cercospora Leaf Spot", "Healthy"],
}


@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint for monitoring"""
    return jsonify({
        "status": "healthy",
        "timestamp": datetime.utcnow().isoformat(),
        "models": {
            "efficientnet_b4": disease_classifier.is_loaded(),
            "vit_b16": disease_classifier.is_vit_loaded(),
            "chat_model": chat_assistant.is_loaded()
        }
    })


@app.route('/api/analyze-crop', methods=['POST', 'OPTIONS'])
def analyze_crop():
    """
    Analyze crop image for disease detection using EfficientNet-B4 and ViT ensemble.
    
    Expected JSON payload:
    {
        "image": "base64_encoded_image_data",
        "cropType": "tomato"
    }
    """
    if request.method == 'OPTIONS':
        return jsonify({}), 200
    
    try:
        data = request.get_json()
        
        if not data:
            return jsonify({"error": "No data provided"}), 400
        
        image_data = data.get('image')
        crop_type = data.get('cropType', '').lower()
        
        if not image_data:
            return jsonify({"error": "Image data is required"}), 400
        
        if not crop_type:
            return jsonify({"error": "Crop type is required"}), 400
        
        # Extract base64 data
        if ',' in image_data:
            image_data = image_data.split(',')[1]
        
        # Validate base64
        try:
            image_bytes = base64.b64decode(image_data)
            if len(image_bytes) < 100:
                return jsonify({"error": "Invalid image data"}), 400
        except Exception:
            return jsonify({"error": "Invalid base64 encoding"}), 400
        
        # Get valid diseases for crop
        valid_diseases = DISEASE_DATABASE.get(crop_type, [])
        
        # Run inference through EfficientNet-B4 and ViT ensemble
        logger.info(f"Analyzing {crop_type} image ({len(image_bytes)} bytes)")
        
        result = disease_classifier.predict(
            image_bytes=image_bytes,
            crop_type=crop_type,
            valid_diseases=valid_diseases
        )
        
        logger.info(f"Analysis complete: {result.get('disease')} ({result.get('confidence')}%)")
        
        return jsonify({"result": result})
    
    except Exception as e:
        logger.error(f"Error in analyze_crop: {str(e)}")
        return jsonify({"error": "Analysis failed. Please try again."}), 500


@app.route('/api/chat', methods=['POST', 'OPTIONS'])
def chat():
    """
    Chat endpoint for plant health advisory.
    
    Expected JSON payload:
    {
        "messages": [{"role": "user", "content": "..."}],
        "language": "en",
        "sessionId": "unique_session_id",
        "userId": "user_id" (optional)
    }
    """
    if request.method == 'OPTIONS':
        return jsonify({}), 200
    
    try:
        data = request.get_json()
        
        if not data:
            return jsonify({"error": "No data provided"}), 400
        
        messages = data.get('messages', [])
        language = data.get('language', 'en')
        session_id = data.get('sessionId')
        user_id = data.get('userId')
        
        if not messages:
            return jsonify({"error": "Messages are required"}), 400
        
        # Generate response using chat model
        logger.info(f"Processing chat request (session: {session_id}, language: {language})")
        
        response = chat_assistant.generate_response(
            messages=messages,
            language=language,
            session_id=session_id,
            user_id=user_id
        )
        
        return jsonify({"response": response})
    
    except Exception as e:
        logger.error(f"Error in chat: {str(e)}")
        return jsonify({"error": "Chat service unavailable. Please try again."}), 500


@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Endpoint not found"}), 404


@app.errorhandler(500)
def internal_error(error):
    return jsonify({"error": "Internal server error"}), 500


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    debug = os.environ.get('FLASK_DEBUG', 'False').lower() == 'true'
    
    logger.info(f"Starting Plant Health Advisory API on port {port}")
    logger.info(f"EfficientNet-B4 model: {'loaded' if disease_classifier.is_loaded() else 'not loaded'}")
    logger.info(f"ViT-B/16 model: {'loaded' if disease_classifier.is_vit_loaded() else 'not loaded'}")
    
    app.run(host='0.0.0.0', port=port, debug=debug)
