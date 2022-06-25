import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import SocialIcons from "./SocialIcons"
import { FooterWrapper } from "./Footer.styles"

function Footer () {
  return (
    <FooterWrapper>
      <Link to="/"><img src="/images/logo.svg" alt="logo"/></Link>
      <Navbar/>
      <SocialIcons/>
    </FooterWrapper>
  )
}

export default Footer