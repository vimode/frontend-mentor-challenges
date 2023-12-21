import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { ThemeProvider } from './context/themeContext.tsx';
import { FontProvider } from "./context/fontContext.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <FontProvider>
        <App />
      </FontProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
