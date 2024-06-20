import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="bg-gray-100 text-gray-900 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Website</h2>
        <p className="text-xl mb-8">We provide amazing services to help you grow.</p>
        <a href="#features" className="bg-blue-600 text-white px-6 py-3 rounded">Learn More</a>
      </div>
    </section>
  );
};

export default Hero;
