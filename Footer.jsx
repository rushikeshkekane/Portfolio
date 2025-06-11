// components/Footer.jsx
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      &copy; {new Date().getFullYear()} Rushikesh Kekane. All rights reserved.
    </footer>
  );
}
