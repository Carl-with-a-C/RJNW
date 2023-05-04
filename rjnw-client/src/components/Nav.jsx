import facebook from "../icons/FB-blue.svg";
import twitter from "../icons/TW-blue.svg";
import insta from "../icons/INS-blue.svg";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo-section">
        <h3 className="nav-logo">
          <a href="#">LOGO</a>
        </h3>
      </div>
      <div className="nav-link-section">
        <ul className="nav-links">
          <li className="nav-link-text">
            <a href="#">home</a>
          </li>
          <li className="nav-link-text">
            <a href="#about">about</a>
          </li>
          <li className="nav-link-text">
            <a href="#projects">projects</a>
          </li>
          <li className="nav-link-text">
            <a href="#services">services</a>
          </li>
          <li className="nav-link-text">
            <a href="#contact">contact</a>
          </li>
        </ul>
      </div>
      <div className="nav-socials-section">
        <ul className="nav-socials">
          <li>
            <a href="#">
              <img src={facebook} alt="facebook icon"></img>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twitter} alt="twitter icon"></img>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={insta} alt="instagram icon"></img>
            </a>
          </li>
        </ul>
      </div>
      <a href="#" className="nav-toggle">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
    </nav>
  );
};

export default Nav;
