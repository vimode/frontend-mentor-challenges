import { useState, useEffect } from 'react';

import { QuoteWrapper, QuoteTitle, QuoteText,
  Button, QuoteImage, CircleLoader } from "./App.styles";

function App() {

const [newQuote, setNewQuote] = useState();
const [isLoading, setisLoading] = useState(false);

  function fetchAdvice() {
    setisLoading(true)
    setNewQuote()
    const uri = "https://api.adviceslip.com/advice";    
   fetch(uri)
      .then((r) => { if (r.ok)  return r.json()
      throw new Error(`Network response ${r.status}`)
      })
      .then((data)=>setNewQuote(data));
      setisLoading(false)
  }

  useEffect(() => {
    fetchAdvice()
  }, [])
  
  return (

    <QuoteWrapper>
    {newQuote && !isLoading ? 
      <>
        <QuoteTitle>
          Advice #{newQuote.slip.id}
        </QuoteTitle>
        <QuoteText>
          "{newQuote.slip.advice}"
        </QuoteText>
        <QuoteImage src="./images/pattern-divider-desktop.svg"/>
        </>
        :  
      <CircleLoader /> }

  <Button onClick = {()=>fetchAdvice()}><img src="./images/icon-dice.svg"></img></Button>
    </QuoteWrapper>

  )
}

export default App
