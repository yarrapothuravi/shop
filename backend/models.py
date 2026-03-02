from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class PickupRequest(db.Model):
    """Pickup Request Model"""
    __tablename__ = 'pickup_requests'
    
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(100), nullable=False)
    phone = db.Column(db.String(15), nullable=False)
    address = db.Column(db.Text, nullable=False)
    scrap_type = db.Column(db.String(100), nullable=False)
    quantity = db.Column(db.String(50), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    
    def __repr__(self):
        return f'<PickupRequest {self.name} - {self.phone}>'
    
    def to_dict(self):
        """Convert model to dictionary"""
        return {
            'id': self.id,
            'name': self.name,
            'phone': self.phone,
            'address': self.address,
            'scrap_type': self.scrap_type,
            'quantity': self.quantity,
            'created_at': self.created_at.strftime('%Y-%m-%d %H:%M:%S')
        }
