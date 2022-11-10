import React from "react";
import { Nav, NavLink, NavMenu } from "./NavBarElement";

const Navbar = () => {
  return (
    <>
      <Nav>
      
        <NavMenu>
        <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/notes" activeStyle>
            Notes
          </NavLink>
          <NavLink to='/market' activeStyle>
            Market
          </NavLink>
     
        </NavMenu>
        
      </Nav>
      
    </>
    
  );
};
  
export default Navbar;