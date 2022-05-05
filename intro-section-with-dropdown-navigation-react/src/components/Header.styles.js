//pacakges
import styled from "styled-components";
import { FlexWrapper } from "../Utility.style";

export const HeaderSection = styled(FlexWrapper)`
  flex-direction: row;
  justify-content: space-between;
  place-items: center;
  height: max-content;
  gap: 2em;
  
    img {
      width: 100px;
      align-self: top;
      padding: 20px;
    }

    @media (min-width: 768px) {

      img {
        width: 150px;
      }
    }
`
