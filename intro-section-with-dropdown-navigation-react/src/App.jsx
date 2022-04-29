import { useState } from 'react'

// pcackages
import styled from 'styled-components';

// styles
import { OuterWrapper } from './App.styles';

// components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';


function App() {

  return (
     <OuterWrapper>
       <Header />
       <HeroSection />
       <Footer />
     </OuterWrapper>
  )
}

export default App
