import { useEffect, useState, useContext } from "react";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import { ThemeContext } from "./context/themeContext";
import { FontContext } from "./context/fontContext";
import { Definition, NotFoundError, Phonetics } from "./types";

function App() {
  const [ value, setValue ] = useState('')
  const [ debouncedSearchValue, setDebouncedSearchValue ] = useState('')
  const [ definitions, setDefinitions ] = useState<Definition [] |undefined>([]);
  const [ notFound, setNotFound ] = useState<NotFoundError | null>(null)
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
      setNotFound(null)
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
            setNotFound(null)
            setError(null)
          }
        }catch(error){
            setError(error);
            setDefinitions([])
            setNotFound(null)
          }
      })();
    }
  },[debouncedSearchValue])

  function phoneticFAudioFinder(phonetics:Phonetics []) {
    const valid = phonetics.filter((p:Phonetics) => p.text && p.audio)
    const audioTrack = valid.length > 0 ? new Audio(valid[0].audio) : null;
    return {
      text: valid.length > 0 ? valid[0].text :  phonetics[0].text,
      audio: audioTrack || null,
    }
  }

  function audioControl (audioTrack) {
    if(!audioTrack.playing) {
      audioTrack.play()
    } else {
      audioTrack.pause()
    }
  }


  return (
        <div className={`main_wrapper ${theme ? "switchTheme" : ""} font${font}`}>
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
            {notFound?.message && <NotFound notFound={notFound} word={debouncedSearchValue}/>}
            {error && <div>There was a problem fetching definition : {error}</div>}
            <div className="inner_wrapper">
            {definitions && definitions.length > 0 && 
              definitions.map((d)=> 
                <>
                <header>
                  <h1>{d.word}</h1>
                  {d.phonetics && 
                    <>
                      <p>{phoneticFAudioFinder(d.phonetics).text}</p>
                      {phoneticFAudioFinder(d.phonetics).audio !== null ?  <><button onClick={() => audioControl(phoneticFAudioFinder(d.phonetics).audio)}> 
                      <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75"><g fill="#A445ED" fill-rule="evenodd"><circle cx="37.5" cy="37.5" r="37.5" opacity=".25"/><path d="M29 27v21l21-10.5z"/></g></svg>
                      </button>
                      <audio>
                        <source src={phoneticFAudioFinder(d.phonetics).audio}/>
                      </audio> </>: null }
                    </>
                  }
                </header>
                {d.meanings.map((dm) => 
                  <ul>
                    <h2>{dm.partOfSpeech}</h2>
                    <h3>Meaning</h3>
                    <ul className="list_style">
                      {dm.definitions.map((dmd) => 
                        <>
                          <li>{dmd.definition}</li>
                          {dmd.example && <p>{dmd.example}</p> }
                      </>
                      )}
                    </ul>
                    {dm.synonyms.length > 0 && 
                      <div className="inline_content">
                        <h3 className="inline_heading">Synonyms &nbsp; &nbsp;</h3>
                          <ul className="inline_list">
                            {dm.synonyms.map((dmss) => 
                            <li>{dmss}</li>
                            )}
                          </ul>
                      </div>
                    }
                  </ul>
                )}
              <p>Source &nbsp; &nbsp; <a href={d.sourceUrls[0]}>{d.sourceUrls[0]}</a></p>
                </>
              )
            }
            </div>
          </main>
        </div>
  )
}

export default App
