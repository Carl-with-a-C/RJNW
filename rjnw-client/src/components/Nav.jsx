import facebook from "../icons/FB-blue.svg";
import twitter from "../icons/TW-blue.svg";
import insta from "../icons/INS-blue.svg";

import { useState } from "react";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

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
              <a
                href="#"
                onClick={() => {
                  setNavOpen(!navOpen);
                }}
              >
                <h1>home</h1>
              </a>
            </li>
            <li className="overlay-link">
              <a
                href="#about"
                onClick={() => {
                  setNavOpen(!navOpen);
                }}
              >
                <h1>about</h1>
              </a>
            </li>
            <li className="overlay-link">
              <a
                href="#projects"
                onClick={() => {
                  setNavOpen(!navOpen);
                }}
              >
                <h1>projects</h1>
              </a>
            </li>
            <li className="overlay-link">
              <a
                href="#services"
                onClick={() => {
                  setNavOpen(!navOpen);
                }}
              >
                <h1>services</h1>
              </a>
            </li>
            <li className="overlay-link">
              <a
                href="#contact"
                onClick={() => {
                  setNavOpen(!navOpen);
                }}
              >
                <h1>contact</h1>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
