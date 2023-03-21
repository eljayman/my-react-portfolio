import React from 'react';
import gitIcon from '../../assets/images/githubicon.png';
export function ProjectCard({
  title,
  description,
  gitURL,
  deployedURL,
  image,
  tech,
}) {
  const styles = {
    card: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      border: 'groove',
      margin: '5px',
      width: '270px',
      padding: '10px',
      height: 'fit-content',
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
    ul: {
      fontFamily: 'Carter One',
      border: 'solid 1px',
      borderRadius: '5px',
      marginTop: '2px',
      marginBottom: '5px',
      backgroundColor: 'rgba(70, 30, 100, 0.5)',
      listStyle: 'square',
    },
  };

  const techList = tech.map((e) => {
    return <li key={e}>{e}</li>;
  });

  return (
    <div className="card" style={styles.card}>
      <a href={deployedURL}>
        <h3>{title}</h3>
        <img style={styles.thumbnail} src={image} />
      </a>
      <ul style={styles.ul}>Technology Used:{techList}</ul>
      <div style={styles.subDiv}>
        <p>{description}</p>
        <a href={gitURL}>
          <img style={styles.img} src={gitIcon} alt={title} />
        </a>
      </div>
    </div>
  );
}
