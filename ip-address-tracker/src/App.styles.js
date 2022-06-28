import styled from "styled-components";

import { GridWrapper } from "./Utility.style";

export const OuterWrapper = styled(GridWrapper)`
  min-height: 100vh;
  grid-template-rows: minmax(40%, 300px) auto;
  position: relative;
`