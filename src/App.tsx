import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import DownloadCTA from './components/DownloadCTA';
import Footer from './components/Footer';
import ChatbotBubble from './components/ChatbotBubble';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white text-secondary-800">
      <Header />
      <main className="text-lg">
        <Hero />
        <Features />
        <HowItWorks />
        <Benefits />
        <FAQ />
        <DownloadCTA />
  
      </main>
      <Footer />
    </div>
  );
}

export default App;
