import { createGlobalStyle } from "styled-components"

export default createGlobalStyle  `

  * {
    margin: 0;
    padding:0;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  html {
    height: 100%;
  }
 
  :root {

    --font-primary: 'Public Sans', sans-serif;
    --font-secondary: 'Ibarra Real Nova', serif;
    
    --font-weight-regular: 400;
    --font-weight-bold: 700;

    --color-primary-cyan-600: hsl(167, 36%, 54%);
    --color-primary-dark-blue-700: hsl(205, 41%, 21%);
    --color-primary-grey-blue-800: hsl(245, 10%, 22%);
    
    --color-secondary-grey-100: hsl(0, 0%, 98%);
    --color-secondary-grey-300: hsl(240, 2%, 92%);
    --color-secondary-red-400: hsl(0, 90%, 57%);

    --color-neutral-white: hsl(0, 0%, 100%);

    --color-button-secondary-border: var(--color-primary-grey-blue-800);
    --color-input-active-border: var(--color-primary-cyan-600);
    --color-input-error-border: var(--color-secondary-red-400);
    
    --text-sm: 0.875rem;
    --text-md: 1rem;
    --text-reg: 1.25rem;
    --text-lg: 1.5rem;
    --text-xl: 2rem;
    --text-2xl: 2.5rem;
    --text-3xl: 3.125rem;

    --space-0: 0;
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    --space-5: 1.25rem;
    --space-6: 1.5rem;
    --space-8: 2rem;
    --space-10: 2.5rem;
    --space-12: 3rem;
    --space-16: 4rem;
    --space-20: 5rem;
    --space-24: 6rem;
    
    --opacity-25: 0.25;
    --opacity-50: 0.5;
    --opacity-75: 0.75;
    --opacity-100: 1;
  
  }

  body {
    font-family: var(--font-primary);
    font-weight: var(--font-weight-regular);
    color: var(--color-primary-grey-blue-800);
  }

  ul {
    list-style: none;
  }

  input, button  {
    font: inherit;
  }

  img {
    display: block;
    width:100%;
  }

`