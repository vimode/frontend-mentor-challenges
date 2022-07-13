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

export const SideIntro = styled.aside`
  grid-area: aside;
  border-top: 2px solid var(--color-secondary-grey-300);
  border-bottom: 2px solid var(--color-secondary-grey-300);
  height: max-content;
  padding-block: var(--space-10);

  & h1 {
    font-size: var(--text-2xl);
  }

  & p {
    font-size: var(--text-sm);
    opacity: var(--opacity-75);
    line-height: 2;
    max-width: 40ch;
    padding-block: var(--space-3);
  }

  & p:nth-of-type(3) {
    margin-bottom: var(--space-3);
  }

  & span {
    font-weight: var(--font-weight-bold);
    color: var(--color-primary-cyan-600);
    opacity: var(--opacity-100);
  }
`

export const ProjectInfo = styled.section `
  grid-area: content;
  display: flex;
  flex-direction: column;
  gap: var(--space-6);

  &  h2 {
    font-size: var(--text-xl);
    font-weight: var(--font-weight-regular);
  }

  & p {
    font-size:var(--text-sm); 
    line-height: 2;
    opacity: var(--opacity-75);
  }
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
    border-top: 2px solid var(--color-secondary-grey-300);
    border-bottom: 2px solid var(--color-secondary-grey-300);
    width: 100%;
    padding-block: var(--space-4);
  }

  & li:nth-of-type(2) {
    justify-content: end;
    border-left: 2px solid var(--color-secondary-grey-300);
  }

  & p {
    width: max-content;
    font-size: var(--text-md);
    opacity: var(--opacity-50);
  }

  & h2 {
    font-size: var(--text-xl);
    font-weight: var(--font-weight-normal);
  }


`