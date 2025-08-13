import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout Components
import Navbar from './components/Navbar';
import Announcement from './components/Announcement';
import Footer from './components/Footer';

// Home Page Sections
import Hero from './components/Hero';
import JobTypes from './components/JobTypes';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactForm from './components/Contact';

// Pages
import Contact from './pages/Contact';
import About from './pages/About';


// Page Layouts
const HomePage = () => (
  <div className="font-sans">
    <Announcement />
    <Hero />
    <JobTypes />
    <Services />
    <Testimonials />
    <ContactForm />
    <Footer />
  </div>
);

const AboutPage = () => (
  <div className="font-sans">
    <Navbar />
    <About />
    <Footer />
  </div>
);

const ContactPage = () => (
  <div className="font-sans">
    <Navbar />
    <Contact />
    <Footer />
  </div>
);

// App Component with Routing
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </Router>
);

export default App;
