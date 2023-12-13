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
  const [ notFound, setNotFound ] = useState<NotFoundError | undefined>()
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
      setNotFound()
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
            setError(error);
            setDefinitions([])
            setNotFound({})
          }
      })();
    }
  },[debouncedSearchValue])

  function phoneticFAudioFinder(phonetic:Phonetics []) {
    const valid = phonetic.filter((p:Phonetics) => p.text && p.audio)
    const audioTrack = new Audio(valid[0].audio)
    return {
      text: valid[0].text,
      audio: audioTrack,
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
            <ul>
            {definitions && definitions.length > 0 && 
              definitions.map((d)=> 
                <>
                  <li>
                    <div>
                      <p>{d.word}</p>
                      {d.phonetics && 
                      <>
                        <p>{phoneticFAudioFinder(d.phonetics).text}</p>
                        <button onClick={() => audioControl(phoneticFAudioFinder(d.phonetics).audio)}>
                          <img src="/images/icon-play.svg" />
                        </button>
                        <audio>
                          <source src={phoneticFAudioFinder(d.phonetics).audio}/>
                        </audio>
                        {/* <p>{phoneticFAudioFinder(d.phonetics).audio}</p> */}
                      </>
                    }
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
                        {dm.synonyms.length > 0 && <div>Synonyms : 
                          <ul>
                          {dm.synonyms.map((dmss) => 
                          <li>{dmss}</li>
                          )}
                          </ul>
                        </div>}
                      </ul>
                    )}
                  </li>
                <hr/>
                <p>Source {' '} <a href={d.sourceUrls[0]}>{d.sourceUrls[0]}</a></p>
                </>
              )
            }
            </ul>
          </main>
        </div>
  )
}

export default App
