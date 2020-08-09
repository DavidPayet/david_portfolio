import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import { Link } from "react-scroll";
import { RiMenuLine } from 'react-icons/ri';

import '../styles/NavBar.scss';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    let header = document.querySelector("#header");
    let lastScrollValue = 0;

    document.addEventListener('scroll', () => {
      let top = document.documentElement.scrollTop;
      if (lastScrollValue < top) {
        header.classList.add("hidden");
      } else {
        header.classList.remove("hidden");
      }
      lastScrollValue = top;
    });
  })

  return (
    <div className="NavBar" >
      <Navbar light expand="md" id="header">
        <NavbarToggler onClick={toggle} className="toggleBtn">
          <RiMenuLine />
        </NavbarToggler>
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