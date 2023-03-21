import mvcAppImage from '../../assets/images/mvcapp.png';
import petFeedImage from '../../assets/images/petfeedapp.png';
import mongooseAppImage from '../../assets/images/mongooseapp.png';
import mySQLAppImage from '../../assets/images/mysqlapp.png';
import regExImage from '../../assets/images/gist.png';
import jsQuizImage from '../../assets/images/jsquizapp.png';
import soundsEasyImage from '../../assets/images/soundseasy.png';

export default [
  {
    title: 'Sounds Easy',
    description: 'A soundboard for cheapskates',
    gitURL: 'https://github.com/eljayman/sounds-easy',
    deployedURL: 'https://sounds-easy.herokuapp.com/',
    image: soundsEasyImage,
    tech: ['MongoDB, Mongoose', 'Express', 'React', 'Node', 'GraphQL', 'JWT'],
  },
  {
    title: 'petFeed',
    description: 'Social media app for pets!',
    gitURL: 'https://github.com/eljayman/pet-feed',
    deployedURL: 'https://petfeed.herokuapp.com/',
    image: petFeedImage,
    tech: ['Tailwind CSS', 'Cloudinary', 'Multer', 'JawsDB'],
  },
  {
    title: 'MVC Blog App',
    description: 'Tech blog app created with the MVC paradigm',
    gitURL: 'https://github.com/eljayman/14-mvc-blog-app',
    deployedURL: 'https://eljay-blog-app-01.herokuapp.com/',
    image: mvcAppImage,
    tech: ['Handlebars', 'Sessions', 'Sequelize'],
  },
  {
    title: 'Social API',
    description: 'Mongoose based API',
    gitURL: 'https://github.com/eljayman/18-social-api-mongoose-based',
    deployedURL: 'https://github.com/eljayman/18-social-api-mongoose-based',
    image: mongooseAppImage,
    tech: ['Node', 'MongoDB', 'Mongoose'],
  },
  {
    title: 'Employee Tracker',
    description: 'Queries using Node, MYSQL, MYSQL2 and inquirer',
    gitURL: 'https://github.com/eljayman/12-employee-tracker',
    deployedURL: 'https://github.com/eljayman/12-employee-tracker',
    image: mySQLAppImage,
    tech: ['MySQL', 'MySQL2', 'Inquirer'],
  },
  {
    title: 'RegEx Tutorial',
    description: 'A gist about regular expressions',
    gitURL: 'https://gist.github.com/eljayman/01f0e8811784b08e155c2597548ee182',
    deployedURL:
      'https://gist.github.com/eljayman/01f0e8811784b08e155c2597548ee182',
    image: regExImage,
    tech: ['Regular Expressions', 'GitHub Gists', 'Markdown'],
  },
  {
    title: 'JavaScript Quiz',
    description: 'My first JS application.',
    gitURL: 'https://github.com/eljayman/04-web-APIs-challenge',
    deployedURL: 'https://eljayman.github.io/04-web-APIs-challenge/',
    image: jsQuizImage,
    tech: ['JavaScript', 'HTML', 'CSS'],
  },
];
