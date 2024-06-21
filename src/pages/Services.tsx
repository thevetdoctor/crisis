// src/pages/Features.tsx
import React from 'react';

const Features: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-8">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Counselling</h2>
            <p className="text-lg">Our counselling services provide support and guidance to help you navigate through personal challenges and achieve mental well-being. Our professional counselors are available to listen and offer expert advice in a confidential and safe environment.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Career Coaching</h2>
            <p className="text-lg">Our career coaching services are designed to help you discover your professional potential and achieve your career goals. Whether you are looking for a new job, planning a career change, or aiming for a promotion, our coaches are here to guide you every step of the way.</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Financial Planning</h2>
            <p className="text-lg">We offer expert financial planning services to help you manage your finances effectively. From budgeting and saving to investing and retirement planning, our financial advisors provide personalized advice tailored to your specific needs.</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Health & Wellness</h2>
            <p className="text-lg">Our health and wellness programs are designed to promote physical and mental well-being. Join our fitness classes, attend wellness workshops, and get access to resources that support a healthy lifestyle.</p>
          </div>
          {/* Add more features as needed */}
        </div>
      </div>
    </div>
  );
};

export default Features;
