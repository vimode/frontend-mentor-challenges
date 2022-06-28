import styled from "styled-components"
import { Link } from "react-router-dom"

export const SummaryWrapper = styled.section `
 display:flex; 
 place-items:center;
`

export const ContentWrapper = styled.div `
 
  & h2 {
    font-family:  var(--font-secondary);
    font-size: var(--text-3xl);
  }

  & p {
    margin-block: var(--space-4);
    max-width: 50ch;
    line-height: 2;
  }
`