import styled from "styled-components";


export const OuterWrapper = styled.section `
  display: flex;
  flex-direction: column;
  place-content: center;
`
export const HeaderWrapper = styled.header`
`
export const MainWrapper= styled.main`
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
  place-items:center;
  max-width: 1200px;
  margin: 0 auto;
`
export const FooterWrapper = styled.footer`
    background: var(--color-primary-grey-blue-800);
`