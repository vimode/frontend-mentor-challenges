import { useParams } from 'react-router-dom'
import { getProject } from '../data/data.js'
import ContactSnippet from './ContactSnippet.jsx'
import { ImageWrapper, ContentWrapper, SideIntro, ProjectTags, ProjectInfo, Pagination } from './Project.styles.js'
import { PrimaryStyledLink } from './LinkButton.styles.js'

function Project () {
  let params = useParams()
  let project =  getProject(params.projectname)
  return (
    <>
      <ImageWrapper>
        <img src={project.coverimg} alt="" />
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

        <PrimaryStyledLink to={project.livelink}>Visit Website</PrimaryStyledLink>
        </SideIntro>

        <ProjectInfo>
          <h2>Project Background</h2>
          <p>{project.background}</p>
          <h2>Static Previews</h2>
          <img src = {project.previews[0]} alt="" />
          <img src = {project.previews[1]} alt="" />
        </ProjectInfo>

        <Pagination>
          <ul>
            <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16"><path fill="none" stroke="#33323D" d="M9 0L1 8l8 8"/></svg>
              <div>
                <h2>Fylo</h2>
                <p>Previous Project</p>
              </div>
            </li>
            <li>
              <div>
                <h2>Bookmark</h2>
                <p>Previous Project</p>
               </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16"><path fill="none" stroke="#33323D" d="M1 0l8 8-8 8"/></svg>
            </li>
          </ul>
        </Pagination>
        
      </ContentWrapper>
      <ContactSnippet />
    </>
  )
}

export default Project;