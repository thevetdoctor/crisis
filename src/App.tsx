import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './App.css';

const App: React.FC = () => {
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

  useEffect(() => {
    const updateOnlineStatus = () => {
      setOnlineStatus(navigator.onLine);
    };

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  return (
    <Router>

    <div className='text-center'>
      <p className={`p-4 text-white ${onlineStatus ? 'bg-green-500' : 'bg-red-500'}`}>You are currently {onlineStatus ? 'online' : 'offline'}</p>
      <Header />
      {/* <Hero /> */}
      <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      <Footer />
    </div>
    </Router>
  );
};

export default App;
