import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import { Link } from "react-scroll";

import '../styles/NavBar.scss';
import { useEffect } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
      if (document.body.scrollTop > 640 || document.documentElement.scrollTop > 640) {
        document.getElementById("header").style.backgroundColor = "RGBA(0,0,0,0.43)";
        document.getElementById("header").style.transition = ".5s";
      } else {
        document.getElementById("header").style.backgroundColor = "transparent";
      }
    }
  })

  return (
    <div className="NavBar" id="header">
      <Navbar light expand="md">
        <NavbarToggler onClick={toggle} className="mr-2" />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <Link
                className="section-link"
                activeClass="active"
                to="about-section"
                spy={true}
                smooth={true}
                offset={70}
                duration={500}
              >
                A PROPOS
              </Link>
              <br />
            </NavItem>
            <NavItem>
              <Link
                className="section-link"
                activeClass="active"
                to="competences-section"
                spy={true}
                smooth={true}
                offset={70}
                duration={500}
              >
                COMPETENCES
              </Link>
            </NavItem>
            <NavItem>
              <Link
                className="section-link"
                activeClass="active"
                to="portfolio-section"
                spy={true}
                smooth={true}
                offset={70}
                duration={500}
              >
                PORTFOLIO
              </Link>
            </NavItem>
            <NavItem>
              <Link
                className="section-link"
                activeClass="active"
                to="contact-section"
                spy={true}
                smooth={true}
                offset={70}
                duration={500}
              >
                CONTACT
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}


export default NavBar;