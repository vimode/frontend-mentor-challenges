import { useEffect, useState, createContext, useContext } from "react";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import { ThemeContext } from "./context/themeContext";
import { FontContext } from "./context/fontContext";

function App() {
  const [ value, setValue ] = useState('')
  const [ debouncedSearchValue, setDebouncedSearchValue ] = useState('')
  const [ definitions, setDefinitions ] = useState([]);
  const [ notFound, setNotFound ] = useState({});
  const [ error, setError ] = useState(null);
  const { theme }= useContext(ThemeContext)
  const { font } = useContext(FontContext)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearchValue(value.toLowerCase().trim());
    },500);
    return () => {
      clearTimeout(timeout)
    }
  },[value])

  useEffect(() => {
    if(debouncedSearchValue.length === 0) {
      setNotFound({})
      setError(null)
      setDefinitions([])
    }
    if(debouncedSearchValue.length > 0){
      (async () => {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${debouncedSearchValue}`
        try {
          const response = await fetch(url);
          if(response.status === 404) {
            const data = await response.json()
            setNotFound(data)
            setError(null)
            setDefinitions([])
          }
          if(response.status === 200) {
            const data = await response.json()
            setDefinitions(data)
            setNotFound({})
            setError(null)
          }
        }catch(error){
            setError(error.message);
            setDefinitions([])
            setNotFound({})
          }
      })();
    }
  },[debouncedSearchValue])

  return (
        <div className={`${theme} font${font}`}>
          <Header/>
          <main id="main-content">
            <header>
              <label>
                <input 
                  type="search"
                  value={value}
                  onChange = {(e) => setValue(e.target.value)}
                  placeholder= "Search for any word..."
                />
                <img src="/images/icon-search.svg" alt="search" />
              </label>
            </header>
            {notFound.message && <NotFound notFound={notFound} word={debouncedSearchValue}/>}
            {error && <div>There was a problem fetching definition : {error}</div>}
            <ul>
            {definitions && definitions.length > 0 && 
              definitions.map((d)=> 
                <li>
                  <div>
                    <p>{d.word}</p>
                    <p>{d.phonetic}</p>
                    <p>player</p>
                  </div>
                  {d.meanings.map((dm) => 
                    <ul>
                      <div>{dm.partOfSpeech}<span><hr /></span></div>
                      <header>Meaning</header>
                      <ul>
                        {dm.definitions.map((dmd) => 
                            <li>{dmd.definition}</li>
                        )}
                      </ul>
                      <div>Synonyms : 
                        <ul>
                        {dm.synonyms.map((dmss) => 
                        <li>{dmss}</li>
                        )}
                        </ul>
                      </div>
                    </ul>
                  )}
                </li>
              )
            }
            </ul>
          </main>
        </div>
  )
}

export default App
