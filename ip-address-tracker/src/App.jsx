import { useState, useEffect } from "react";

import GlobalStyle from "./GlobalStyle";

import { ThemeProvider } from "styled-components";
import { lightTheme,darkTheme } from "./themes";
import { OuterWrapper } from "./App.styles.js";

import { Header, IPData, MapData } from "./components";

  // make App the layout componet itself which has the top page title, bg image,  input component, data component, map component
  // state to save fetched data from the IP
  // bonus : theme switcher

  // create input component - function prop to pass ip info
      // state to hold a demo IP and/or userInput 
      // useRef to force focus in input
  
  // create data component to load fetched data
    // fill data with  props from parent
  
  // create a map component to load leaftlet map with the marker
    // function to process fetched data and pass to the leaflet map function to load map and the pin



function App() {

  const [UserIP, setUserIP] = useState();
  const [IPinfo, setIPinfo] = useState();

  async function fetchUserIP () {
    const URI = "https://api64.ipify.org/"
    const TESTURI = 'https://api.allorigins.win/raw?url=https://api64.ipify.org/'

    const response = await fetch(TESTURI);
    const userIPAddress = await response.text()
    setUserIP(userIPAddress)
  }

  async function fetchLocationInfo(IP) {
    try {
      const URI = `http://ip-api.com/json/${IP}`
      const URI_2 = `https://freeipapi.com/api/json/${IP}`
      const TESTURI = `https://api.allorigins.win/raw?url=http://ip-api.com/json/${IP}`
      const TESTURI2 = `https://api.allorigins.win/raw?url=https://freeipapi.com/api/json/${IP}`

      const fetchThemAll = await Promise.all([
        fetch(TESTURI).then((res) => res.json()),
        fetch(TESTURI2).then((res) =>res.json())
      ].map(promise => promise.catch(error => error)));

      console.log(fetchThemAll)

      let combinedFetchedData = {
        ip : fetchThemAll[0].query,
        location : fetchThemAll[0].country,
        tz : fetchThemAll[1].timeZone,
        isp: fetchThemAll[0].isp,
        lat: fetchThemAll[0].lat,
        long: fetchThemAll[0].lon,
      }
      setIPinfo(combinedFetchedData);
    } catch (error) {
      console.log(error)
    }
  }

  function userInputIP (IP) {
    setUserIP(IP)
  }

  useEffect(() => {
    fetchUserIP()
  }, [])
  
  useEffect(() => {
    if(UserIP) fetchLocationInfo(UserIP)
  }, [UserIP])  

  

  return (
      <ThemeProvider theme= {lightTheme}>
        <GlobalStyle />
        <OuterWrapper>
          <Header 
            userInputIP = {userInputIP}
          />
          <IPData 
           IPinfo = {IPinfo}
          /> 
          <MapData 
            IPinfo = {IPinfo}
          />
        </OuterWrapper>
      </ThemeProvider>
  )
}

export default App
