import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: var(--text-xs);
  letter-spacing: 1px;
  width: max-content;
  display: block;
  padding: var(--space-4);
  background: var(--color-primary-dark-blue-700);
  color: var(--color-neutral-white);

  svg {
    margin-right: var(--space-12);
    background: var(--color-primary-dark-blue-800);
  }
`
export const PrimaryStyledLink = styled(StyledLink)`
  color: var(--color-primary-grey-300);
  border: 1px solid var(--color-button-secondary-border);
  background: transparent;
`
