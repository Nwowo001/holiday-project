import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.webp";
import ButtonComponent from "../ButtonComponent/Button";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleScroll = () => {
    setScrolling(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`nav-bar ${scrolling ? "scrolled" : ""}`}>
      <div className="logo">
        <a href="#Home" onClick={(e) => handleLinkClick(e, "#Home")}>
          <img
            src={logo}
            alt="Ajayi Crowther University Department of Architecture"
          />
          <p>
            Ajayi Crowther University <br />
            Department Of Architecture
          </p>
        </a>
      </div>
      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <a href="#Home" onClick={(e) => handleLinkClick(e, "#Home")}>
          Home
        </a>
        <a href="#About" onClick={(e) => handleLinkClick(e, "#About")}>
          About
        </a>
        <a href="#Services" onClick={(e) => handleLinkClick(e, "#Services")}>
          Services
        </a>
        <a href="#Blog" onClick={(e) => handleLinkClick(e, "#Blog")}>
          Blog
        </a>
        <div className="button-container">
          <ButtonComponent
            backgroundColor="var(--primary-color)"
            fontSize="16px"
            borderRadius="8px"
            color="white"
            border="none"
            margin="0 0 0 25px"
            padding="14px 28.8px"
            cursor="pointer"
            fontFamily="Arial"
            className="sign-in"
          >
            Explore More
          </ButtonComponent>
        </div>
      </div>

      <div
        className="hamburger-menu"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
        role="button"
        tabIndex={0}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
};

export default Navbar;
