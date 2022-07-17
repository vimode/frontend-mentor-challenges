import styled from "styled-components"

export const SummaryWrapper = styled.section `
  display:flex; 
  place-items:center;
  place-content:center;
  column-gap: var(--space-20);
  max-height:500px;
  width: 100%;
  max-width: 1200px;
  justify-content: ${props => props.homepage ? "space-between": "center"};

  & picture.right {
    order: 10;
  }

  & img.summary {
    width: auto;
    object-fit: contain;
    height: ${props => props.homepage ? "600px": "500px"};
    overflow: hidden;
  }

  @media(max-width : 1000px ) {  

    & img.summary {
      width: ${props => props.homepage ? "350px" : "330px"};
      object-fit: ${props => props.homepage ? "cover": "contain"};
      object-position :${props => props.homepage ? "right" : "center"}
    }
  }

  @media(max-width:700px ) {
    flex-direction: column;
    max-height: max-content;

    & img.summary {
      width: 80%;
      text-align: center;
      height: auto;
      object-fit: contain;
      object-position: center;
      margin: 0 auto;
    }

    & picture.right {
      order: unset; 
    }
  }

`

export const ContentWrapper = styled.div `
  display: flex;
  flex-direction: column;
  border-top: 2px solid var(--color-secondary-grey-300);
  border-bottom: 2px solid var(--color-secondary-grey-300);
  padding-block: var(--space-16);
  height: ${props => props.homepage ? "max-content" : "500px"};
  place-content: center; 
  width: max-content;

  & h2 {
    font-size: var(--text-2xl);
  }

  & p {
    margin-block: var(--space-4);
    width: 100%;
    max-width: 35ch;
    line-height: 2;
    font-size: var(--text-md);
    opacity: var(--opacity-75);
    margin-right: ${props => props.homepage ? "var(--space-6)"  :  ""};
  }

  @media(max-width: 700px) {
    border-top: none;
  }

`
export const ImageWrapper = styled.div `
`