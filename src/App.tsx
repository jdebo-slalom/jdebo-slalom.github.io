import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AIAdvances from './components/AIAdvances';
import UseCases from './components/UseCases';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slalom-lightGray">
      <Header />
      <main>
        <Hero />
        <AIAdvances />
        <UseCases />
      </main>
      <Footer />
    </div>
  );
}

export default App;