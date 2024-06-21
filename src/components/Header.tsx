import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-base text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Crisis App</h1>
        <nav>
          <a href="/" className="mr-4">Home</a>
          <a href="services" className="mr-4">Services</a>
          <a href="contact">Contact Us</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
