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

function App() {
  const [ value, setValue] = useState('')
  const [ debouncedSearchValue, setDebouncedSearchValue] = useState('')
  const [definitions, setdefinitions] = useState([])

  async function getDefinition (word:string) {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    const data = await fetch(url)
    const response = await data.json()
    setdefinitions(response)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearchValue(value.toLowerCase().trim());
    },500);
    return () => {
      clearTimeout(timeout)
    }
  },[value])

  useEffect(() => {
    getDefinition(debouncedSearchValue)
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
              onChange = {(e) =>setValue(e.target.value)}
              placeholder= "Search for any word..."
            />
            <img src="/images/icon-search.svg" alt="search" />
          </label>
        </header>
        <ul>
        {definitions.length > 0 && 
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
