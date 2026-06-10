import React, { useState } from 'react';
import { ProjectCard } from '../ProjectCard';
import projects from '../ProjectCard/projects';

const styles = {
  main: {
    justifyContent: 'flex-start',
    paddingBottom: '20px',
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
  featuredSection: {
    width: '100%',
    marginBottom: '30px',
  },
  filterContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginBottom: '25px',
    justifyContent: 'center',
  },
  filterButton: {
    padding: '8px 16px',
    border: '1px solid #ccc',
    borderRadius: '20px',
    backgroundColor: '#fff',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'all 0.2s ease',
  },
  filterButtonActive: {
    padding: '8px 16px',
    border: '1px solid #0066cc',
    borderRadius: '20px',
    backgroundColor: '#0066cc',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '14px',
  },
  grid: {
    width: '100%',
  },
};

// Get all unique technologies for filter buttons
const allProjects = projects.filter((project) => project.title !== 'RegEx Tutorial');
const featuredProject = allProjects.find((p) => p.title === 'Sounds Easy');
const otherProjects = allProjects.filter((p) => p.title !== 'Sounds Easy');

// Sort: live projects first
const sortedProjects = [...otherProjects].sort((a, b) => {
  const aHasDemo = a.deployedURL && !a.deployedURL.includes('github.com/eljayman');
  const bHasDemo = b.deployedURL && !b.deployedURL.includes('github.com/eljayman');
  if (aHasDemo && !bHasDemo) {
    return -1;
  }
  if (!aHasDemo && bHasDemo) {
    return 1;
  }
  return 0;
});

// Get unique tech categories
const techCategories = ['All', 'React', 'Node', 'MongoDB', 'JavaScript', 'CSS'];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? sortedProjects
    : sortedProjects.filter((project) =>
      project.tech.some((t) => t.toLowerCase().includes(activeFilter.toLowerCase()))
    );

  return (
    <main style={styles.main} className="portfolio-main">
      <h2 style={styles.h2}>Projects</h2>
      <p style={styles.intro}>
        A selection of projects I&apos;ve built, ranging from full-stack applications
        to API integrations. Each project showcases different technologies and
        problem-solving approaches.
      </p>

      {featuredProject && (
        <div style={styles.featuredSection}>
          <ProjectCard
            title={featuredProject.title}
            description={featuredProject.description}
            gitURL={featuredProject.gitURL}
            deployedURL={featuredProject.deployedURL}
            image={featuredProject.image}
            tech={featuredProject.tech}
            featured={true}
          />
        </div>
      )}

      <div style={styles.filterContainer}>
        {techCategories.map((tech) => (
          <button
            key={tech}
            style={activeFilter === tech ? styles.filterButtonActive : styles.filterButton}
            onClick={() => setActiveFilter(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      <div style={styles.grid} className="project-grid">
        {filteredProjects.map(({ title, description, gitURL, deployedURL, image, tech }) => (
          <ProjectCard
            key={title}
            title={title}
            description={description}
            gitURL={gitURL}
            deployedURL={deployedURL}
            image={image}
            tech={tech}
          />
        ))}
      </div>
    </main>
  );
}
