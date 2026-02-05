import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { AboutMe } from './components/AboutMe';
import { Portfolio } from './components/Portfolio';
import { Writing } from './components/Writing';
import { Contact } from './components/Contact';
import { Resume } from './components/Resume';

function App() {
  const [currentPage, setCurrentPage] = useState('AboutMe');
  const handlePageChange = (page) => setCurrentPage(page);
  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Writing') {
      return <Writing />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <AboutMe handlePageChange={handlePageChange} />;
  };
  return (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </>
  );
}

export default App;
