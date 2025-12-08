

import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AccessibilityProvider } from './contexts/AccessibilityContext';
import { Navbar } from './components/Layout/Navbar';
import { Footer } from './components/Layout/Footer';
import { AccessibilityPanel } from './components/Layout/AccessibilityPanel';
import ScrollToTop from './components/Shared/ScrollToTop';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import PracticeAreasPage from './pages/PracticeAreasPage';
import About from './pages/About';
import NewsPage from './pages/NewsPage';
import FAQPage from './pages/FAQPage';
import NoticesPage from './pages/NoticesPage';
import ResearchPage from './pages/ResearchPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';

const App: React.FC = () => {
  return (
    <AccessibilityProvider>
      <Router>
        <ScrollToTop />
        <a href="#main-content" className="skip-link font-bold focus:outline-none focus:ring-2 focus:ring-yellow-400">
          Skip to Content
        </a>
        <div className="min-h-screen flex flex-col bg-white transition-colors duration-300">
          <Navbar />
          <main id="main-content" className="flex-grow">
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/practice-areas" element={<PracticeAreasPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/notices" element={<NoticesPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/booking" element={<BookingPage />} />
          </Routes>
          </main>
          <Footer />
          <AccessibilityPanel />
        </div>
      </Router>
    </AccessibilityProvider>
  );
};

export default App;