import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  padding:0;
  margin:0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

:root {
  --ff-primary: 'Epilogue', sans-serif;

  --fw-med: 500;
  --fw-bold: 700;

  --fs-body: 18px;

  --clr-white: hsl(0, 0%, 100%);
  --clr-black: hsl(0, 0%, 0%);
  --clr-off-white: hsl(0, 0%, 98%);
  --clr-gray: hsl(0, 0%, 41%);
  --clr-alt-black: hsl(0, 0%, 8%);
}

body {
  font-family: var(--ff-primary);
  color: var(--clr-gray);
  background: var(--clr-off-white);
  font-weight: var(--fw-med);
}

.btn, button, input {
  font: inherit;
  cursor: pointer;
}

#root {
  height: 100%;
}

ul li {
  list-style: none;
}

a { 
  text-decoration : none;
}

img {
  display:block;
  width: 100%;
}

h1 {
  font-size: 3em;
  font-weight: var(--fw-bold);
  color: var(--clr-alt-black);
}
`
