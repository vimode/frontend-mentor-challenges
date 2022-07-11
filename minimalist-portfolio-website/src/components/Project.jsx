import { useParams } from 'react-router-dom'
import { getProject } from '../data/data.js'
import ContactSnippet from './ContactSnippet.jsx'
import { ImageWrapper, ContentWrapper, SideIntro, ProjectInfo, Pagination } from './Project.styles.js'

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
          <p>
            <span>{project.type[0]} &#47; </span>   
            <span>  {project.type[1]}</span>
          </p>
          <p>
            <span> {project.tags[0]} &#47; </span>  
            <span> {project.tags[1]} &#47; </span>  
            <span> {project.tags[2]}</span>
          </p>

          <a href={project.livelink}>Visit Website</a>
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
              <img src="/images/icons/arrow-left.svg"/>
              <div>
                <a href="#">Fylo</a>
                <p>Previous Project</p>
              </div>
            </li>
            <li>
              <div>
                <a href="#">Bookmark</a>
                <p>Previous Project</p>
               </div>
              <img src="/images/icons/arrow-right.svg"/>
            </li>
          </ul>
        </Pagination>
        
      </ContentWrapper>
      <ContactSnippet />
    </>
  )
}

export default Project;