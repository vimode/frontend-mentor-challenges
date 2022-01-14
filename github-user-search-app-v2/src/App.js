import { useState, useEffect } from 'react';

import './App.css';

import Header from './components/Header.jsx';
import UserProfile from './components/UserProfile.jsx';
import Footer from './components/Footer.jsx';

function App() {

  const [userProfileData, setUserProfileData] = useState("")
  const [userSearchQuery, setUserSearchQuery] = useState("")
  const [fetchError, setFetchError] = useState()

  const fetchUserInfo = async function (searchString) {

    const endPointUrl = `https://api.github.com/users/${searchString}`

    const response = await fetch(endPointUrl)

    if (response.ok) {
      const searchResult = await response.json();
      setUserProfileData(searchResult)
      setFetchError(false)
    } else {
      if (userProfileData) {
        setFetchError(true)
      }
      console.log(response)
    }
  }

  // updated searchQuery state variable
  const updateSearchQuery = (searchQuery) => {
    setUserSearchQuery(searchQuery)
  }

  // listen to searchQuery state variable to  update fetchData
  useEffect(() => {
    fetchUserInfo(userSearchQuery)
  }, [userSearchQuery])

  return (
    <div className="App outer_wrapper flex_">

      <Header
        updateSearchQuery={updateSearchQuery}
        fetchError={fetchError}
      />

      <UserProfile
        key={userProfileData.id}
        fetchedData={userProfileData}
      />

      <Footer />
    </div>
  );
}

export default App;
