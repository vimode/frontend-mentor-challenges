import styled from "styled-components"

export const SummaryWrapper = styled.section `
  display:flex; 
  place-items:center;
  place-content:center;
  column-gap: var(--space-20);
  max-height:500px;
  max-width: 1200px;

  & picture.right {
    order: 10;
  }

  & img.summary {
    width: auto;
    object-fit: contain;
    height: 500px;
    overflow: hidden;
  }

`

export const ContentWrapper = styled.div `
  display: flex;
  flex-direction: column;
  border-top: 2px solid var(--color-secondary-grey-300);
  border-bottom: 2px solid var(--color-secondary-grey-300);
  padding-block: var(--space-16);
  height: 500px;
  place-content: center; 
  width: max-content;

  & h2 {
    font-family:  var(--font-secondary);
    font-size: var(--text-2xl);
  }

  & p {
    margin-block: var(--space-4);
    max-width: 36ch;
    line-height: 2;
    font-size: var(--text-md);
  }
`
export const ImageWrapper = styled.div `
`