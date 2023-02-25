import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { AboutMe } from './components/AboutMe';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Resume } from './components/Resume';
import { Footer } from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('AboutMe');
  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <AboutMe />;
  };
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </>
  );
}

export default App;
