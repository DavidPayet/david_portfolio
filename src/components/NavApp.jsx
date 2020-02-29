import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import './NavBar.scss';

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
              <NavLink className="section-link" href="/todolist">To Do List</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="section-link" href="/tictactoe">Tic Tac Toe</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="section-link" href="/calculator">Calculator</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="section-link" href="/timers">Timers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="section-link" href="/snake">Snake</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="section-link" href="/gif-generator">Gif Generator</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="section-link" href="/chessplayers">Chess Players</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="section-link" href="/datepicker">Date Picker</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavApp;