// packages
import styled, { keyframes } from 'styled-components'

import { GridWrapper } from './Utility.style'

export const OuterWrapper = styled(GridWrapper)`
  min-height: 100vh;
  width: 100vw;
  padding: 2em;
  max-width: 1600px;
  margin: 0 auto;
`

export const FooterWrapper = styled.footer`
  text-align: center;
  align-self:end;
  font-size: 11px;
  opacity: 0.5;
`