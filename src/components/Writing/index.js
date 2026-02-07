import React from 'react';
import projects from '../ProjectCard/projects';

const styles = {
  main: {
    justifyContent: 'flex-start',
    paddingBottom: '10px',
  },
  h2: {
    padding: '25px 0 20px 0',
    fontSize: '28px',
  },
  intro: {
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '25px',
  },
  article: {
    backgroundColor: '#ffffff',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '20px',
    marginBottom: '20px',
    display: 'flex',
    gap: '20px',
    width: '100%',
  },
  thumbnail: {
    width: '120px',
    height: '90px',
    objectFit: 'cover',
    borderRadius: '4px',
    flexShrink: 0,
  },
  articleContent: {
    flex: 1,
  },
  articleTitle: {
    fontSize: '20px',
    marginBottom: '8px',
  },
  meta: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '10px',
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
  tag: {
    backgroundColor: '#e8f4fc',
    color: '#0066cc',
    padding: '2px 8px',
    borderRadius: '12px',
    fontSize: '12px',
  },
  articleDescription: {
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '12px',
  },
  link: {
    color: '#0066cc',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

const writingProjects = projects.filter((project) => project.title === 'RegEx Tutorial');

// Additional metadata for writing pieces
const writingMeta = {
  'RegEx Tutorial': {
    date: 'December 2022',
    readTime: '8 min read',
    tags: ['Tutorial', 'Regular Expressions'],
  },
};

export function Writing() {
  return (
    <main style={styles.main}>
      <h2 style={styles.h2}>Writing</h2>
      <p style={styles.intro}>
        I enjoy breaking down complex technical concepts into digestible tutorials, when I have time...<br />
        Here you&apos;ll find my technical writing. More to come soon!
      </p>
      {writingProjects.map(({ title, description, deployedURL, gitURL, image }) => {
        const meta = writingMeta[title] || {};
        return (
          <article key={title} className="writing-article" style={styles.article}>
            <img src={image} alt={title} style={styles.thumbnail} />
            <div style={styles.articleContent}>
              <h3 style={styles.articleTitle}>{title}</h3>
              <div style={styles.meta}>
                {meta.date && (
                  <span style={styles.metaItem}>
                    <i className="far fa-calendar-alt"></i> {meta.date}
                  </span>
                )}
                {meta.readTime && (
                  <span style={styles.metaItem}>
                    <i className="far fa-clock"></i> {meta.readTime}
                  </span>
                )}
                {meta.tags && meta.tags.map((tag) => (
                  <span key={tag} style={styles.tag}>{tag}</span>
                ))}
              </div>
              <p style={styles.articleDescription}>{description}</p>
              <a href={deployedURL || gitURL} style={styles.link} target="_blank" rel="noopener noreferrer">
                Read Article →
              </a>
            </div>
          </article>
        );
      })}
    </main>
  );
}
