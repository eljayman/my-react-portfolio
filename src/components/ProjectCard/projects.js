import mvcAppImage from '../../assets/images/mvcapp.png';
import petFeedImage from '../../assets/images/petfeedapp.png';
import mongooseAppImage from '../../assets/images/mongooseapp.png';
import mySQLAppImage from '../../assets/images/mysqlapp.png';
import jsQuizImage from '../../assets/images/jsquizapp.png';
import soundsEasyImage from '../../assets/images/soundseasy.png';
import weatherAppImage from '../../assets/images/weatherapp.png';
import dayPlannerImage from '../../assets/images/dayPlannerApp.png';

export default [
  {
    title: 'Sounds Easy',
    description: 'A full-stack MERN soundboard application with user authentication and custom sound uploads',
    gitURL: 'https://github.com/eljayman/sounds-easy',
    deployedURL: null,
    image: soundsEasyImage,
    tech: ['MongoDB', 'Express', 'React', 'Node', 'GraphQL', 'JWT'],
  },
  {
    title: 'petFeed',
    description: 'A social media platform for pet owners to share photos and connect with other pet lovers',
    gitURL: 'https://github.com/eljayman/pet-feed',
    deployedURL: null,
    image: petFeedImage,
    tech: ['Tailwind CSS', 'Cloudinary', 'Multer', 'JawsDB'],
  },
  {
    title: 'Weather App',
    description: 'A weather dashboard that displays current and 5-day forecasts using the OpenWeather API',
    gitURL: 'https://github.com/eljayman/06-weather-app-challenge',
    deployedURL: 'https://eljayman.github.io/06-weather-app-challenge/',
    image: weatherAppImage,
    tech: ['JavaScript', 'API Integration', 'HTML', 'CSS'],
  },
  {
    title: 'Work Day Scheduler',
    description: 'A daily planner app with color-coded time blocks for past, present, and future hours',
    gitURL: 'https://github.com/eljayman/05-work-day-scheduler',
    deployedURL: 'https://eljayman.github.io/05-work-day-scheduler/',
    image: dayPlannerImage,
    tech: ['JavaScript', 'Day.js', 'HTML', 'CSS'],
  },
  {
    title: 'MVC Blog App',
    description: 'A tech blog application built with the Model-View-Controller architecture pattern',
    gitURL: 'https://github.com/eljayman/14-mvc-blog-app',
    deployedURL: null,
    image: mvcAppImage,
    tech: ['Handlebars', 'Sessions', 'Sequelize'],
  },
  {
    title: 'Social API',
    description: 'A RESTful API for a social network application with users, thoughts, and reactions',
    gitURL: 'https://github.com/eljayman/18-social-api-mongoose-based',
    deployedURL: null,
    image: mongooseAppImage,
    tech: ['Node', 'MongoDB', 'Mongoose'],
  },
  {
    title: 'Employee Tracker',
    description: 'A CLI application for managing employee databases with departments, roles, and managers',
    gitURL: 'https://github.com/eljayman/12-employee-tracker',
    deployedURL: null,
    image: mySQLAppImage,
    tech: ['MySQL', 'MySQL2', 'Inquirer'],
  },
  {
    title: 'JavaScript Quiz',
    description: 'An interactive timed quiz application testing JavaScript fundamentals with score tracking',
    gitURL: 'https://github.com/eljayman/04-web-APIs-challenge',
    deployedURL: 'https://eljayman.github.io/04-web-APIs-challenge/',
    image: jsQuizImage,
    tech: ['JavaScript', 'HTML', 'CSS'],
  },
];
