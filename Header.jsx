// components/Header.jsx
import { motion } from 'framer-motion';
import './Header.css';
import profileImg from '../assets/Rushi.jpg';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="header">
      <div className="image-wrapper">
        <motion.img
          src={profileImg}
          alt="Rushikesh Kekane"
          className="profile-image"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        />
        <div className="social-icons">
          <a href="https://github.com/rushikeshkekane" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/er-rushikesh-kekane-8018a41a7/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/er_rushikesh_634?igsh=MWsyM3E3anM0YXJ5cA%3D%3D" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="header-text">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="header-title"
        >
          Hi, I'm Rushikesh Kekane
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="header-subtitle"
        >
          Full Stack Developer | React + Node.js Enthusiast
        </motion.p>
      </div>
    </header>
  );
}
