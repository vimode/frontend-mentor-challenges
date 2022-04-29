

function DropdownMenu( {dropdownLinks}) {

  return (
    <ul>
      {dropdownLinks.map((linkItem,index) => (
        <li key={index}>
          <a>{linkItem.title}</a>
        </li>
      ))}
    </ul>
  )
};

export default DropdownMenu;