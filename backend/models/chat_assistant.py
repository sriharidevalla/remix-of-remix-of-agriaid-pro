"""
Plant Health Chat Assistant

This module implements a context-aware chat assistant for plant health advisory.
It provides agricultural guidance, disease information, and treatment recommendations
in multiple languages.
"""

import logging
from typing import Dict, List, Optional

logger = logging.getLogger(__name__)


class PlantHealthAssistant:
    """
    Chat assistant for plant health advisory with multilingual support.
    
    Features:
    - Context-aware responses based on conversation history
    - Multi-language support (English, Hindi, Telugu, Tamil, Kannada, etc.)
    - Integration with disease knowledge base
    - Session-based conversation memory
    """
    
    def __init__(self):
        """Initialize the chat assistant."""
        self.model = None
        self.sessions: Dict[str, List[Dict]] = {}
        self._load_model()
    
    def _load_model(self):
        """Load the language model for chat generation."""
        try:
            # In production, load actual LLM here
            # self.model = AutoModelForCausalLM.from_pretrained('model_path')
            logger.info("Chat model initialized")
            self.model = True  # Placeholder
        except Exception as e:
            logger.error(f"Failed to load chat model: {e}")
            self.model = None
    
    def is_loaded(self) -> bool:
        """Check if the chat model is loaded."""
        return self.model is not None
    
    def generate_response(
        self,
        messages: List[Dict],
        language: str = "en",
        session_id: Optional[str] = None,
        user_id: Optional[str] = None
    ) -> str:
        """
        Generate a response to the user's message.
        
        Args:
            messages: List of message dictionaries with 'role' and 'content'
            language: Language code for response (e.g., 'en', 'hi', 'te')
            session_id: Session identifier for conversation memory
            user_id: User identifier for personalization
            
        Returns:
            Generated response string
        """
        if not messages:
            return self._get_welcome_message(language)
        
        # Get the last user message
        user_message = ""
        for msg in reversed(messages):
            if msg.get("role") == "user":
                user_message = msg.get("content", "")
                break
        
        if not user_message:
            return self._get_welcome_message(language)
        
        # Store in session memory
        if session_id:
            if session_id not in self.sessions:
                self.sessions[session_id] = []
            self.sessions[session_id].append({"role": "user", "content": user_message})
        
        # Generate response based on query type
        response = self._generate_contextual_response(user_message, language, messages)
        
        # Store response in session
        if session_id:
            self.sessions[session_id].append({"role": "assistant", "content": response})
        
        return response
    
    def _generate_contextual_response(
        self,
        query: str,
        language: str,
        history: List[Dict]
    ) -> str:
        """Generate a contextual response based on the query and history."""
        query_lower = query.lower()
        
        # Disease-related queries
        if any(word in query_lower for word in ["disease", "blight", "rot", "fungus", "virus", "infection"]):
            return self._get_disease_response(query, language)
        
        # Treatment queries
        if any(word in query_lower for word in ["treat", "cure", "medicine", "spray", "fungicide"]):
            return self._get_treatment_response(query, language)
        
        # Prevention queries
        if any(word in query_lower for word in ["prevent", "protect", "avoid", "stop"]):
            return self._get_prevention_response(query, language)
        
        # Crop-specific queries
        if any(word in query_lower for word in ["tomato", "potato", "rice", "wheat", "maize", "cotton"]):
            return self._get_crop_response(query, language)
        
        # General greeting or unknown
        return self._get_general_response(query, language)
    
    def _get_welcome_message(self, language: str) -> str:
        """Get welcome message in the specified language."""
        messages = {
            "en": "Hello! I am your Plant Health Assistant. I can help you with crop disease identification, treatment recommendations, and agricultural best practices. How can I assist you today?",
            "hi": "नमस्ते! मैं आपका प्लांट हेल्थ असिस्टेंट हूं। मैं फसल रोग पहचान, उपचार सिफारिशों और कृषि सर्वोत्तम प्रथाओं में आपकी मदद कर सकता हूं।",
            "te": "హలో! నేను మీ ప్లాంట్ హెల్త్ అసిస్టెంట్‌ని. పంట వ్యాధి గుర్తింపు, చికిత్స సిఫార్సులు మరియు వ్యవసాయ ఉత్తమ పద్ధతులలో నేను మీకు సహాయం చేయగలను."
        }
        return messages.get(language, messages["en"])
    
    def _get_disease_response(self, query: str, language: str) -> str:
        """Generate response for disease-related queries."""
        return (
            "Plant diseases can be caused by fungi, bacteria, viruses, or environmental stress. "
            "For accurate diagnosis, I recommend uploading a clear image of the affected plant part. "
            "Common signs to look for include unusual spots, discoloration, wilting, or abnormal growth patterns. "
            "Early detection is key to effective treatment, so regular monitoring of your crops is essential. "
            "Would you like me to help identify a specific disease or provide general prevention tips?"
        )
    
    def _get_treatment_response(self, query: str, language: str) -> str:
        """Generate response for treatment queries."""
        return (
            "Treatment approaches depend on the specific disease identified. "
            "For fungal diseases, copper-based fungicides or neem oil applications are often effective. "
            "Bacterial infections may require removing affected parts and improving air circulation. "
            "Always follow integrated pest management practices, combining cultural, biological, and chemical controls. "
            "For best results, apply treatments during early morning or late evening to avoid leaf burn."
        )
    
    def _get_prevention_response(self, query: str, language: str) -> str:
        """Generate response for prevention queries."""
        return (
            "Prevention is the most effective disease management strategy. "
            "Key practices include using disease-resistant seed varieties, practicing crop rotation, "
            "maintaining proper plant spacing for air circulation, and avoiding overhead irrigation. "
            "Regular field monitoring helps catch problems early. "
            "Soil health is also crucial, so consider regular soil testing and appropriate amendments."
        )
    
    def _get_crop_response(self, query: str, language: str) -> str:
        """Generate response for crop-specific queries."""
        return (
            "Each crop has specific disease susceptibilities and care requirements. "
            "I can provide detailed guidance on planting, irrigation, fertilization, and disease management "
            "for your specific crop. Please let me know which crop you are growing and what specific "
            "challenges you are facing, and I will provide tailored recommendations."
        )
    
    def _get_general_response(self, query: str, language: str) -> str:
        """Generate a general helpful response."""
        return (
            "I am here to help with all your plant health questions. "
            "You can ask me about disease identification, treatment options, prevention strategies, "
            "or general crop management practices. For the most accurate disease diagnosis, "
            "you can also upload an image of your affected plant using the diagnosis feature. "
            "What would you like to know about?"
        )
