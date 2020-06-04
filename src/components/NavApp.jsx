import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import '../styles/NavBar.scss';

const NavApp = (props) => {
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
              <NavLink className="section-link" href="/" >Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="section-link"
                href="https://2py1f.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                2PY1F
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="section-link" href="/chessplayers">Chess Players</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="section-link"
                href="https://cvd-live-stats.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                CVD Live Stats
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavApp;