// components/Projects.jsx
import { motion } from 'framer-motion';
import './Projects.css';

const projectData = [
  {
    id: 1,
    title: 'NewsMonkey - Daily Top Headlines (Web Application)',
    description: 'A responsive news web app that displays real-time top headlines using React, Tailwind CSS, and Framer Motion.',
    link: '#',
  },
  {
    id: 2,
    title: 'E-commerce Web App',
    description: 'A responsive mobile store web app built with React and Firebase, featuring real-time inventory and secure checkout.',
    link: '#',
  },
  {
    id: 3,
    title: 'Healthcare Dashboard',
    description: 'A full-featured hospital dashboard for managing patient records, appointments, and analytics with secure authentication.',
    link: '#',
  },
  {
    id: 4,
    title: 'Online subjective answer verifying system',
    description: 'An AI-powered platform to verify student subject answers online with real-time evaluation and accuracy scoring.',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section className="projects">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <motion.div
            className="project-card"
            key={project.id}
            whileHover={{ scale: 1.05, rotate: 1 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.link} className="project-link">View More</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
