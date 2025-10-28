import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">PasseioVirtual</NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            Sobre
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contato
          </NavLink>
          <NavLink to="/undefined" activeStyle>
            Undefined
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default NavBar;
