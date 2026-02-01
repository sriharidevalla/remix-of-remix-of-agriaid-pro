"""
Machine Learning Models for Plant Health Advisory System

This package contains:
- EfficientNet-B4 based disease classifier
- Vision Transformer (ViT-B/16) for ensemble predictions
- Plant health chat assistant
"""

from .disease_classifier import DiseaseClassifier
from .chat_assistant import PlantHealthAssistant

__all__ = ['DiseaseClassifier', 'PlantHealthAssistant']
