import React from 'react';
import githubicon from '../../assets/images/githubicon.png';
import linkedinicon from '../../assets/images/linkedinicon.png';

const styles = {
  footer: {
    borderTop: 'groove',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    padding: '2vw',
    height: '25vw',
    backgroundColor: 'rgba(35, 15, 50, 1)',
    minHeight: '240px',
  },
  ul: {
    padding: '2vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '75%',
  },
  img: {
    borderRadius: '50%',
    width: '15vw',
    maxWidth: '100px',
  },
};
export function Footer() {
  return (
    <footer style={styles.footer}>
      <ul style={styles.ul}>
        <li>
          <a href="https://github.com/eljayman">
            <img style={styles.img} src={githubicon} alt="My GitHub" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/leland-johnson-0111bb263/">
            <img style={styles.img} src={linkedinicon} alt="My LinkedIn" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
