#!/bin/bash

# Plant Health Advisory System - Backend Startup Script

echo "================================================"
echo "  Plant Health Advisory System - Flask Backend"
echo "  Powered by EfficientNet-B4 & ViT Models"
echo "================================================"

# Check Python version
python_version=$(python3 --version 2>&1)
echo "Python Version: $python_version"

# Activate virtual environment if exists
if [ -d "venv" ]; then
    echo "Activating virtual environment..."
    source venv/bin/activate
fi

# Set environment variables
export FLASK_APP=app.py
export FLASK_ENV=development
export FLASK_DEBUG=1

# Check if requirements are installed
echo "Checking dependencies..."
pip install -r requirements.txt --quiet

# Start the Flask server
echo ""
echo "Starting Flask server on http://localhost:5000"
echo "Press Ctrl+C to stop"
echo ""

python app.py
