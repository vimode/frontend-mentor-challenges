import { useEffect, useState, useContext } from "react";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import { ThemeContext } from "./context/themeContext";
import { FontContext } from "./context/fontContext";
import { Definition, NotFoundError } from "./types";
import { phoneticAudioFinder, audioControl } from "./utils/common.utils";

function App() {
  const [value, setValue] = useState("");
  const [debouncedSearchValue, setDebouncedSearchValue] = useState("");
  const [definitions, setDefinitions] = useState<Definition[] | undefined>([]);
  const [notFound, setNotFound] = useState<NotFoundError | null>(null);
  // TODO: form validation
  // const [isValidInput, setIsValidInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // @ts-expect-error theme
  const { theme } = useContext(ThemeContext);
  // @ts-expect-error font
  const { font } = useContext(FontContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearchValue(value.toLowerCase().trim());
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [value]);

  useEffect(() => {
    if (debouncedSearchValue.length === 0) {
      setNotFound(null);
      setError(null);
      setDefinitions([]);
    }
    if (debouncedSearchValue.length > 0) {
      (async () => {
        setIsLoading(true);
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${debouncedSearchValue}`;
        try {
          const response = await fetch(url);
          if (response.status === 404) {
            const data = await response.json();
            setNotFound(data);
            setError(null);
            setDefinitions([]);
          }
          if (response.status === 200) {
            const data = await response.json();
            setDefinitions(data);
            setNotFound(null);
            setError(null);
          }
        } catch (error:unknown) {
          // @ts-expect-error uknown
          setError(error);
          setDefinitions([]);
          setNotFound(null);
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [debouncedSearchValue]);

  return (
    <div className={`main_wrapper ${theme ? "switchTheme" : ""} font${font}`}>
      <Header />
      <main id="main-content">
        <form onSubmit = { (e) => e.preventDefault()}>
          <div role="search" className="search_wrapper">
            <label className="searchLabel" htmlFor="search"><span>Search</span></label>
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Search for any word..."
                id="search"
              />
          </div>
        </form>
        {(isLoading && !definitions?.length) ? (
          <div className="loader"></div>
        ) : null}
        {notFound?.message && (
          <NotFound notFound={notFound} word={debouncedSearchValue} />
        )}
        {error && <div>There was a problem fetching definition : {error}</div>}
        <div className="inner_wrapper">
          {definitions && definitions.length > 0 ? (
            definitions.map((d) => (
              <div className="item_wrapper">
                <header>
                  <h1>{d.word}</h1>
                  {d.phonetics.length > 0 ? (
                    <>
                      <p>{phoneticAudioFinder(d.phonetics).text}</p>
                      {phoneticAudioFinder(d.phonetics).audio !== null ? (
                        <>
                          <button
                            onClick={() =>
                              audioControl(
                                phoneticAudioFinder(d.phonetics).audio
                              )
                            }
                          >
                            {isLoading ? (
                              <div className="loader"></div>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="75"
                                height="75"
                                viewBox="0 0 75 75"
                              >
                                <g fill="#A445ED" fillRule="evenodd">
                                  <circle
                                    cx="37.5"
                                    cy="37.5"
                                    r="37.5"
                                    opacity=".25"
                                  />
                                  <path d="M29 27v21l21-10.5z" />
                                </g>
                              </svg>
                            )}
                          </button>
                          <audio>
                             {/* @ts-expect-error unknown  */}
                            <source src={phoneticAudioFinder(d.phonetics).audio}/>
                          </audio>
                        </>
                      ) : null}
                    </>
                  ) : (
                    <></>
                  )}
                </header>
                {d.meanings.map((dm) => (
                  <ul>
                    <div className="innerTitle_wrapper">
                      <h2>{dm.partOfSpeech}</h2>
                      <p className="hline"></p>
                    </div>
                    <h3>Meaning</h3>
                    <ul className="list_style">
                      {dm.definitions.map((dmd) => (
                        <>
                          <li>{dmd.definition}</li>
                          {dmd.example && <p>"{dmd.example}"</p>}
                        </>
                      ))}
                    </ul>
                    {dm.synonyms.length > 0 && (
                      <div className="inline_content">
                        <h3 className="inline_heading">
                          Synonyms &nbsp; &nbsp;
                        </h3>
                        <ul className="inline_list">
                          {dm.synonyms.map((dmss) => (
                            <li>{dmss}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </ul>
                ))}
                <hr />
                {d.sourceUrls && 
                <div className="footer_text">
                  <p>Source</p>&nbsp; &nbsp;
                  <a href={d.sourceUrls[0]}>{d.sourceUrls[0]}</a>&nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path fill="none" stroke="#838383" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"/></svg>
                </div>}
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
