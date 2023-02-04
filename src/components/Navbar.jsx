import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  if (toggleNav) {
    document.body.style.overflow = "hidden";
    document.querySelectorAll(".nav-menu ul li").forEach((el) => {
      el.addEventListener("click", () => {
        document.querySelector(".navbar").classList.add("active");
      });
    });
  } else {
    document.body.style.overflow = "scroll";
  }

  return (
    <header className="header">
      <div className="logo-container">
        <img src={Logo} alt="pizza" width="60" />
      </div>
      <div onClick={() => setToggleNav(!toggleNav)} className="icon">
        {toggleNav ? <AiOutlineClose /> : <FaHamburger />}
      </div>
      <div className={toggleNav ? "nav-menu navbar active" : "nav-menu navbar"}>
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
