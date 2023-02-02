import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={Logo} alt="pizza" width="60" />
      </div>
      <div className="nav-menu">
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/menu">
              Menu
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
