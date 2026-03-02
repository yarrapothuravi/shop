import React, { useState } from 'react';
import './PickupForm.css';

const PickupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    scrap_type: '',
    quantity: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // WhatsApp numbers
  const whatsappNumbers = ['919346212163', '919951750999'];

  const scrapTypes = [
    'Iron Scrap',
    'Copper',
    'Aluminum',
    'Newspapers & Books',
    'E-Waste',
    'Old Furniture',
    'Vehicle Scrap',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Sanitize input - remove script tags and dangerous characters
    const sanitizedValue = value.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '').trim();
    
    setFormData({
      ...formData,
      [name]: sanitizedValue
    });
    
    // Clear message when user starts typing
    if (message.text) {
      setMessage({ type: '', text: '' });
    }
  };

  // Validate phone number
  const validatePhone = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/; // Indian mobile number validation
    return phoneRegex.test(phone);
  };

  // Validate name
  const validateName = (name) => {
    return name.length >= 3 && /^[a-zA-Z\s]+$/.test(name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      // Comprehensive validation
      if (!formData.name || !formData.phone || !formData.address || !formData.scrap_type || !formData.quantity) {
        setMessage({
          type: 'error',
          text: '⚠️ Please fill all required fields'
        });
        setLoading(false);
        return;
      }

      // Validate name
      if (!validateName(formData.name)) {
        setMessage({
          type: 'error',
          text: '⚠️ Please enter a valid name (minimum 3 characters, letters only)'
        });
        setLoading(false);
        return;
      }

      // Validate phone number
      if (!validatePhone(formData.phone)) {
        setMessage({
          type: 'error',
          text: '⚠️ Please enter a valid 10-digit Indian mobile number'
        });
        setLoading(false);
        return;
      }

      // Validate address length
      if (formData.address.length < 10) {
        setMessage({
          type: 'error',
          text: '⚠️ Please provide a complete address (minimum 10 characters)'
        });
        setLoading(false);
        return;
      }

      // Create message for WhatsApp
      const whatsappMessage = `Hello! I would like to book a scrap pickup:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nAddress: ${formData.address}\nScrap Type: ${formData.scrap_type}\nQuantity: ${formData.quantity}\n\nPlease confirm the pickup time. Thank you!`;
      const encodedMessage = encodeURIComponent(whatsappMessage);

      // Send to first WhatsApp number
      const whatsappUrl = `https://wa.me/${whatsappNumbers[0]}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

      setMessage({
        type: 'success',
        text: '✅ Pickup request sent to WhatsApp! We will contact you shortly.'
      });

      // Clear form
      setFormData({
        name: '',
        phone: '',
        address: '',
        scrap_type: '',
        quantity: ''
      });

      // Keep message visible for 3 seconds
      setTimeout(() => {
        setMessage({ type: '', text: '' });
      }, 3000);

    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Error sending request. Please try again or call us directly.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pickup-form-section" id="pickup-form">
      <div className="container">
        <h2 className="section-title">Book Free Pickup</h2>
        <p className="section-subtitle">
          Fill out the form below and we'll contact you shortly to schedule a pickup
        </p>

        <div className="form-container">
          <form onSubmit={handleSubmit} className="pickup-form">
            <div className="form-group">
              <label className="form-label">Your Name *</label>
              <input
                type="text"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                className="form-input"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter 10-digit mobile number"
                pattern="[0-9]{10}"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Pickup Address *</label>
              <textarea
                name="address"
                className="form-textarea"
                value={formData.address}
                onChange={handleChange}
                required
                placeholder="Enter complete address with landmarks"
              ></textarea>
            </div>

            <div className="form-group">
              <label className="form-label">Scrap Type *</label>
              <select
                name="scrap_type"
                className="form-select"
                value={formData.scrap_type}
                onChange={handleChange}
                required
              >
                <option value="">Select scrap type</option>
                {scrapTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Approximate Quantity *</label>
              <input
                type="text"
                name="quantity"
                className="form-input"
                value={formData.quantity}
                onChange={handleChange}
                required
                placeholder="e.g., 50 kg, 2 bags, 1 vehicle"
              />
            </div>

            {message.text && (
              <div className={`form-message ${message.type}`}>
                {message.text}
              </div>
            )}

            <button 
              type="submit" 
              className="btn btn-primary btn-submit"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit Request'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PickupForm;
