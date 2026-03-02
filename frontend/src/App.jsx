import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import PickupForm from './components/PickupForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import './index.css';

function App() {
  return (
    <div className="App">
      <LoadingScreen />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <PickupForm />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
}

export default App;
