from flask import Blueprint, request, jsonify
from models import db, PickupRequest
from datetime import datetime

api = Blueprint('api', __name__, url_prefix='/api')

@api.route('/pickup', methods=['POST'])
def create_pickup():
    """Create a new pickup request"""
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'phone', 'address', 'scrap_type', 'quantity']
        for field in required_fields:
            if not data.get(field):
                return jsonify({
                    'success': False,
                    'message': f'Missing required field: {field}'
                }), 400
        
        # Create new pickup request
        pickup = PickupRequest(
            name=data['name'],
            phone=data['phone'],
            address=data['address'],
            scrap_type=data['scrap_type'],
            quantity=data['quantity']
        )
        
        db.session.add(pickup)
        db.session.commit()
        
        return jsonify({
            'success': True,
            'message': 'Pickup request submitted successfully! We will contact you soon.',
            'data': pickup.to_dict()
        }), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({
            'success': False,
            'message': f'Error creating pickup request: {str(e)}'
        }), 500

@api.route('/pickups', methods=['GET'])
def get_pickups():
    """Get all pickup requests (Admin use)"""
    try:
        pickups = PickupRequest.query.order_by(PickupRequest.created_at.desc()).all()
        return jsonify({
            'success': True,
            'count': len(pickups),
            'data': [pickup.to_dict() for pickup in pickups]
        }), 200
        
    except Exception as e:
        return jsonify({
            'success': False,
            'message': f'Error fetching pickup requests: {str(e)}'
        }), 500

@api.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'success': True,
        'message': 'API is running',
        'timestamp': datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S')
    }), 200
