
import { DropdownList, DropdownLinkItems } from "./Navigation.styles";

function DropdownMenu( {dropdownLinks}) {

  return (
    <DropdownList>
      {dropdownLinks.map((linkItem,index) => (
        <DropdownLinkItems key={index}>
          <a>{linkItem.title}</a>
        </DropdownLinkItems>
      ))}
    </DropdownList>
  )
};

export default DropdownMenu;