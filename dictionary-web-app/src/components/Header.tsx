import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { FontContext } from "../context/fontContext";

function Header () {
  const { theme,updateTheme } = useContext(ThemeContext)
  const { font, updateFont } = useContext(FontContext);
  return (
    <header>
      <img src="/images/logo.svg" alt="logo" />
      <div>
        <select aria-label ="Select Font "name="fonts" defaultValue="sans" id="font-select" onChange={e => updateFont(e.target.value)}>
          <option value="Sans">Sans Serif</option>
          <option value="Serif">Serif</option>
          <option value="Mono">Mono</option>
        </select>
        <button onClick = {updateTheme}>Change {theme}</button>
        <p>theme toggle</p>
      </div>
    </header>
  )
}

export default Header;
