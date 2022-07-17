import { ContactSnippet, Summary } from ".";
import { projectData } from "../data/data.js";

function PortfolioDefault () {
  return (
    <>
    { projectData.map((project) => (
      <Summary 
        key= {project.name}
        title = {project.name}
        content = {project.intro}
        linktext="View Project"
        imgsrc= {project.portfolioImg}
        link={project.link}
        order={project.order}
      />
    )) }
      <ContactSnippet />
    </>
  )
}

export default PortfolioDefault;