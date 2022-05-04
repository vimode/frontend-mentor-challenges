import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  scroll-behavior:  smooth;
}

:root {
  --ff-primary : 'Manrope', sans-serif;

  --fw-exbold: 800;

  --fs-quote: 28px;

  --clr-primary-text: hsl(193, 38%, 86%);
  --clr-primary-green: hsl(150, 100%, 66%);
  --clr-neutral-bg-blue: hsl(218, 23%, 16%);
  --clr-neutral-gray-blue: hsl(217, 19%, 38%);
  --clr-neutral-dark-blue: hsl(217, 19%, 24%);

}

body {
  font-family: var(--ff-primary);
  color:var(--clr-primary-text);
  background-color: var(--clr-neutral-bg-blue);
  height: 100vh;
  font-size: var(--fs-quote);
}

#root {
  display: flex;
  height: 100%;
  place-items: center;
  place-content: center;
}

@media(max-width: 768px) {
  :root {
    --fs-quote: 18px;
  }
}
`