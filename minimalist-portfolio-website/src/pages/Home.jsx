import { ContactSnippet, HeroContent, Summary } from "../components";
import { summaryData} from "../data/data.js";

function Home () {
  return (
    <>
      <HeroContent />
      <Summary
        title= {summaryData[0].title} 
        content = {summaryData[0].content}
        linktext ={summaryData[0].linktext}
        link = {summaryData[0].link}
        imgsrc ={summaryData[0].imgsrc}
        homepage
      />
      <ContactSnippet />
    </>
  )
}

export default Home;