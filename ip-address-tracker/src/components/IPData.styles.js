import styled from "styled-components";

import { FlexWrapper } from "./../Utility.style";

export const DataWrapper = styled.section`
    position: absolute;
    z-index: 500;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  `
  
  export const DataList = styled.ul`
  display:flex;
  align-items:start;
  width: 100%;
  background: var(--color-white);
  border-radius: 10px;
  padding-block: 50px;
`

export const ListItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding-inline: 50px;
  position: relative;
  height: max-content;
  gap: 10px;
  

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
`

export const Title = styled.h2`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-secondary-gray);
`

export const Content = styled.p`
  font-size: 1.5rem;
  font-weight: var(--fw-med);
  width:max-content;
  max-width: 10ch;
`