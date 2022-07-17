import styled from "styled-components"

export const FooterWrapper = styled.div `
  display: flex;
  color: var(--color-neutral-white);
  place-items:center;
  justify-content: space-between;
  padding-block: var(--space-5);
  max-width:1200px;
  width: 95%;
  margin: 0 auto; 

  & div {    
    display:flex;
    place-items:center;
    gap: var(--space-10);
  }

  & svg path {
    fill : var(--color-neutral-white);
  }

  @media(max-width: 600px){
    flex-direction: column;
    text-align: center;
    gap: var(--space-4);

    & div,
    & nav ul{
    flex-direction: column;
    }
  }
`