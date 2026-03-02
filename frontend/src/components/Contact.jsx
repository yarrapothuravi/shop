import React from 'react';
import './Contact.css';

const Contact = () => {
  // IMPORTANT: Replace this with your actual Google Maps share link
  const googleMapsLink = "https://www.google.com/maps/place/RAJA+Kumar+iron+Shop+prop.+Yerrapothu+Suribabu/@16.5089464,80.620547,19.73z/data=!4m6!3m5!1s0x3a35f1e05818ba61:0xb8366a66c733016!8m2!3d16.508923!4d80.6209718!16s%2Fg%2F11pdxv3vd5";
  const phoneNumber = "+919346212163";

  const openMaps = () => {
    window.open(googleMapsLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Address</h3>
              <p>Raja Kumar Old Iron Shop</p>
              <p>Krishnalanka, Vijayawada</p>
              <p>Andhra Pradesh, India</p>
              <button className="btn btn-secondary mt-20" onClick={openMaps}>
                Get Directions
              </button>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Phone</h3>
              <p>9346212163</p>
              <p>9951750999</p>
              <a href={`tel:${phoneNumber}`} className="btn btn-secondary mt-20">
                Call Now
              </a>
            </div>

            <div className="info-card">
              <div className="info-icon">🕐</div>
              <h3>Working Hours</h3>
              <p>Monday - Saturday</p>
              <p>9:00 AM - 7:00 PM</p>
              <p className="mt-20"><strong>Sunday: Closed</strong></p>
            </div>
          </div>

          <div className="map-container">
            <iframe
              title="Raja Kumar Old Iron Shop Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.5!2d80.6209718!3d16.508923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f1e05818ba61%3A0xb8366a66c733016!2sRAJA%20Kumar%20iron%20Shop!5e0!3m2!1sen!2sin!4v1640123456789"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="map-overlay" onClick={openMaps}>
              Click to open in Google Maps
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
