import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AIAdvances from './components/AIAdvances';
import UseCases from './components/UseCases';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-b from-white to-slalom-lightGray dark:from-slalom-navy dark:to-black transition-colors duration-200">
        <Header />
        <main>
          <Hero />
          <AIAdvances />
          <UseCases />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;