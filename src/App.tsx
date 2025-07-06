import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import RoadmapSection from './components/RoadmapSection';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

const HomePage: React.FC = () => (
  <main>
    <HeroSection />
    <FeaturesSection />
    <TestimonialsSection />
    <PricingSection />
    <RoadmapSection />
  </main>
);

const PrivacyPolicyPage: React.FC = () => (
  <main>
    <PrivacyPolicy />
  </main>
);

const TermsOfServicePage: React.FC = () => (
  <main>
    <TermsOfService />
  </main>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
