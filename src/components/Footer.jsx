import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <AiOutlineInstagram />
        <AiOutlineTwitter />
        <AiFillFacebook />
        <AiFillLinkedin />
      </div>
      <div className="credits">
        <p>&copy; 2023 Garciaspizzeria.com</p>
      </div>
    </footer>
  );
};

export default Footer;
