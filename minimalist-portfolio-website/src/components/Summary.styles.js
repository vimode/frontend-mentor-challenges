import styled from "styled-components"
import { Link } from "react-router-dom"

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

`

export const ContentWrapper = styled.div `
  display: flex;
  flex-direction: column;
  border-top: 2px solid var(--color-secondary-grey-300);
  border-bottom: 2px solid var(--color-secondary-grey-300);
  padding-block: var(--space-16);
  height: 500px;
  place-content: center; 
  width: 50%;

  & h2 {
    font-family:  var(--font-secondary);
    font-size: var(--text-3xl);
  }

  & p {
    margin-block: var(--space-4);
    max-width: 36ch;
    line-height: 2;
  }
`
export const ImageWrapper = styled.div `
`