//pacakges
import styled from "styled-components";
import { FlexWrapper } from "../Utility.style";

export const HeaderSection = styled(FlexWrapper)`
  flex-direction: row;
  justify-content: space-between;
  place-items: center;
  height:  max-content;
  gap: 2em;
  padding-block: 10px;

  img {
    width: 85px;
    align-self: top;
  }
`
