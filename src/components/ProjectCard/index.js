import React from 'react';
import gitIcon from '../../assets/images/githubicon.png';
export function ProjectCard({
  title,
  description,
  gitURL,
  deployedURL,
  image,
}) {
  const styles = {
    a: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      border: 'groove',
      margin: '5px',
      width: '270px',
      padding: '10px',
      height: '285px',
      backgroundImage: image,
    },
    thumbnail: {
      width: '100%',
      height: '200px',
    },
    subDiv: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%',
    },
    img: {
      borderRadius: '50%',
      width: '35px',
      maxWidth: '100px',
    },
  };
  return (
    <a href={deployedURL} className="card" style={styles.a}>
      <h3>{title}</h3>
      <img style={styles.thumbnail} src={image} />
      <div style={styles.subDiv}>
        <p>{description}</p>
        <a href={gitURL}>
          <img style={styles.img} src={gitIcon} />
        </a>
      </div>
    </a>
  );
}
