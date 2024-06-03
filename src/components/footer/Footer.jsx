import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './footer.scss'
const Footer = () => {
  return (
    <footer className="footer">        
   

   <p>Click Now !!</p>
        <ul className="footer-links">
          <li>
            <a href="https://github.com/berkehanirmak">
            <FaGithub />

            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/berkehan-irmak-386a9a200/">
            <FaLinkedin />
            </a>
          </li>
        </ul>
        
        <p>&copy; 2024 Berkehan Irmak</p>
    </footer>
  );
};

export default Footer;
