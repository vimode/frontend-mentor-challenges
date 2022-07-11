import styled from "styled-components";

export const ImageWrapper = styled.div`

  & img{

  }
`

export const ContentWrapper = styled.main`
  display:grid;
  grid-template-areas: 
  "aside content"
  "pagination pagination";
  gap: var(--space-8);
`

export const SideIntro = styled.aside `
  grid-area: aside;
  border-top: 2px solid var(--color-secondary-grey-300);
  border-bottom: 2px solid var(--color-secondary-grey-300);
  height: max-content;
  padding-block: var(--space-10);

  & h1 {
    font-family: var(--font-secondary);
    font-size: var(--text-2xl);
  }

  & p {
    font-size: var(--text-sm);
    opacity: var(--opacity-75);
    line-height: 2;
    max-width: 40ch;
    padding-block: var(--space-6);
  }

  & span {
    font-weight: var(--font-weight-bold);
    color: var(--color-primary-cyan-600);
    opacity: var(--opacity-100);
  }
`

export const ProjectInfo = styled.section `
  grid-area: content;
`

export const Pagination = styled.nav`
  grid-area: pagination;
  place-content:center;
  
  & ul {
    display:flex;
    width:100%;
    justify-content: space-between;
    place-items:center;
  }

  & li {
    display: flex;
    place-items: center;
    gap: var(--space-6);
  }

  & p {
    width: max-content;
  }


`