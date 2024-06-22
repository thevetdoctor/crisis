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
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  
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

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setShowInstallPrompt(false);
      }
      setDeferredPrompt(null);
    }
  };

  return (
    <Router>

    <div className='text-center'>
      <p className={`p-4 text-white ${onlineStatus ? 'bg-green-500' : 'bg-red-500'}`}>You are currently {onlineStatus ? 'online' : 'offline'}</p>
      <Header />
      <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      <Footer />
      {showInstallPrompt && (
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-800 text-white text-center">
            <p>Install this app on your device for a better experience.</p>
            <button
              onClick={handleInstallClick}
              className="bg-blue-600 text-white px-6 py-3 rounded mt-2 hover:bg-blue-800"
            >
              Install
            </button>
          </div>
        )}
    </div>
    </Router>
  );
};

export default App;
