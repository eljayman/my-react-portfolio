import React from 'react';
import profilePhoto from '../../assets/images/selfie.jpg';

const styles = {
  main: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingBottom: '25px',
  },
  h3: {
    padding: '0',
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  p: {
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '20px',
    width: '100%',
  },
  techGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '30px',
    width: '100%',
    padding: '0',
    margin: '20px 0',
  },
  techCategory: {
    textAlign: 'left',
  },
  techCategoryTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '12px',
    marginTop: '15px',
  },
  techIcon: {
    fontSize: '16px',
    color: '#0066cc',
    marginRight: '10px',
    width: '20px',
    textAlign: 'center',
  },
  techItem: {
    fontSize: '15px',
    marginBottom: '6px',
    display: 'flex',
    alignItems: 'center',
  },
  techList: {
    fontSize: '16px',
    lineHeight: '1.8',
  },
};

export function AboutMe({ handlePageChange }) {
  return (
    <main style={styles.main}>
      {/* Profile Hero Section */}
      <div className="profile-hero">
        <img src={profilePhoto} alt="Leland Johnson" className="profile-photo" />
        <div className="profile-info">
          <h1>Leland Johnson</h1>
          <h2>Full Stack Web Developer</h2>
          <p className="location"><i className="fas fa-map-marker-alt"></i> West Jordan, UT</p>
          <span className="availability"><i className="fas fa-circle"></i> Open to opportunities</span>
          <div className="cta-buttons">
            <a
              href="#contact"
              className="cta-button"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange('Contact');
              }}
            >
              Let&apos;s Connect
            </a>
            <a
              href="https://drive.google.com/file/d/1Dd5MW_XX8tTCR1S3KhJ6K9U_lJHCwgi1/view?usp=sharing"
              className="cta-button secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>

      <p style={styles.p}>
        I am a full stack software engineer with several years of hands-on development experience working with a variety of technologies and frameworks across frontend, backend, and cloud platforms.
      </p>

      <p style={styles.p}>
        Beyond web development, I have extensive experience working with large datasets, data modeling, and database administration. I&apos;m comfortable optimizing database performance, designing efficient schemas, and managing complex data infrastructures to support scalable applications.
      </p>

      <h3 style={styles.h3}>Technical Skills</h3>
      <div style={styles.techGrid}>
        <div style={styles.techCategory}>
          <div style={styles.techCategoryTitle}>Frontend</div>
          <div style={styles.techItem}>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <i className="fab fa-react" style={styles.techIcon}></i>
              React
            </a>
          </div>
          <div style={styles.techItem}>
            <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <i className="fab fa-js-square" style={styles.techIcon}></i>
              TypeScript
            </a>
          </div>
          <div style={styles.techItem}>
            <a href="https://shopify.dev/docs/api/liquid" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <i className="fab fa-shopify" style={styles.techIcon}></i>
              Shopify Liquid
            </a>
          </div>
        </div>
        <div style={styles.techCategory}>
          <div style={styles.techCategoryTitle}>Backend</div>
          <div style={styles.techItem}>
            <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <i className="fab fa-node-js" style={styles.techIcon}></i>
              Node.js
            </a>
          </div>
          <div style={styles.techItem}>
            <a href="https://expressjs.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <i className="fas fa-server" style={styles.techIcon}></i>
              Express
            </a>
          </div>
          <div style={styles.techItem}>
            <a href="https://jwt.io" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <i className="fas fa-sun" style={styles.techIcon}></i>
              JWT
            </a>
          </div>
        </div>
        <div style={styles.techCategory}>
          <div style={styles.techCategoryTitle}>Databases</div>
          <div style={styles.techItem}>
            <a href="https://www.postgresql.org" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <i className="fas fa-circle" style={styles.techIcon}></i>
              PostgreSQL
            </a>
          </div>
          <div style={styles.techItem}>
            <a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <i className="fas fa-water" style={styles.techIcon}></i>
              MySQL
            </a>
          </div>
          <div style={styles.techItem}>
            <a href="https://www.mongodb.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <i className="fab fa-leaf" style={styles.techIcon}></i>
              MongoDB
            </a>
          </div>
        </div>
        <div style={styles.techCategory}>
          <div style={styles.techCategoryTitle}>APIs & Integrations</div>
          <div style={styles.techItem}>
            <a href="https://restfulapi.net" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <i className="fas fa-plug" style={styles.techIcon}></i>
              RESTful APIs
            </a>
          </div>
          <div style={styles.techItem}>
            <a href="https://graphql.org" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <i className="fas fa-gem" style={styles.techIcon}></i>
              GraphQL
            </a>
          </div>
          <div style={styles.techItem}>
            <a href="https://sellercentral.amazon.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <i className="fab fa-amazon" style={styles.techIcon}></i>
              Amazon SP-API
            </a>
          </div>
          <div style={styles.techItem}>
            <a href="https://www.shopify.com/developers" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <i className="fab fa-shopify" style={styles.techIcon}></i>
              Shopify API
            </a>
          </div>
        </div>
        <div style={styles.techCategory}>
          <div style={styles.techCategoryTitle}>Cloud & DevOps</div>
          <div style={styles.techItem}>
            <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <i className="fab fa-aws" style={styles.techIcon}></i>
              AWS
            </a>
          </div>
          <div style={styles.techItem}>
            <a href="https://azure.microsoft.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <i className="fab fa-microsoft" style={styles.techIcon}></i>
              Microsoft Azure
            </a>
          </div>
          <div style={styles.techItem}>
            <a href="https://www.ssh.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <i className="fas fa-terminal" style={styles.techIcon}></i>
              SSH/FTP
            </a>
          </div>
        </div>
        <div style={styles.techCategory}>
          <div style={styles.techCategoryTitle}>Tools</div>
          <div style={styles.techItem}>
            <a href="https://www.npmjs.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <i className="fab fa-npm" style={styles.techIcon}></i>
              NPM
            </a>
          </div>
          <div style={styles.techItem}>
            <a href="https://shopify.dev/docs/themes/tools/cli" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <i className="fas fa-wrench" style={styles.techIcon}></i>
              Shopify CLI
            </a>
          </div>
          <div style={styles.techItem}>
            <a href="https://ngrok.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <i className="fas fa-tunnel" style={styles.techIcon}></i>
              Ngrok
            </a>
          </div>
        </div>
        <div style={styles.techCategory}>
          <div style={styles.techCategoryTitle}>Version Control</div>
          <div style={styles.techItem}>
            <a href="https://git-scm.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <i className="fab fa-git-alt" style={styles.techIcon}></i>
              Git
            </a>
          </div>
          <div style={styles.techItem}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <i className="fab fa-github" style={styles.techIcon}></i>
              GitHub
            </a>
          </div>
          <div style={styles.techItem}>
            <a href="https://bitbucket.org" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <i className="fab fa-bitbucket" style={styles.techIcon}></i>
              Bitbucket
            </a>
          </div>
        </div>
        <div style={styles.techCategory}>
          <div style={styles.techCategoryTitle}>AI Tools</div>
          <div style={styles.techItem}>
            <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <i className="fas fa-brain" style={styles.techIcon}></i>
              Claude
            </a>
          </div>
          <div style={styles.techItem}>
            <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <i className="fas fa-code" style={styles.techIcon}></i>
              Cursor
            </a>
          </div>
          <div style={styles.techItem}>
            <a href="https://openai.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <i className="fas fa-robot" style={styles.techIcon}></i>
              OpenAI
            </a>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="education-section">
        <h3 style={styles.h3}>Education & Certifications</h3>
        <div className="education-item">
          <div className="education-title">
            <i className="fas fa-graduation-cap" style={{ marginRight: '10px', color: '#0066cc' }}></i>
            Full Stack Web Development Boot Camp
          </div>
          <div className="education-school">University of Utah</div>
          <a
            href="https://www.credly.com/badges/710ec66c-f723-4576-b209-a2334dd12e71/linked_in_profile"
            target="_blank"
            rel="noopener noreferrer"
            className="credential-link"
          >
            <i className="fas fa-certificate"></i> View Credential
          </a>
        </div>
      </div>

      <p style={styles.p}>
        I have embraced AI as an industry-changing technology and leveraged it to significantly accelerate my development workflow. By integrating AI-powered tools like Claude and Cursor into my development process, I&apos;ve been able to build modern applications at a faster pace while maintaining high standards of code quality and application performance. This approach allows me to focus on architecture and problem-solving while AI assists with routine coding tasks.
      </p>

      <p style={styles.p}>
        I am looking to leverage my skills and knowledge to help your company grow. I enjoy keeping up with an ever-changing environment and find coding rewarding—whether it&apos;s solving a complex problem or building something from scratch.
      </p>

      <p style={styles.p}>
        I live with my wife Alli, daughter Ella, our cat Pickles, and two dogs Wilbur and Olive. I consider myself a home improvement DIY expert, because I like to save money and enjoy the satisfaction of seeing a project from start to finish. I like disc golf, baking, cooking, and find coding rewarding at times, like solving a puzzle or playing a game.
      </p>
    </main>
  );
}
