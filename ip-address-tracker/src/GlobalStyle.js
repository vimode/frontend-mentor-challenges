import { createGlobalStyle } from  'styled-components';

export default createGlobalStyle `

  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
  }

  :root {
    --ff-primary: 'Rubik', sans-serif;

    --fw-reg: 400;
    --fw-med: 500;
    --fw-bold: 700;

    --fs-body: 18px;

    --color-primary-gray: hsl(0, 0%, 17%);
    --color-secondary-gray: hsl(0, 0%, 59%);
    --color-white: hsl(0, 0%, 100%);
  }

  body {
    font-family: var(--ff-primary);
    color: var(--color-primary-gray);
    font-weight: var(--fw-reg);
  }

  img {
    display: block;
    width: 100%;
  }

  button, input {
    font:inherit;
  }

  a, button{
    cursor: pointer;
  }

`