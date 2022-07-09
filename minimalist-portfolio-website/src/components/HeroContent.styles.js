import styled from "styled-components";

export const HeroWrapper = styled.section`
  display: grid;
  grid-template-areas: 
    "image-area-one image-area-one image-area-one  "
    "content-area content-area -"
    "content-area content-area -"
    "image-area-two image-area-two image-area-two";
    max-width: 1920px;

    & img {
      grid-row: image-area-one / image-area-two;
      grid-column: 1/4;
  }
`

 export const HeroContentWrapper = styled.div `
    grid-area: content-area;
    background: var(--color-neutral-white);
    grid-row: 2 / 5;

    & h1 {
      font-family: var(--font-secondary);
      font-size: var(--text-3xl);
      max-width: 16ch;
      padding: var(--space-12) var(--space-12) var(--space-12) 0; 
      line-height: 1;
    }

`