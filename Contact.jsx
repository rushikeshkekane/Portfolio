// components/Contact.jsx
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaInstagram } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact">
      <h2 className="section-title">Contact Me</h2>
      <p className="contact-text">Feel free to reach out via any platform below!</p>

      <div className="contact-details">
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href="tel:+917219080839" className="contact-link">+91 7219080839</a>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:rushikeshkekane97@gmail.com" className="contact-link">rushikeshkekane97@gmail.com</a>
        </div>
      </div>

      <div className="contact-icons">
        <a href="https://github.com/rushikeshkekane" className="icon-link" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/er-rushikesh-kekane-8018a41a7/" className="icon-link" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.instagram.com/er_rushikesh_634?igsh=MWsyM3E3anM0YXJ5cA%3D%3D" className="icon-link" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
    </section>
  );
}
