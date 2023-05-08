import facebook from "../icons/FB-blue.svg";
import twitter from "../icons/TW-blue.svg";
import insta from "../icons/INS-blue.svg";

import { Link } from "react-router-dom";
import { useState } from "react";

const ServiceNav = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="service-navbar">
      <div className="service-nav-logo-section">
        <h3 className="service-nav-logo">
          <Link reloadDocument to="/">
            LOGO
          </Link>
        </h3>
      </div>
      <div className="service-nav-link-section">
        <ul className="service-nav-links">
          <li className="services-nav-link-text">
            <Link reloadDocument to="/">
              home
            </Link>
          </li>
          <li className="services-nav-link-text">
            <Link to="/facias">facias</Link>
          </li>
          <li className="services-nav-link-text">
            <Link to="/re-roof">re-roof</Link>
          </li>
          <li className="services-nav-link-text">
            <Link to="/conversions">conversions</Link>
          </li>
        </ul>
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
      <div className="nav-toggle" onClick={() => setNavOpen(!navOpen)}>
        <span className={navOpen ? "bar top-bar" : "bar"}></span>
        <span className={navOpen ? "bar mid-bar" : "bar"}></span>
        <span className={navOpen ? "bar bottom-bar" : "bar"}></span>
      </div>

      <div
        className="nav-overlay"
        style={{
          height: navOpen ? "calc(100vh - 5em)" : "0",
          transitionDelay: navOpen ? "0s" : "0.5s",
        }}
      >
        <div
          className="overlay-links-container"
          style={{
            transform: navOpen ? "scale(1)" : "scale(0)",
            transition: "1s",
            transitionDelay: navOpen ? "1s" : "0s",
            opacity: navOpen ? "1" : "0",
          }}
        >
          <ul className="overlay-links">
            <li className="overlay-link">
              <Link
                reloadDocument
                to="/"
                onClick={() => {
                  setNavOpen(!navOpen);
                }}
              >
                <h1>home</h1>
              </Link>
            </li>
            <li className="overlay-link">
              <Link
                to="/facias"
                onClick={() => {
                  setNavOpen(!navOpen);
                }}
              >
                <h1>facias</h1>
              </Link>
            </li>
            <li className="overlay-link">
              <Link
                to="/re-roof"
                onClick={() => {
                  setNavOpen(!navOpen);
                }}
              >
                <h1>re-roof</h1>
              </Link>
            </li>
            <li className="overlay-link">
              <Link
                to="/conversions"
                onClick={() => {
                  setNavOpen(!navOpen);
                }}
              >
                <h1>conversions</h1>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ServiceNav;
