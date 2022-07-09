import styled from "styled-components"

export const IconList = styled.ul`
  list-style: none;
  display: ${props => props.footerIcons ? "flex" : ""};
  gap: ${props => props.footerIcons ? "var(--space-8)": ""};
  place-items: ${props => props.footerIcons ?  "center": ""};

`