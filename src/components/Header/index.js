import React, { useState, useRef, useEffect } from 'react';
import githubicon from '../../assets/images/githubicon.png';
import linkedinicon from '../../assets/images/linkedinicon.png';

const styles = {
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '40px',
  },
  ul: {
    display: 'flex',
    flexDirection: 'row',
    gap: '30px',
    padding: '10px',
    justifyContent: 'center',
    fontSize: '18px',
  },
  socialLinks: {
    display: 'flex',
    flexDirection: 'row',
    gap: '15px',
  },
  socialIcon: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
  },
};

export function Header({ currentPage, handlePageChange }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchCurrentX = useRef(0);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const handleNavClick = (page) => {
    handlePageChange(page);
    closeDrawer();
  };

  // Handle touch events for swipe-to-close
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchCurrentX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchCurrentX.current = e.touches[0].clientX;
    const diff = touchCurrentX.current - touchStartX.current;

    // Only allow swiping right (to close)
    if (diff > 0 && drawerRef.current) {
      drawerRef.current.style.transform = `translateX(calc(-280px + ${diff}px))`;
    }
  };

  const handleTouchEnd = () => {
    const diff = touchCurrentX.current - touchStartX.current;

    // If swiped more than 100px to the right, close the drawer
    if (diff > 100) {
      closeDrawer();
    }

    // Reset transform to let CSS handle it
    if (drawerRef.current) {
      drawerRef.current.style.transform = '';
    }
  };

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  const navItems = [
    { page: 'AboutMe', label: 'About', href: '#about' },
    { page: 'Portfolio', label: 'Projects', href: '#projects' },
    { page: 'Writing', label: 'Writing', href: '#writing' },
    { page: 'Contact', label: 'Contact', href: '#contact' },
    { page: 'Resume', label: 'Resume', href: '#resume' },
  ];

  return (
    <header style={styles.header}>
      {/* Desktop Navigation */}
      <ul style={styles.ul} className="nav nav-tabs desktop-nav">
        {navItems.map((item) => (
          <li key={item.page} className="nav-item">
            <a
              href={item.href}
              onClick={() => handlePageChange(item.page)}
              className={currentPage === item.page ? 'nav-link active' : 'nav-link'}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div style={styles.socialLinks} className="desktop-social">
        <a href="https://github.com/eljayman">
          <img style={styles.socialIcon} src={githubicon} alt="My GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/leland-johnson-0111bb263/">
          <img style={styles.socialIcon} src={linkedinicon} alt="My LinkedIn" />
        </a>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className={`hamburger-btn ${drawerOpen ? 'open' : ''}`}
        onClick={toggleDrawer}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Drawer Overlay */}
      <div
        className={`drawer-overlay ${drawerOpen ? 'open' : ''}`}
        onClick={closeDrawer}
      />

      {/* Mobile Drawer */}
      <nav
        ref={drawerRef}
        className={`mobile-drawer ${drawerOpen ? 'open' : ''}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.page} className="nav-item">
              <a
                href={item.href}
                onClick={() => handleNavClick(item.page)}
                className={currentPage === item.page ? 'nav-link active' : 'nav-link'}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="social-links">
          <a href="https://github.com/eljayman">
            <img style={styles.socialIcon} src={githubicon} alt="My GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/leland-johnson-0111bb263/">
            <img style={styles.socialIcon} src={linkedinicon} alt="My LinkedIn" />
          </a>
        </div>
      </nav>
    </header>
  );
}
