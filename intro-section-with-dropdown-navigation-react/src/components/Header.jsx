
//styles
import {HeaderSection} from "./Header.styles";

//components
import Navigation from './Navigation';


function Header () {
  return (
    <HeaderSection aria-label="header">
      <img 
        src="./images/logo.svg"
        alt="logo"
      />
      <Navigation />
    </HeaderSection>
  )
}

export default Header;