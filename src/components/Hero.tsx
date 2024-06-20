import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="bg-gray-100 text-gray-900 py-20 min-h-screen">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Welcome to <span className="text-purple-700 font-playwrite">CRISIS</span></h2>
        <p className="text-xl mb-8">Nothing is really impossible.</p>
        <p className="text-xl mb-8">Your state of mind determines a lot about what you allow to happen to you...</p>
        <a href="#features" className="bg-blue-500 text-white font-bold px-6 py-3 rounded hover:bg-blue-700">Explore opportunites!</a>
      </div>
    </section>
  );
};

export default Hero;
