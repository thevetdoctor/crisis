import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-base text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Crisis App</h1>
        <nav>
          <a href="#hero" className="mr-4">Home</a>
          <a href="#features" className="mr-4">Features</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
