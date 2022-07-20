import { Routes, Route } from  'react-router-dom';
import { Home, Portfolio, Contact, Page404 } from './pages'
import { Footer, Header, Project, PortfolioDefault } from './components'
import { OuterWrapper, MainWrapper, FooterWrapper } from './App.styles.js'

function App() {
  return (
    <OuterWrapper>
        <Header />
      <MainWrapper>
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/portfolio" element={<Portfolio />}>
            <Route index element ={<PortfolioDefault />} />
            <Route path=":projectname" element={<Project />} />
          </Route>
          <Route path="/contact" element={<Contact />}  />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </MainWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </ OuterWrapper>
  )
}

export default App
