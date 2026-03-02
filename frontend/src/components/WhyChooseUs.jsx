import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: '💰',
      title: 'Best Market Rates',
      description: 'We offer the most competitive prices in the market'
    },
    {
      icon: '⚖️',
      title: 'Accurate Weight',
      description: 'Digital weighing ensures precise measurements'
    },
    {
      icon: '⚡',
      title: 'Instant Payment',
      description: 'Immediate UPI payment on the spot'
    },
    {
      icon: '🚀',
      title: 'Same Day Pickup',
      description: 'Fast and convenient doorstep collection service'
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <h2 className="section-title">Why Choose Us?</h2>
        
        <div className="grid grid-4">
          {reasons.map((reason, index) => (
            <div className="card reason-card" key={index}>
              <div className="reason-icon">{reason.icon}</div>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-description">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
