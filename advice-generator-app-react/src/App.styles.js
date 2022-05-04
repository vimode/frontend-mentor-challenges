import styled, { keyframes } from "styled-components";

export const QuoteWrapper = styled.section`
  display:flex;
  flex-direction: column;
  place-items:center;
  gap: 1em;
  padding: 40px;
  width: 80%;
  max-width: max-content;
  height: max-content;
  border-radius: 20px;
  text-align:center;
  justify-content: space-between;
  background: var(--clr-neutral-dark-blue);
  position:relative;
`

export const QuoteTitle = styled.p`
  font-size: 1rem;
  color: var(--clr-primary-green);
  letter-spacing: 3.5px;
  text-transform: uppercase;
`

export const QuoteText = styled.p`
  max-width: 25ch;
  width: 100%;
  opacity: 1;
  transition: width 500ms linear; 
`

export const Button = styled.button`
  font: inherit;
  border-radius: 50%;
  aspect-ratio:1;
  width: 2.5em;
  text-align:center;
  display:flex;
  place-items:center;
  place-content:center;
  position: absolute;
  bottom: 0;
  transform: translateY(50%);
  background-color: var(--clr-primary-green);
  border: 1px solid var(--clr-primary-green);
  cursor: pointer;

  img {
    width: 40%;
  }
`

export const QuoteImage = styled.img`
  margin-bottom: 1.5em;
`

const ring = keyframes`
   0% {
     transform: rotate(0deg);
   }
   100% {
     transform: rotate(360deg);
   }
`

export const CircleLoader = styled.div`
  display: block;
  width: 100px;
  height: 100px;

  &:after {
    content: "";
    display:block;
    width: 50px;
    height: 50px;
    margin: 0 auto;
    border-radius: 50%;
    border: 6px solid var(--clr-primary-green);
    border-color: var(--clr-primary-green) transparent var(--clr-primary-green) transparent;
    animation: ${ring} 1s linear infinite;
  }

`


