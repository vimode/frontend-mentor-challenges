
import { DropdownList, DropdownLinkItems } from "./Navigation.styles";

function DropdownMenu( {dropdownLinks}) {

  return (
    <DropdownList>
      {dropdownLinks.map((linkItem,index) => (
        <DropdownLinkItems key={index}>
          {linkItem.icon && <img src={linkItem.icon} />}
          <a href={linkItem.link}>{linkItem.title}</a>
        </DropdownLinkItems>
      ))}
    </DropdownList>
  )
};

export default DropdownMenu;