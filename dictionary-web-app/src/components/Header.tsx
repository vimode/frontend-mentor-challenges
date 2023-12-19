import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { FontContext } from "../context/fontContext";

function Header () {
  const { theme,updateTheme } = useContext(ThemeContext)
  const { font, updateFont } = useContext(FontContext);
  return (
    <header className="app_header">
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="38" viewBox="0 0 34 38"><g fill="none" fill-rule="evenodd" stroke="#838383" stroke-linecap="round" stroke-width="1.5"><path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28"/><path stroke-linejoin="round" d="M5 37a4 4 0 1 1 0-8"/><path d="M11 9h12"/></g></svg>
      <div>
        <select aria-label ="Select Font "name="fonts" defaultValue="sans" id="font-select" onChange={e => updateFont(e.target.value)}>
          <option value="Sans">Sans Serif</option>
          <option value="Serif">Serif</option>
          <option value="Mono">Mono</option>
        </select>
        <input id="toggle_theme" name="toggle_theme" type="checkbox" checked={theme} onChange={updateTheme}/>
        <label id="toggle_theme_label" htmlFor="toggle_theme"></label>
        <svg id={theme ? "theme_highlight":""} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="none" stroke="#838383" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/></svg>
      </div>
    </header>
  )
}

export default Header;
