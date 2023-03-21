import React from 'react';

const styles = {
  main: {
    padding: '15px',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingBottom: '25px',
  },
  h2: {
    fontSize: '32px',
    padding: '12px',
  },
  h3: {
    padding: '8px',
  },
  ul: {
    listStyleType: 'square',
    fontSize: '18px',
  },
  a: {
    textDecoration: 'underline',
  },
};
export function Resume() {
  return (
    <main style={styles.main}>
      <h2 style={styles.h2}>Resume</h2>
      <h3 style={styles.h3}>
        <a
          style={styles.a}
          href="https://docs.google.com/document/d/1LFA126XrRJ24892_afeOGpK2wIvAmS3nF_Avq5Ss_qA/edit?usp=sharing"
        >
          View Document
        </a>
      </h3>
      <div>
        <h3 style={styles.h3}>Front-end skills:</h3>
        <ul style={styles.ul}>
          <li>HTML/CSS/Git</li>
          <li>JavaScript/ES6</li>
          <li>Bootstrap</li>
          <li>JQuery</li>
          <li>React</li>
          <li>Handlebars</li>
          <li>Progressive Web Apps</li>
        </ul>
      </div>
      <div>
        <h3 style={styles.h3}>Back-end skills:</h3>
        <ul style={styles.ul}>
          <li>MySQL</li>
          <li>Node</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>Sequelize</li>
          <li>GraphQL</li>
          <li>Express.js</li>
          <li>Testing</li>
        </ul>
      </div>
    </main>
  );
}
