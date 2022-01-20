import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// // Hot Module Replacement (HMR) 
// if(undefined /* [snowpack] import.meta.hot */ ){
//   undefined /* [snowpack] import.meta.hot */ .accept();
// }