import facebook from "../icons/FB-blue.svg";
import twitter from "../icons/TW-blue.svg";
import insta from "../icons/INS-blue.svg";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo-section">
        <h3 className="nav-logo">LOGO</h3>
      </div>
      <div className="nav-link-section">
        <ul className="nav-links">
          <li className="nav-link-text">
            <a href="#">about</a>
          </li>
          <li className="nav-link-text">
            <a href="#">contact</a>
          </li>
          <li className="nav-link-text">
            <a href="#">roofing</a>
          </li>
          <li className="nav-link-text">
            <a href="#">joinery</a>
          </li>
          <li className="nav-link-text">
            <a href="#">conversion</a>
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
