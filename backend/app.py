import os
from dotenv import load_dotenv

# Load environment variables FIRST, before any other imports
load_dotenv()

from flask import Flask
from flask_cors import CORS
from config import Config
from models import db
from routes import api

def create_app():
    """Application factory"""
    app = Flask(__name__)
    app.config.from_object(Config)
    
    # Initialize extensions
    db.init_app(app)
    CORS(app)
    
    # Register blueprints
    app.register_blueprint(api)
    
    # Create tables
    with app.app_context():
        db.create_all()
        print("Database tables created successfully!")
    
    return app

if __name__ == '__main__':
    app = create_app()
    print("=" * 50)
    print("🚀 Ravi Scrap Buyers - Backend Server")
    print("=" * 50)
    print("Server running on: http://localhost:5000")
    print("API Endpoints:")
    print("  POST /api/pickup - Create pickup request")
    print("  GET  /api/pickups - Get all pickup requests")
    print("  GET  /api/health - Health check")
    print("=" * 50)
    app.run(debug=True, host='0.0.0.0', port=5000)
