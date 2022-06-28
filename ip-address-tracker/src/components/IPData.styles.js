import styled from "styled-components";

export const DataWrapper = styled.section`
    position: absolute;
    z-index: 500;
    top: 350px;
    left: 50%;
    transform: translate(-50%, -50%);

    @media(min-width:  768px ) { 
      top: 300px;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `
  
  export const DataList = styled.ul`
    display:flex;
    flex-direction: column;
    width: 80vw;
    background: var(--color-white);
    border-radius: 10px;
    padding-block: 30px;
    align-items: center;
    gap: 20px;
    
  @media(min-width: 768px) {
    flex-direction:row;
    width:100%;
    align-items:start;
    gap: unset;
  }
`

export const ListItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  position: relative;
  height: max-content;
  gap: 10px;
  place-items:center;


  @media (min-width:  768px) {
    place-items: start;
    padding-inline: 30px;

    &:after {
      content : "";
      height: 70px;
      width: 1px;
      background: var(--color-secondary-gray);
      position: absolute;
      right: 0;
      top:0;
    }

    &:last-child:after {
      display:none;
    }
  }
  
`

export const Title = styled.h2`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-secondary-gray);
  width:max-content;
`

export const Content = styled.p`
  font-size: 1.5rem;
  font-weight: var(--fw-med);
  width: max-content;
  text-align:center;
  max-width: ${props => props.ispinfo ? "13ch" : "max-content"};

  @media (min-width: 768px) {
    text-align: left;
  }

`