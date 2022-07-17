import { StyledNav, StyledNavLink, List, ListItem } from "./Navbar.styles.js"

function Navbar () {
  return (
    <StyledNav>
      <List>
        <ListItem>
          <StyledNavLink to="/">Home</StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/portfolio">Portfolio</StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/contact">Contact</StyledNavLink>
        </ListItem>
      </List>
    </StyledNav>

  )
}

export default  Navbar;