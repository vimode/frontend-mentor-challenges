import { useEffect, useState } from "react"

function Header () {
  return (
    <header>
      <img src="/images/logo.svg" alt="logo" />
      <div>
        <p>select font</p>
        <p>theme toggle</p>
      </div>
    </header>
  )
}

function NotFound ({notFound, word}) {
  return (
    <>
      <h1>{notFound.title} for {word}</h1>
      <p>{notFound.message}</p>
      <p>{notFound.resolution}</p>
    </>
  )
}

function App() {
  const [ value, setValue ] = useState('')
  const [ debouncedSearchValue, setDebouncedSearchValue ] = useState('')
  const [ definitions, setDefinitions ] = useState([])
  const [ notFound, setNotFound ] = useState({})
  const [ error, setError ] = useState(null)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearchValue(value.toLowerCase().trim());
    },500);
    return () => {
      clearTimeout(timeout)    
    }  
  },[value])

  useEffect(() => {
    if(debouncedSearchValue.length){
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
    <>
      <Header />
      <main id="main-content">
        <header >
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
    </>
  )
}

export default App
