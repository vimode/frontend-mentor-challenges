import styled from "styled-components";

export const SnippetWrapper = styled.section`
  display: flex;
  width: 100%;
  place-content: space-between;
  place-items: center;
  column-gap: var(--space-4);
  padding: var(--space-16)  0 var(--space-24) 0;

  & h1 {
    font-size: var(--text-2xl);
    max-width: 14ch;
  }

  & hr {
    color: var(--color-primary-grey-blue-800);
    width: 50%;
    opacity: var(--opacity-25);
  }
  
  @media (max-width: 1100px) {
    & hr {
      width: 30%;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
    text-align: center;
    row-gap: var(--space-10);

    & hr {
      display: none; 
    }
  }

  `