import styled from "styled-components";

export const SnippetWrapper = styled.section`
  display: flex;
  width: 100%;
  place-content: space-between;
  place-items: center;

  & h1 {
    font-family: var(--font-secondary);
    font-size: var(--text-2xl);
    max-width: 14ch;
  }

  & hr {
    color: var(--color-primary-grey-blue-800);
    width: 50%;
    opacity: var(--opacity-25);
  } 

  `