import facebook from "../icons/FB-blue.svg";
import twitter from "../icons/TW-blue.svg";
import insta from "../icons/INS-blue.svg";

import { Link } from "react-router-dom";

const ServiceNav = () => {
  return (
    <nav className="service-navbar">
      <div className="service-nav-logo-section">
        <h3 className="service-nav-logo">
          <Link to="/">LOGO</Link>
        </h3>
      </div>
      <div className="service-nav-socials-section">
        <ul className="service-nav-socials">
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
    </nav>
  );
};

export default ServiceNav;
