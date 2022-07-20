import styled from "styled-components";

export const AboutWrapper   = styled.div`
  display: flex;
  border-top: 2px solid var(--color-secondary-grey-300);
  width: 100%;
  padding: var(--space-8) var(--space-4);

  & h1 {
    width: 50%;
    font-size: var(--text-2xl);
  }

  & div {
    width: 50%;
  } 

  & p {
    max-width: 60ch;
    font-size: var(--text-md);
    line-height: 30px;
    opacity: var(--opacity-75);
  }

  & ul {
    display: flex;
    gap: var(--space-4);
    margin-top: var(--space-4);
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: var(--space-6);

    & h1,
    & div {
      width: 100%;
    }

    & p {
      max-width: max-content;
    }
  }
`

export const ContactWrapper = styled(AboutWrapper)`
  transform: translateY(-100px) ;

  & h1 {
    width: 50%;
    font-size: var(--text-2xl);
  }

  @media (max-width: 900px) {
    & h1 {
      width: 100%;
    }

  }

`

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: var(--space-4);

  & label {
    font-weight: var(--font-weight-bold);
    font-size: var(--text-xs);
  }

  & input::placeholder,
  & textarea::placeholder {
    font-size: var(--text-xs);
    opacity: var(--opacity-50);
  }
  
  & input,
  & textarea {
    background: var(--color-secondary-grey-300);
    font-family: inherit;
    padding: var(--space-3);
    border: 1px solid transparent;
    outline: 1px solid transparent;
    resize: none;
  }

  & input:active, & input:focus, & textarea:active, & textarea:focus {
    border: 1px solid var(--color-input-active-border);
    outline: 1px solid var(--color-input-active-border);
  }

  & button {
    width: max-content;
    padding: var(--space-4) var(--space-8);
    background: var(--color-primary-dark-blue-700);
    color: var(--color-neutral-white);
    font-size: var(--text-xs);
    text-transform: uppercase;
    letter-spacing: 2px;
    border: var(--color-primary-dark-blue-700);
    cursor: pointer;
    transition: all 250ms linear;
    
    &:hover,
    &:focus {
     background: var(--color-primary-cyan-600);
     color: var(--color-neutral-white);
    }
  }

  & span {
    color: var(--color-primary-cyan-600);
    font-size: var(--text-md);

    &.errorText {
      color: var(--color-secondary-red-400);
    }
  }

  @media(max-width:  900px) {
    width: 100%;

  }
`