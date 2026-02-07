import React from 'react';

export function ProjectCard({
  title,
  description,
  gitURL,
  deployedURL,
  image,
  tech,
  featured = false,
}) {
  const hasLiveDemo = deployedURL && !deployedURL.includes('github.com/eljayman');

  const styles = {
    card: {
      display: 'flex',
      flexDirection: featured ? 'row' : 'column',
      border: featured ? '2px solid #0066cc' : '1px solid #ccc',
      borderRadius: '8px',
      width: '100%',
      maxWidth: featured ? '100%' : '320px',
      minHeight: featured ? 'auto' : '420px',
      backgroundColor: '#ffffff',
      overflow: 'hidden',
      position: 'relative',
    },
    imageContainer: {
      position: 'relative',
      flex: featured ? '0 0 50%' : 'none',
    },
    thumbnailLink: {
      display: 'block',
    },
    thumbnail: {
      width: '100%',
      height: featured ? '100%' : '180px',
      minHeight: featured ? '250px' : 'auto',
      objectFit: 'cover',
    },
    liveBadge: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      backgroundColor: '#28a745',
      color: '#fff',
      padding: '4px 10px',
      borderRadius: '12px',
      fontSize: '11px',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
    },
    featuredBadge: {
      position: 'absolute',
      top: '10px',
      left: '10px',
      backgroundColor: '#0066cc',
      color: '#fff',
      padding: '4px 10px',
      borderRadius: '12px',
      fontSize: '11px',
      fontWeight: 'bold',
    },
    content: {
      padding: featured ? '25px' : '15px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      flex: 1,
    },
    title: {
      fontSize: featured ? '24px' : '18px',
      margin: 0,
    },
    description: {
      fontSize: featured ? '16px' : '14px',
      lineHeight: '1.6',
      color: '#555',
      margin: 0,
      flex: featured ? 'none' : 1,
    },
    techSection: {
      marginTop: featured ? '15px' : 'auto',
    },
    techLabel: {
      fontSize: '12px',
      fontWeight: 'bold',
      color: '#666',
      marginBottom: '8px',
    },
    techList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px',
      padding: 0,
      margin: 0,
      listStyle: 'none',
    },
    techTag: {
      backgroundColor: '#f0f0f0',
      padding: '4px 10px',
      borderRadius: '12px',
      fontSize: '12px',
      color: '#444',
    },
    links: {
      display: 'flex',
      gap: '15px',
      paddingTop: '12px',
      borderTop: '1px solid #eee',
    },
    link: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      fontSize: '14px',
      color: '#0066cc',
      textDecoration: 'none',
    },
  };

  return (
    <div className={`card ${featured ? 'featured-card' : ''}`} style={styles.card}>
      <div style={styles.imageContainer}>
        <a href={deployedURL || gitURL} style={styles.thumbnailLink} target="_blank" rel="noopener noreferrer">
          <img
            style={styles.thumbnail}
            src={image}
            alt={`Screenshot of ${title}`}
            loading="lazy"
          />
        </a>
        {featured && <span style={styles.featuredBadge}>Featured Project</span>}
        {hasLiveDemo && <span style={styles.liveBadge}><i className="fas fa-circle" style={{ fontSize: '6px' }}></i> Live</span>}
      </div>
      <div style={styles.content}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.description}>{description}</p>
        <div style={styles.techSection}>
          <div style={styles.techLabel}>Built with</div>
          <ul style={styles.techList}>
            {tech.map((t) => (
              <li key={t} style={styles.techTag}>{t}</li>
            ))}
          </ul>
        </div>
        <div style={styles.links}>
          <a href={gitURL} style={styles.link} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> Code
          </a>
          {hasLiveDemo && (
            <a href={deployedURL} style={styles.link} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt"></i> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
