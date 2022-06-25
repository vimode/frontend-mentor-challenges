import { Link } from "react-router-dom";
import { StyledLink } from "./LinkButton.styles";

function LinkButton ({linkText, link}) {
  return (
    <div>
      <StyledLink to={link}>
        <img src="./images/icons/down-arrows.svg" alt="" />
        {linkText}
      </StyledLink>
    </div>
  )
}

export default LinkButton;