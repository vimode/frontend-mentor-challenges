
// data
import { navItems } from "../navItems";

// components
import NavItem from "./NavItem";

function Navigation () {
  
  return (
    <nav>
      <ul>
    {navItems.map((navLink,index)=> {
      return (
        <NavItem 
          navLink={navLink}
          key={index}
        />
      )
    })}
      </ul>

      <ul>
        <li>
          <a>Login</a>
        </li>
        <li>
          <a>Register</a>
        </li>
      </ul>

      
    </nav>
  )
}

export default Navigation;