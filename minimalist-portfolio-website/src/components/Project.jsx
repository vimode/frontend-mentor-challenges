import { useParams, Link } from 'react-router-dom'
import { projectData, getProject } from '../data/data.js'
import ContactSnippet from './ContactSnippet.jsx'
import { ImageWrapper, ContentWrapper, SideIntro, ProjectTags, ProjectInfo, Pagination } from './Project.styles.js'
import { PrimaryStyledLink, ExternalStyledLink } from './LinkButton.styles.js'

function Project () {
  let params = useParams()
  let project =  getProject(params.projectname)
  
  let [prevItem, nextItem]= new Array(2) 

  function paginationNumbers () {
    nextItem = project.id % projectData.length 
    
    if(project.id === 1) {
      return prevItem = projectData.length -1
    } 
      prevItem = project.id - 2
    }
    
    paginationNumbers()


  return (
    <>
      <ImageWrapper>
        <img src={project.coverimg} alt={project.name} />
      </ImageWrapper>
      <ContentWrapper>
        <SideIntro>
          <h1>{project.name}</h1>
          <p>{project.intro}</p>
          <ProjectTags>
            <p>
              <span>{project.type[0]} &#47; </span>   
              <span>  {project.type[1]}</span>
            </p>
            <p>
              <span> {project.tags[0]} &#47; </span>  
              <span> {project.tags[1]} &#47; </span>  
              <span> {project.tags[2]}</span>
            </p>
          </ProjectTags>

        <ExternalStyledLink href={project.livelink}>Visit Website</ExternalStyledLink>
        </SideIntro>

        <ProjectInfo>
          <h2>Project Background</h2>
          <p>{project.background}</p>
          <h2>Static Previews</h2>
          <img src = {project.previews[0]} alt={project.name}/>
          <img src = {project.previews[1]} alt={project.name} />
        </ProjectInfo>

        <Pagination>
          <ul>
            <li>
              <Link to={projectData[prevItem].link} aria-label="Previous">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16"><path fill="none" stroke="#33323D" d="M9 0L1 8l8 8"/></svg>
                <div>
                  <h2>{projectData[prevItem].name}</h2>
                  <p>Previous Project</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to={projectData[nextItem].link} aria-label="Next">
                <div>
                  <h2>{projectData[nextItem].name}</h2>
                  <p>Previous Project</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16"><path fill="none" stroke="#33323D" d="M1 0l8 8-8 8"/></svg>
              </Link>
            </li>
          </ul>
        </Pagination>
        
      </ContentWrapper>
      <ContactSnippet />
    </>
  )
}

export default Project;