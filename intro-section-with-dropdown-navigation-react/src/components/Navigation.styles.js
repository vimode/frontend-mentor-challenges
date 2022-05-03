//packages

import styled from "styled-components";
import { FlexWrapper, LinkStyle } from "../Utility.style";

export const Nav = styled(FlexWrapper)`
  display:none;  
  width: 90%;
  justify-content: space-between;

  @media(min-width: 900px) {
    display:flex;
  }
`

export const NavList = styled.ul`
  display:flex;
  gap: 3em;
`

export const NavItems = styled.li`
  font-size: 1rem;
  
`

export const NavStyledLink = styled(LinkStyle)`
  transition: color 150ms linear;

  &:hover {
    color: var(--clr-alt-black);
  }

`

export const SignUpLink = styled(NavStyledLink)`
  border: 1px solid var(--clr-gray);
  padding: 10px 25px;
  border-radius: 15px;
`

export const ButtonWrapper = styled.div`
  
`

export const DropdownButton = styled.button`
  background: none;
  border: none;
  color: var(--clr-gray);

  &:hover {
    color: var(--clr-alt-black);
  }
`

export const DropdownList = styled(NavList)`
  flex-direction: column;
  gap: unset;
`

export const DropdownLinkItems = styled(NavItems)`
  padding: 10px 0;
`