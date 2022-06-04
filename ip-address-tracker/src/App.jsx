import { useState, useEffect } from "react";

import GlobalStyle from "./GlobalStyle";

import { OuterWrapper } from "./App.styles.js";

import { Header, IPData, MapData } from "./components";


function App() {

  const [UserIP, setUserIP] = useState();
  const [IPinfo, setIPinfo] = useState();

  async function fetchUserIP () {
    const URI = "https://api.my-ip.io/ip"

    const response = await fetch(URI);
    const userIPAddress = await response.text()
    setUserIP(userIPAddress)
  }

  async function fetchLocationInfo(IP) {
    try {
      const URI = `http://ip-api.com/json/${IP}`
      const CORSURI = `https://api.allorigins.win/raw?url=http://ip-api.com/json/${IP}`
      const URI_2 = `https://freeipapi.com/api/json/${IP}`

      const fetchThemAll = await Promise.all([
        fetch(CORSURI),
        fetch(URI_2)
      ]);
      const allData = await Promise.all(fetchThemAll.map( r=> r.json()))

      if (allData[0].status === "success") {
        let combinedFetchedData = {
          ip : allData[1].ipAddress,
          location : allData[0].country,
          tz : allData[1].timeZone,
          isp: allData[0].isp,
          lat: allData[0].lat,
          long: allData[0].lon,
        }        
        setIPinfo(combinedFetchedData);
      } else {
        setUserIP("8.8.8.8")
      }
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
      <>
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
      </>
  )
}

export default App
