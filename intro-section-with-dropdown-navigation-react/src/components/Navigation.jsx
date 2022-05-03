
// data
import { navItems } from "../data/navItems";

// components
import NavItem from "./NavItem";

//styles
import { Nav, NavList, NavItems, NavStyledLink, SignUpLink } from "./Navigation.styles";

function Navigation () {
  
  return (
    <Nav>
      <NavList>
    {navItems.map((navLink,index)=> {
      return (
        <NavItem 
          navLink={navLink}
          key={index}
        />
      )
    })}
      </NavList>

      <NavList>
        <NavItems>
          <NavStyledLink href="#">Login</NavStyledLink>
        </NavItems>
        <NavItems>
          <SignUpLink href="#">Register</SignUpLink>
        </NavItems>
      </NavList>

      
    </Nav>
  )
}

export default Navigation;