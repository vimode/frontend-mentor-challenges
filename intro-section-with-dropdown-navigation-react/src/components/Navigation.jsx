import {useState, useEffect} from "react";

// data
import { navItems } from "../data/navItems";

// components
import NavItem from "./NavItem";

//styles
import { Nav, NavListWrapper, NavList, AccountNavList, NavItems, NavStyledLink, SignUpLink, MobileButtonWrapper } from "./Navigation.styles";

function Navigation () {

  const [mobileNav, setMobileNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [fullnav, setFullNav] = useState(true);

  // sets mobilenav to false -- if mobile nav is open and window size changes to then tablet breakpoint, it will close it off.
  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    windowWidth >= 768 ? setMobileNav(false) : ""
  }, [windowWidth]);

    // handles mobilenav open/close buttons
  const mobileNavClick = () => {
    setMobileNav(!mobileNav);
  }

  
  return (
    <Nav>
       <MobileButtonWrapper 
        onClick = {mobileNavClick}
        >
        {!mobileNav && <svg width="32" height="18" xmlns="http://www.w3.org/2000/svg"><g fill="#151515" fillRule="evenodd"><path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z"/></g></svg>}
        {mobileNav && <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg"><g fill="#151515" fillRule="evenodd"><path d="m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z"/><path d="M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z"/></g></svg>}
      </MobileButtonWrapper>
      
        <NavListWrapper className={mobileNav ? "mobile_active" : ""}>
          <NavList>
            {navItems.map((navLink,index)=> {
              return (
                <NavItem 
                  navLink={navLink}
                  key={index}
                  onClick={() => setMobileNav(false)}
                />
              )
            })}
          </NavList>

          <AccountNavList>
            <NavItems>
              <NavStyledLink href="#">Login</NavStyledLink>
            </NavItems>
            <NavItems>
              <SignUpLink href="#">Register</SignUpLink>
            </NavItems>
          </AccountNavList>
        </NavListWrapper>
      

      
    </Nav>
  )
}

export default Navigation;