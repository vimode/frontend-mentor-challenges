import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import SocialIcons from "./SocialIcons"
import { FooterWrapper } from "./Footer.styles"

function Footer () {
  return (
    <FooterWrapper>
      <div>
      <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="61" height="32"><path fill="var(--color-neutral-white)" fillRule="evenodd" d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"/></svg></Link>
      <Navbar/>
      </div>
      <SocialIcons footerIcons/>
    </FooterWrapper>
  )
}

export default Footer