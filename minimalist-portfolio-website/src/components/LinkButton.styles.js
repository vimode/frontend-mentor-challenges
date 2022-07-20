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
  transition: all 250ms linear;

  svg {
    margin-right: var(--space-8);
    background: var(--color-primary-dark-blue-800);
  }

  &:hover,
  &:focus {
    background: var(--color-primary-cyan-600);
    color: var(--color-neutral-white);
  }

  &:hover svg g{
    stroke: var(--color-neutral-white);
  }
`
export const PrimaryStyledLink = styled(StyledLink)`
  color: var(--color-primary-grey-300);
  border: 1px solid var(--color-button-secondary-border);
  background: transparent;
  transition: all 250ms linear;

  &:hover,
  &:focus {
    background: var(--color-primary-grey-blue-800);
    color: var(--color-neutral-white);
  }
`

export const ExternalStyledLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-size: var(--text-xs);
  letter-spacing: 1px;
  width: max-content;
  display: block;
  padding: var(--space-4);
  color: var(--color-primary-grey-300);
  border: 1px solid var(--color-button-secondary-border);
  background: transparent;
  transition: all 250ms linear;

  &:hover,
  &:focus {
    background: var(--color-primary-grey-blue-800);
    color: var(--color-neutral-white);
  }
`