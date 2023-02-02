import Logo from "../assets/pizzaLogo.png";

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={Logo} alt="pizza" width="60" />
      </div>
      <div className="nav-menu">
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
