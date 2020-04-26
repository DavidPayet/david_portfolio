import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from "react-scroll";

import './NavBar.scss';

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="NavBar">
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          <img className="dp-logo" src="/medias/dp-logo.png" alt="dp-logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
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
                A propos
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
                Compétences
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
                Portfolio
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
                Contact
              </Link>
            </NavItem>
            <NavItem>
              <NavLink className="section-link" href="/cv">Mon CV</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;