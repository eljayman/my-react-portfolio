import React from 'react';
import { ProjectCard } from '../ProjectCard';
import projects from '../ProjectCard/projects';

const styles = {
  main: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  h2: {
    padding: '8px',
    fontSize: '32px',
    backgroundColor: 'rgba(35, 15, 50, 1)',
  },
};

const projectCardComponents = projects.map(
  ({ title, description, gitURL, deployedURL, image }) => {
    return (
      <ProjectCard
        key={title}
        title={title}
        description={description}
        gitURL={gitURL}
        deployedURL={deployedURL}
        image={image}
      />
    );
  }
);

export function Portfolio() {
  return (
    <>
      <h2 style={styles.h2}>Projects</h2>
      <main style={styles.main}>{projectCardComponents}</main>
    </>
  );
}
