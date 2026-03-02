import React from 'react';
import './About.css';

const About = () => {
  const features = [
    {
      icon: '⚖️',
      title: 'Digital Weighing Machine',
      description: 'Accurate and transparent weighing with digital precision'
    },
    {
      icon: '💳',
      title: 'Instant UPI Payment',
      description: 'Get paid immediately via UPI, no cash hassles'
    },
    {
      icon: '🚚',
      title: 'Doorstep Pickup',
      description: 'We come to your location and collect the scrap '
    },
    {
      icon: '🤝',
      title: 'Trusted Local Business',
      description: 'Serving the community with honesty and reliability'
    }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p className="section-subtitle">
          Raja Kumar Old Iron Shop is your trusted partner for all iron and scrap needs in Krishnalanka, Vijayawada. 
          We are committed to providing the best market rates with complete transparency and honest dealing.
        </p>

        <div className="grid grid-4">
          {features.map((feature, index) => (
            <div className="card feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
