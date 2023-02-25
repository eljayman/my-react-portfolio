import React from 'react';
import { ProjectCard } from '../ProjectCard';
import mvcAppImage from '../../assets/images/mvcapp.png';
import petFeedImage from '../../assets/images/petfeedapp.png';
import weatherAppImage from '../../assets/images/weatherapp.png';
import mongooseAppImage from '../../assets/images/mongooseapp.png';
import mySQLAppImage from '../../assets/images/mysqlapp.png';
import regExImage from '../../assets/images/gist.png';
import jsQuizImage from '../../assets/images/jsquizapp.png';

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

const projects = [
  {
    title: 'MVC Blog App',
    description: 'Tech blog app created with the MVC paradigm',
    gitURL: 'https://github.com/eljayman/14-mvc-blog-app',
    deployedURL: 'https://eljay-blog-app-01.herokuapp.com/',
    image: mvcAppImage,
  },
  {
    title: 'petFeed',
    description: 'Social media app for pets!',
    gitURL: 'https://github.com/eljayman/pet-feed',
    deployedURL: 'https://petfeed.herokuapp.com/',
    image: petFeedImage,
  },
  {
    title: 'Weather App',
    description: '5-day weather forecast',
    gitURL: 'https://github.com/eljayman/06-weather-app-challenge',
    deployedURL: 'https://eljayman.github.io/06-weather-app-challenge/',
    image: weatherAppImage,
  },
  {
    title: 'Social API',
    description: 'Mongoose based API',
    gitURL: 'https://github.com/eljayman/18-social-api-mongoose-based',
    deployedURL: 'https://github.com/eljayman/18-social-api-mongoose-based',
    image: mongooseAppImage,
  },
  {
    title: 'Employee Tracker',
    description: 'Queries using Node, MYSQL, MYSQL2 and inquirer',
    gitURL: 'https://github.com/eljayman/12-employee-tracker',
    deployedURL: 'https://github.com/eljayman/12-employee-tracker',
    image: mySQLAppImage,
  },
  {
    title: 'RegEx Tutorial',
    description: 'A gist about regular expressions',
    gitURL: 'https://gist.github.com/eljayman/01f0e8811784b08e155c2597548ee182',
    deployedURL:
      'https://gist.github.com/eljayman/01f0e8811784b08e155c2597548ee182',
    image: regExImage,
  },
  {
    title: 'JavaScript Quiz',
    description: 'My first JS application.',
    gitURL: 'https://github.com/eljayman/04-web-APIs-challenge',
    deployedURL: 'https://eljayman.github.io/04-web-APIs-challenge/',
    image: jsQuizImage,
  },
];

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
