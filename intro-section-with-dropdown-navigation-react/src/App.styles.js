// packages
import styled, { keyframes } from 'styled-components'

import { GridWrapper } from './Utility.style'

export const OuterWrapper = styled(GridWrapper)`
  height: 100%;
  width: 100vw;
  max-width: 1600px;
  margin: 0 auto;
  min-height: 100vh;

  @media(min-width: 900px) {
    padding: 2em;
  }

`

export const FooterWrapper = styled.footer`
  text-align: center;
  align-self:end;
  font-size: 11px;
  opacity: 0.5;
  padding-top: 1em;
`