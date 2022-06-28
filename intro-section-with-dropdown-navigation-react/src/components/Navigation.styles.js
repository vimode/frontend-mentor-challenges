//packages

import styled from "styled-components";
import { FlexWrapper, LinkStyle } from "../Utility.style";

export const Nav = styled(FlexWrapper)`
  width: 90%;
  justify-content: end;
  position:relative;

  @media(min-width: 768px) {
    display:flex;
  }
`

export const MobileButtonWrapper = styled.div`
  padding: 10px 20px;
  display:block;
  z-index: 100;

  @media(min-width: 768px) {
    display: none;
  }
  
`

export const NavListWrapper = styled.div`
  background: white;
  position: absolute;
  flex-direction: column;
  display:flex;
  width: 70vw;
  height: 100vh;
  top: 0;
  display:none;

  @media( min-width: 900px) {
    gap: 3em;
    display:flex;
    position: unset;
    background-color: transparent;
    flex-direction: row;
    width: unsuet;
    height: unset;
    justify-content: space-between;

    &.mobile_active {
      display:flex;
    }
  }
  
  &.mobile_active {
    display:flex;
  }
  

`

export const NavList = styled.ul`
  padding-top: 5em;
  padding-inline: 2em;
  display: flex;
  flex-direction: column;
  gap: 2.5em;

  @media(min-width: 900px) {
    flex-direction: row;
    padding: unset;
    gap: 2em;
  }
  
`

export const AccountNavList = styled(NavList)`
  place-items:center;

  @media(min-width: 900px) {
    place-items:unset;
  }

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
  position: relative;
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
  padding: 2em;
  gap: 25px;

  @media(min-width: 768px) {
    flex-direction: column;
    gap: 10px;
    position: absolute;
    background: var(--clr-white);
    box-shadow: hsla(250, 60%, 10%, 0.25) 0px 50px 100px 0px;
    padding: 20px 30px;
    border-radius: 10px;
    right: 0;
    top: 200%;
    width: max-content;
  }
`

export const DropdownLinkItems = styled(NavItems)`
  padding: 5px 10px;
  display:flex;
  place-items: center;
  gap: 0.5em;
  
  &&& img {
    display:block;
    padding: unset;
    width: 15px;
  }
  
  a {
    font-size: 1rem;
    color: var(--clr-gray);
  }

  a:hover {
    color: var(--clr-black);
  }

  @media(min-width: 768px) {
      a {
      font-size: 0.8rem;
      }
    }

  
`