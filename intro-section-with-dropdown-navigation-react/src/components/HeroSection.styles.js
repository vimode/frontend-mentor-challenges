//packages
import styled from "styled-components";

import { FlexWrapper, TextContent, LinkStyle } from "../Utility.style";

export const HeroWrapper = styled(FlexWrapper)`
  gap: 1em;
  place-items:center;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;;
  flex-direction: column;

  @media(min-width: 900px){
    flex-direction: row;
  }
`

export const ContentWrapper = styled(FlexWrapper)`
  flex-direction: column;
  width: 100%;
  order: 1;

  @media(min-width: 900px ) {
    order: unset;
    padding-right: 20px;
    place-content:end;
  }
`
export const TextWrapper = styled(FlexWrapper)`
  flex-direction: column;
  gap: 25px;
  height: 80%;
  justify-content:center;
  place-items: center;

  @media( min-width: 900px) {
    place-items:left;
    place-items: start;
    gap: 50px;
  }
`

export const ImageWrapper = styled(FlexWrapper)`
  place-items:center;
  place-content:space-evenly;
  gap: 1em;
  margin-top: 2em;
  
  img {
    width: 15vw;
    cursor: pointer;
    height: auto;
  }

  @media( min-width: 900px) {
    place-content: space-between;
    
    img {
      width: 20%;
    }
  }

`

export const IllustrationWrapper = styled.section`
  width: 100%;
  height: 400px;  
  background: no-repeat center/contain url('./images/image-hero-mobile.png');

  @media (min-width: 900px) {
    background: no-repeat center/contain url('./images/image-hero-desktop.png');
    width: 100%;
    height: 100%;
  }
`

export const HeroTitle = styled.h1`
  font-size: 2rem;
  display: inline-block;

  @media(min-width: 900px) {
    font-size: 5rem;

    span {
      display:block;
    }
  }
`
export const HeroText = styled(TextContent)`
  max-width: 36ch;
  font-size: 1rem;
  text-align: center;

  @media(min-width: 900px) {
    font-size: 1.1rem;
    max-width: 45ch;
    text-align: left;
  }

`

export const HeroLink = styled(LinkStyle)`
  color: var(--clr-off-white);
  background: var(--clr-alt-black);
  border: 1px solid var(--clr-black);
  width: max-content;
  padding: 18px 25px;
  border-radius: 15px;
  font-size: 1.1rem;
  font-weight: var(--fw-bold);
  text-align:center;
  transition: all 200ms linear;

  &:hover {
    background: var(--clr-transprent);
    color: var(--clr-alt-black);
  }
`