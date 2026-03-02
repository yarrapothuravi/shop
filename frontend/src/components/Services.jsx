import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🔩',
      title: 'Iron Scrap',
      description: 'Old iron materials, gates, grills, and metal scraps'
    },
    {
      icon: '🔴',
      title: 'Copper',
      description: 'Copper wires, pipes, utensils, and copper scraps'
    },
    {
      icon: '⚪',
      title: 'Aluminum',
      description: 'Aluminum vessels, window frames, and sheets'
    },
    {
      icon: '📰',
      title: 'Newspapers & Books',
      description: 'Old newspapers, magazines, books, and cardboard'
    },
    {
      icon: '💻',
      title: 'E-Waste',
      description: 'Old computers, laptops, mobiles, and electronic items'
    },
   
    {
      icon: '🚗',
      title: 'Vehicle Scrap',
      description: 'Old vehicles, bike parts, and auto scraps'
    },
    {
      icon: '📦',
      title: 'Other Materials',
      description: 'Plastic, glass, and other recyclable materials'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          We buy all types of iron and scrap materials at the best competitive market rates
        </p>

        <div className="grid grid-4">
          {services.map((service, index) => (
            <div className="card service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="price-note">
          <p>
            <strong>📊 Note:</strong> Prices are based on daily market rates. 
            Contact us for today's best offer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
