import React from 'react';
import selfie from '../../assets/images/gitselfie.jpg';

const styles = {
  main: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingBottom: '25px',
  },
  h2: {
    padding: '25px',
    fontSize: '32px',
  },
  li: {
    paddingLeft: '25px',
    fontSize: '24px',
    paddingBottom: '5px',
  },

  img: {
    marginLeft: '10%',
    borderRadius: '50%',
    minWidth: '120px',
    maxWidth: '15vw',
  },
  p: {
    minWidth: '300px',
    maxWidth: '720px',
    fontSize: '18px',
    padding: '25px',
  },
};
export function AboutMe() {
  return (
    <main style={styles.main}>
      <h2 style={styles.h2}>About Me</h2>
      <ul>
        <li style={styles.li}>Full Stack Web Developer</li>

        <li style={styles.li}>
          Address: 7937 South 2940 West, West Jordan, UT
        </li>
        <li style={styles.li}>
          Email: <a href="mailto:lelandoj@gmail.com">lelandoj@gmail.com</a>
        </li>
      </ul>

      <img style={styles.img} src={selfie} alt="Selfie" />
      <p style={styles.p}>
        Welcome to my profile page. I am a junior developer looking to start a
        new career. Gaining first-hand experience as a developer is my primary
        career goal. Keeping up with an ever-changing environment is something I
        look forward to. It makes work less tedious and more engaging. Please
        see my projects that demonstrate some of the skills I&apos;ve applied in
        my studies as a graduate of the University of Utah&apos;s coding boot
        camp. Send me a message, and check out my resume.
      </p>

      <p style={styles.p}>
        I live in West Jordan, UT with my wife Alli, daughter Ella, our cat
        Pickles, and two dogs Wilbur and Olive. I consider myself a home
        improvement DIY expert, because I like to save money and I enjoy the
        satisfaction of seeing a project from start to finish. I like disc golf,
        I consider Baking and cooking worthwhile hobbies and I find coding
        rewarding at times, like solving a puzzle or playing a game.
      </p>
    </main>
  );
}
