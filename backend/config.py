"""
Configuration for Plant Health Advisory Flask Backend
"""

import os
from pathlib import Path


class Config:
    """Base configuration"""
    
    # Flask settings
    SECRET_KEY = os.environ.get('SECRET_KEY', 'plant-health-advisory-secret-key')
    DEBUG = False
    TESTING = False
    
    # CORS settings
    ALLOWED_ORIGINS = [
        "http://localhost:3000",
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "https://planthealth123.lovable.app",
        "*"  # Allow all for development
    ]
    
    # Model paths
    BASE_DIR = Path(__file__).parent
    MODELS_DIR = BASE_DIR / "models" / "weights"
    
    # EfficientNet-B4 configuration
    EFFICIENTNET_MODEL_PATH = MODELS_DIR / "efficientnet_b4_plant_disease.pth"
    EFFICIENTNET_INPUT_SIZE = (380, 380)
    
    # Vision Transformer configuration
    VIT_MODEL_PATH = MODELS_DIR / "vit_b16_plant_disease.pth"
    VIT_INPUT_SIZE = (224, 224)
    
    # Ensemble weights
    EFFICIENTNET_WEIGHT = 0.6
    VIT_WEIGHT = 0.4
    
    # Image preprocessing
    IMAGE_MEAN = [0.485, 0.456, 0.406]
    IMAGE_STD = [0.229, 0.224, 0.225]
    MAX_IMAGE_SIZE = 10 * 1024 * 1024  # 10MB
    
    # Chat model settings
    CHAT_MODEL_PATH = MODELS_DIR / "plant_health_llm"
    MAX_CONTEXT_LENGTH = 4096
    MAX_RESPONSE_TOKENS = 1024
    
    # Database settings (optional, for session storage)
    DATABASE_URL = os.environ.get('DATABASE_URL', 'sqlite:///plant_health.db')
    
    # Logging
    LOG_LEVEL = os.environ.get('LOG_LEVEL', 'INFO')
    LOG_FORMAT = '%(asctime)s - %(name)s - %(levelname)s - %(message)s'


class DevelopmentConfig(Config):
    """Development configuration"""
    DEBUG = True
    

class ProductionConfig(Config):
    """Production configuration"""
    DEBUG = False
    ALLOWED_ORIGINS = [
        "https://planthealth123.lovable.app"
    ]


class TestingConfig(Config):
    """Testing configuration"""
    TESTING = True
    DEBUG = True


# Configuration dictionary
config = {
    'development': DevelopmentConfig,
    'production': ProductionConfig,
    'testing': TestingConfig,
    'default': DevelopmentConfig
}
