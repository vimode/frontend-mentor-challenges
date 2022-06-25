import { Link } from "react-router-dom"
import { IconList } from "./SocialIcons.styles";

function SocialIcons () {
  return (
      <IconList>
        <li>
          <a href=""><img src="/images/icons/github.svg" alt="Github"/></a>
        </li>
        <li>
          <a href=""><img src="/images/icons/twitter.svg" alt="Twitter"/></a>
        </li>
        <li>
          <a href=""><img src="/images/icons/linkedin.svg" alt="LinkedIn"/></a>
        </li>
      </IconList>
  )
}

export default SocialIcons;