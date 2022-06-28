import React, {useState, useEffect} from 'react';
import './App.css';

import Header from './components/Header';
import Listing from './components/Listing';

const App = () => {
  
  return (
    <div className="App flex_">
      <Header />
      <Listing />
    </div>
  );
}

export default App;