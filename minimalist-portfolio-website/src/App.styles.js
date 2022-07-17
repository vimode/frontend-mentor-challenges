import styled from "styled-components";


export const OuterWrapper = styled.section `
  display: flex;
  flex-direction: column;
  place-content: center;
`
export const MainWrapper= styled.main`
  display: flex;
  flex-direction: column;
  gap: var(--space-40);
  place-items:center;
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;

  @media(max-width: 700px) {
    gap: var(--space-28);
  }
`
export const FooterWrapper = styled.footer`
    background: var(--color-primary-grey-blue-800);
`