import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "../css/header.css";

const CTA = () => {
  return (
    <div className="cta">
      <a href="https://github.com/Fal-hi" className="btn">
        View Github
      </a>
      <a href="#contact" className="btn">
        Let's Talk
      </a>
    </div>
  );
};

const MediaSocials = () => {
  return (
    <div className="media-socials">
      <a href="/#" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="/#" target="_blank" rel="noreferrer">
        <FaLinkedin />
      </a>
      <a href="/#" target="_blank" rel="noreferrer">
        <FaInstagram />
      </a>
    </div>
  );
};

const Header = () => {
  return (
    <header id="home">
      <div className="container home">
        <h5 className="hello">Hello, I'm</h5>
        <h1>Syaifal Illahi</h1>
        <h5 className="job">
          <span>Front-End</span> Web Developer
        </h5>
        <CTA />
        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
        <MediaSocials />
      </div>
    </header>
  );
};

export default Header;
