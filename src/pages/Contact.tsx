// src/pages/Contact.tsx
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-8">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <form className="max-w-lg mx-auto bg-white p-8 rounded shadow">
          <div className="mb-6">
            <label htmlFor="name" className="block text-left text-lg font-medium mb-2">Name</label>
            <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded" required />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-left text-lg font-medium mb-2">Email</label>
            <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded" required />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-left text-lg font-medium mb-2">Message</label>
            <textarea id="message" className="w-full p-3 border border-gray-300 rounded" rows={5} required></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-700">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
