// src/components/HomePage.js
import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarker,
  faUniversity,
  
} from '@fortawesome/free-solid-svg-icons';
import myPicture from '../../Images/bhagya-web.jpg'; // Replace with the path to your image
import nitw from '../../Images/nitw.png'; // Replace with the path to the university image
import neu from '../../Images/northeastern.png'; // Replace with the path to the university image
import dmdd from '../../Images/dmdd.JPG';
import wa from '../../Images/react-weather-app.jpeg';
import IG from '../../Images/IG.JPG';
import freecharge from '../../Images/freecharge.jpeg';
import deloitte from '../../Images/deloitte.png';
import aed from '../../Images/aed.JPG';
import linkedin from '../../Images/linkedin.png';
import outlook from '../../Images/outlook.jpeg';
const HomePage = () => {
  const [jobTitles] = useState([
    'Software Engineer',
    'Full-Stack Developer',
    'Cloud Engineer',
  ]);

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const projects = [
    {
        title: 'OneBoston-Drug Regulator (Java & Java Swing based Full Stack Project)',
        description: 'The proposed approach involves developing a centralized platform that integrates bio-chemical compound data, disease information, and drug-related details. This platform should facilitate seamless communication between doctors, employees, and organizations, incorporating a role-based access system to ensure data security. Drug regulators can benefit from a dedicated module for monitoring and evaluating the safety and efficacy of drug compounds. Additionally, the system should include features for managing medical inventory within healthcare enterprises. A robust network infrastructure will underpin this solution, fostering collaboration, compliance, and information exchange, thereby advancing drug development and optimizing healthcare delivery in response to the evolving global health landscape.',
        githubLink: '',
        image: `${aed}`
    },
    {
        title: 'E-Commerce Database Management System',
        description: 'Build an E-Commerce Database system to manage, store and retrieve data pertaining to an E-Commerce Platform. The E-commerce Database system will provide real-time tracking of online purchase operations.',
        githubLink:'https://github.com/bhagyatrivedi/DMDD_Project_Group18',
        image:`${dmdd}`,
    },
    {
        title: 'Website for Center of Innovation and Incubation - NIT Warangal',
        description: 'I spearheaded the development and maintenance of the Center of Innovation and Incubations website, leading a dynamic team of over 5 developers. Our collaborative efforts, powered by JavaScript, React, Node.js, and Google Sheet API, ensured the seamless functioning of the incubator. Additionally, I assumed sole responsibility for directing and managing the team in creating the initial MVP for a Social Media Web application tailored for NIT Warangal students. Leveraging Node.js, React, and MongoDB, we successfully crafted a platform fostering effective communication within the student community.',
        githubLink: 'https://github.com/WebdevteamIG/igconnect-frontend',
        image: `${IG}`,
    },
    {
        title: 'React Weather App',
        description: 'A weather application built using React, providing real-time weather information.',
        githubLink: 'https://github.com/yourusername/react-weather-app',
        image: `${wa}`,
    },
  ];

  const skills = [
    {
      category: 'Programming Languages',
      items: ['C++', 'Java', 'Python', 'JavaScript', 'SQL', 'HTML5', 'CSS3', 'Regex', 'Node', 'React', 'Angular'],
    },
    {
      category: 'Technologies and Tools',
      items: ['Spring', 'Spring MVC', 'Spring-Boot', 'Microservices', 'Jupyter', 'Postman', 'MongoDB', 'AWS EC2', 'AWS S3', 'Websphere', 'DB2', 'JUnit', 'Tailwind CSS'],
    },
    {
      category: 'Other Skills',
      items: ['Data Structures and Algorithms', 'Object-Oriented Programming', 'Full-Stack Software Engineering', 'Jenkins Job Automation'],
    },
  ];

  const experiences = [
    {
      title: 'Freecharge Payments - SDE Intern',
      date: 'May 2021 - July 2021',
      description: `Expanded the existing OAuth Functionality by developing the pool OAuth functionality, allowing the client to customize the token on a need basis. Developed a utility to put and fetch files onto the AWS S3 bucket using AWS-presigned URL service with NodeJS. Primary skills used - JavaScript, NodeJS`,
      image:  `${freecharge}`,  
    },
    {
      title: 'Deloitte US - India - Analyst',
      date: 'June 2022 - August 2023',
      description: `Pioneered the modernization of Dataloader from scratch for 120+ business objects using Spring and Spring JDBC, reducing the overall cost by 100% and improving the performance by 2X. Devised a utility for comparing Old Dataloader (EGL) and New Dataloader (Java) business data, resulting in the overall match of the new Data loader. Led the Design and Development of the citizen portal module for the Pandemic-EBT 2023 (School Cash Assistance) program for about 475,000 children using Angular and Spring framework. Engineered the Design and Development of an Agency project for a citizen portal to aid people with disabilities in getting appropriate medical facilities. Spearheaded a critical optimization project to streamline software development processes leveraging Jenkins Automation, resulting in the reduction of deployment time by up to 92%.`,
      image:  `${deloitte}`,  
    },
    // Add more experiences
  ];

  const updateText = (i, targetText) => {
    setTimeout(() => {
      const currentText = targetText.slice(0, i);
      setTypedText(currentText);
    }, i * 100);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTyping(true);

      const targetText = jobTitles[currentTitleIndex];

      for (let i = 0; i <= targetText.length; i++) {
        updateText(i, targetText);
      }

      setTimeout(() => {
        setIsTyping(false);

        setTimeout(() => {
          setCurrentTitleIndex((prevIndex) =>
            prevIndex === jobTitles.length - 1 ? 0 : prevIndex + 1
          );
        }, 500);
      }, (targetText.length + 1) * 100);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [jobTitles, currentTitleIndex]);

  return (
    <div className="homepage">
      <nav className="navbar">
        {/* ... your existing navbar code */}
      </nav>


      <header>
        <div className="profile">
          <img src={myPicture} alt="My Profile" />
          <div className="info">
            <h1>Bhagya Trivedi</h1>
            <p className={`${isTyping ? 'typing' : ''}`}>I am {typedText}</p>
            <p>
              <FontAwesomeIcon icon={faMapMarker} />: Boston, USA
            </p>
          </div>
        </div>
      </header>
      <section>
         <div className="resume">
      <h2>Resume</h2>
      
      <a href="https://drive.google.com/file/d/1TMD8OQ6mNcuB-qYrVGuBTO8vbR7AJkhD/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        View Resume
      </a>
    </div>
      </section>
     
      <section className="about-me">
        <h2>About Me</h2>
        <p>
          I am a motivated Master's candidate in Information Systems at Northeastern University with a strong foundation in Electrical and Electronics Engineering from NIT Warangal. As an Analyst - Java Full Stack Developer at Deloitte Consulting India Private Limited, I led transformative initiatives in modernizing data loaders and optimizing citizen portal modules, showcasing proficiency in technologies like Spring, Angular, and Node. My project portfolio, including a React Weather App and a Cloud Cafeteria digital solution, reflects my passion for innovation and problem-solving. Beyond academics, I have actively engaged in leadership roles, serving as a Technical Team Lead at the Center of Innovation and Incubation and earning recognition in the Vechain X BCG hackathon at Harvard University. With a commitment to driving positive change in the technology landscape, I am eager to contribute my skills to impactful projects and continue my journey of growth and innovation.
        </p>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        {experiences.map((experience, index) => (
          <div className="experience-item" key={index}>
            <div className="experience-logo">
              <img src={experience.image} alt={`${experience.title} Logo`} />
            </div>
            <div className="experience-details">
              <strong>
                {experience.title} - {experience.date}
              </strong>
              <p>{experience.description}</p>
            </div>
          </div>
        ))}
      </section>

    
      <section className="education">
        <h2>Education</h2>
        <div className="education-carousel">
          <div className="education-item">
            <div className="education-info">
                <div className='education-image'>
                <img src={neu} alt="University" /> 
                </div>
              
              <p>
                <strong>Master of Science in Information Systems</strong>
              </p>
              <p>
                <FontAwesomeIcon icon={faUniversity} />: Northeastern University
              </p>
              <p>
                <FontAwesomeIcon icon={faMapMarker} />: Boston, USA
              </p>
            </div>
          </div>
          <div className="education-item">
            <div className="education-info">
            <div className='education-image'>
                <img src={nitw} alt="University" /> 
                </div>
              <p>
                <strong>Bachelor of Technology in Electrical and Electronics Engineering</strong>
              </p>
              <p>
                <FontAwesomeIcon icon={faUniversity} />: National Institute of Technology, Warangal (NIT-W)
              </p>
              <p>
                <FontAwesomeIcon icon={faMapMarker} />: Warangal, India
              </p>
            </div>
          </div>
         
        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-list">
          {skills.map((skillCategory, categoryIndex) => (
            <div className="skill-item" key={categoryIndex}>
              <p>{skillCategory.category}</p>
              <ul>
                {skillCategory.items.map((skill, skillIndex) => (
                  <li key={skillIndex}>
                    {skill}
                    <div className="progress-bar">
                      <div style={{ width: `${Math.random() * 100}%` }}></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="projects-list">
          {projects.map((project, projectIndex) => (
            <div className="project-item" key={projectIndex}>
              <img src={project.image} alt={project.title} />
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <section>
        <h2>Contact me here!</h2>
  <div class="contact-icons">
    <a href="https://www.linkedin.com/in/bhagya-trivedi-5753aa114/" target="_blank" rel="noopener noreferrer">
      <img src={linkedin} alt="LinkedIn" />
    </a>
    <a href="mailto:trivedi.bh@northeastern.edu">
      <img src={outlook} alt="Email" />
    </a>
  </div>
        </section>
        
</footer>
    </div>
  );
};

export default HomePage;
