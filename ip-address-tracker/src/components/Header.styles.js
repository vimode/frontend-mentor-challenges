import styled from "styled-components";

import {FlexWrapper} from "./../Utility.style";

export const HeaderWrapper = styled(FlexWrapper)`
  background:no-repeat center/cover url("./images/pattern-bg.png");
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

export const Title = styled.h1 `
  padding-block: 10px;
  margin-top: 20px;
  font-size: 2rem;
  color: var(--color-white);
  font-weight: var(--fw-med);
  `

export const Form = styled.form`
  display:flex;
  place-content:center;
  width: 80%;
`

export const Input = styled.input`
  padding: 15px;
  width: 80%;
  max-width: 350px;
  border-radius: 10px 0px 0px 10px;
  border:  transparent;
  font-weight: var(--fw-med);
  font-size: 1.2rem;

  &:focus,
  &:active {
    outline: 2px solid var(--color-secondary-gray);
  }

  &::placeholder {
    font-weight: var(--fw-reg);
    font-size: 1rem;
  }

`

export const Button = styled.button `
  background-color: var(--color-primary-gray);
  padding-inline: 25px;
  border: transparent;
  outline: none;
  border-radius: 0px 10px 10px 0;
  opacity: 1;
  transition: opacity 150ms linear;

  &:hover,
  &:focus {
    opacity: 0.75;
  }

  
`