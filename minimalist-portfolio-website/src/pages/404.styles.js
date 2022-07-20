import styled from "styled-components";

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  place-items: center;
  place-content: center;
  gap: var(--space-4);
  height: 76vh;

  & h1 {
    font-size: var(--text-3xl);
  }
`