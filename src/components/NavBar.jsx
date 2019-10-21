import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link } from "react-scroll";

import './NavBar.scss';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { isOpen } = this.state
    return (
      <div className="NavBar">
        <Navbar className="menu" expand="md">
          <NavbarBrand className="home" href="/">
            <img className="dp-logo" src="/medias/dp-logo.png" alt="dp-logo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <Link
                className="section-link"
                activeClass="active"
                to="about-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                A propos
              </Link>
              <Link
                className="section-link"
                activeClass="active"
                to="competences-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Compétences
              </Link>
              <Link
                className="section-link"
                activeClass="active"
                to="portfolio-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Portfolio
              </Link>
              <Link
                className="section-link"
                activeClass="active"
                to="contact-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
              <NavItem>
                <NavLink href="/cv">Curriculum vitae</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }


}