import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: var(--text-sm);
  letter-spacing: 1px;
  width: max-content;

  img {
    width: 5%;
  }
`

export const PrimaryStyledLink = styled(StyledLink)`
  color: var(--color-primary-grey-300);
  border: 1px solid var(--color-button-secondary-border);
  padding: var(--space-4);
`
