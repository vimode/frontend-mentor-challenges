import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`

`

export const StyledNavLink = styled(NavLink)`
 text-decoration: none; 
 text-transform: uppercase;
 font-size: var(--text-xs);
 color: var(--color-primary-grey-blue);
 letter-spacing: 2px;
 transition: all 300ms linear;

 &:hover,
 &:focus {
  color: var(--color-primary-cyan-600);
 }

 &.active {
  color: var(--color-primary-cyan-600);
 }

`

export const List = styled.ul`
  display: flex;
  gap: var(--space-8);
`

export const ListItem = styled.li`

`