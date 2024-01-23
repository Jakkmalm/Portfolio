import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Navbar.scss";
import Socials from "./Socials";
import logo from "../img/JM-logos_transparent.png";

function Navbar() {
  // react-router-dom - useLocation hook.
  // använder till Link-elementen för att sätta särkild css-stil
  const location = useLocation();
  console.log(location)

  // states
  // state för att hantera mobile-nav meny
  const [mobileNav, setMobileNav] = useState(false);
  // state för att hantera noscroll
  const [noscroll, setNoscroll] = useState(false);

  console.log(mobileNav);

  // useEffect-hook - kollar tillstånd/state noscroll och ändrar css-stil
  useEffect(() => {
    // Om noscroll - sant

    // ändrar värde body overflowY beroende på noscroll sant/falskt
    document.body.style.overflowY = noscroll ? "hidden" : "auto";
    
    // Hämtar paralax-container för att kunna ändra dess overflowY.
    const parallaxContainer = document.querySelector(".parallax-container");

    // if-sats då detta element inte finns på samtliga sidor, så får jag felkoder.
    // if-state för att kolla att paralaxcontainer "finns" -  sedan köra koden.
    if(parallaxContainer) {
      // beroende på noscroll true/false - ändra hidden/auto
      parallaxContainer.style.overflowY = noscroll ? "hidden" : "auto";
    }

    // gömma parallax-element /tillfällig bug-fix
    const hideParaElements = document.querySelectorAll('.hero-text-para, .scroll-div-top');
    if (hideParaElements) {
      hideParaElements.forEach (element => {
        element.style.display = mobileNav ? "none" : "";
      })
    }
    
    // document.querySelector(".scroll-div-top").style.display = noscroll ? "none" : "inherit";
    // return/äterställer värde till auto.
    return () => {
      document.body.style.overflowY = "auto";
    };
    // körs varje gång statet noscroll ändras.
  }, [noscroll]);

  // toggleNav funktion
  const toggleNav = () => {
    // sätter värden till state-funktionerna
    setMobileNav(!mobileNav);
    setNoscroll(!noscroll);
  };

  return (
    <nav>
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={logo} alt="JM-logo" />
        </Link>
      </div>
      <div className="menu-icon">
        <FontAwesomeIcon icon="fa-bars" onClick={toggleNav} />
      </div>
      <div className={`link-container ${mobileNav ? "mobile" : ""}`}>
        <div className="menu-xmark">
          <FontAwesomeIcon icon="fa-xmark" onClick={toggleNav} />
        </div>
        <div className="links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
        </div>
        {mobileNav && <Socials />}
      </div>
    </nav>
  );
}

export default Navbar;
