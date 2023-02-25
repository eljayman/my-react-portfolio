import React from 'react';
import sandy from '../../assets/images/sandy.png';

const styles = {
  header: {
    backgroundImage: `url('${sandy}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  h1: {
    fontSize: '48px',
    padding: '3vw',
  },
  ul: {
    display: 'flex',
    flexDirection: 'row',
    width: '95%',
    padding: '1vw',
    justifyContent: 'space-around',
    fontSize: '18px',
  },
};
export function Header({ currentPage, handlePageChange }) {
  return (
    <header style={styles.header}>
      <h1 style={styles.h1}>Leland Johnson</h1>
      <ul style={styles.ul} className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#about-me"
            onClick={() => handlePageChange('AboutMe')}
            className={
              currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'
            }
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={
              currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'
            }
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={
              currentPage === 'Contact' ? 'nav-link active' : 'nav-link'
            }
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={
              currentPage === 'Resume' ? 'nav-link active' : 'nav-link'
            }
          >
            Resume
          </a>
        </li>
      </ul>
    </header>
  );
}
