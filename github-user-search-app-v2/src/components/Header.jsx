import {useState, useEffect} from 'react';
import searchIcon from  './../assets/img/icon-search.svg';
import './Header.css';

const Header = ({updateSearchQuery, fetchError}) => {
  
  const [searchQuery, setSearchQuery] = useState("");
  const [switchTheme, setSwitchTheme] = useState(true)

  // handle search input change
  const handleChange = (event) => {
    const {name, value, type, checked} = event.target;
    if(name === "search") {
    setSearchQuery(value)
    } else if (type === "checkbox") {
      setSwitchTheme(checked)
    }
  };

  //handle form submit 
  const  handleSubmit = (event) => {
    event.preventDefault()
    updateSearchQuery(searchQuery)
  };

  // switch theme
  useEffect(() => {
    document.querySelector('body').classList.toggle('dark_theme')
  }, [switchTheme]);


  return (
    <header className="inner_wrapper">
      
      <div className="header flex_">
      <h1>devfinder</h1>
        <div className="theme_switcher flex_">
          <input 
          type="checkbox" 
          className="toggle_theme" 
          name="theme_switch"
          onChange = {handleChange} 
          checked={switchTheme}
          id="theme_checkbox" />
          <label htmlFor="theme_checkbox" name="mode" id="mode">{switchTheme ? "DARK" : "LIGHT"}</label>
        </div>
      </div>

        <form className='search_bar inner_wrapper' onSubmit={handleSubmit}>
          <img src={searchIcon} alt="search icon" className="search_icon" />
          <input 
            type="search" 
            id="dev_search" 
            name="search"
            onChange={handleChange}
            value={searchQuery}
            placeholder="Search Github username..."
            aria-label="Search for a Github profile" />
          <button type="submit" className="btn btn_search">Search</button>
          {fetchError && <p className="error_text">No results</p>}
        </form>

    </header>
  )
};

export default Header;