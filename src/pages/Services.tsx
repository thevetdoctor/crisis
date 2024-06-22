// src/pages/Services.tsx
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../ModalAnimation.css';

const services = [
  { title: 'Counselling', description: 'Our expert counsellors are here to provide you with personalized guidance and support, helping you navigate life\'s challenges.' },
  { title: 'Mental Health Resources', description: 'Access a wide range of mental health resources including articles, videos, and self-help tools to improve your well-being.' },
  { title: 'Community Support', description: 'Join our supportive community where you can share your experiences, ask questions, and connect with others who understand.' },
  { title: 'Crisis Intervention', description: 'Immediate support and intervention for those in crisis, ensuring you get the help you need when you need it most.' },
  { title: 'Workshops and Seminars', description: 'Participate in workshops and seminars led by experts in mental health, covering a variety of topics to enhance your knowledge and skills.' },
  { title: 'Online Therapy', description: 'Convenient and confidential online therapy sessions with licensed professionals, available from the comfort of your home.' },
  { title: 'Resource Library', description: 'An extensive library of articles, eBooks, and other materials to support your mental health journey.' },
  { title: 'Crisis Helpline', description: '24/7 crisis helpline providing immediate assistance and support for those in urgent need.' },
  { title: 'Self-Assessment Tools', description: 'Interactive self-assessment tools to help you better understand your mental health and identify areas for improvement.' },
  { title: 'Career Coaching', description: 'Our career coaching services are designed to help you discover your professional potential and achieve your career goals. Whether you are looking for a new job, planning a career change, or aiming for a promotion, our coaches are here to guide you every step of the way.' },
  { title: 'Financial Planning', description: 'We offer expert financial planning services to help you manage your finances effectively. From budgeting and saving to investing and retirement planning, our financial advisors provide personalized advice tailored to your specific needs.' },
  { title: 'Health & Wellness', description: 'Our health and wellness programs are designed to promote physical and mental well-being. Join our fitness classes, attend wellness workshops, and get access to resources that support a healthy lifestyle.' },
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<{ title: string, description: string } | null>(null);
  const [showModal, setShowModal] = useState(false);

   const openModal = (service: { title: string, description: string }) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-8 mb-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded shadow cursor-pointer" onClick={() => openModal(service)}>
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <CSSTransition
          in={showModal}
          timeout={1000}
          classNames="modal"
          unmountOnExit
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeModal}>
            <div className="bg-white p-8 rounded shadow-lg max-w-lg w-full transform transition-transform duration-300 scale-100 zoom-in">
              <h2 className="text-2xl font-bold mb-4">{selectedService.title}</h2>
              <p className="text-lg mb-8">{selectedService.description}</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded" onClick={closeModal}>Close</button>
            </div>
          </div>
        </CSSTransition>
      )}
    </div>
  );
};

export default Services;
