import { useParams } from 'react-router-dom'
import { getProject } from '../data/data.js'

function Project () {
  let params = useParams()
  let project =  getProject(params.projectname)
  console.log(project)
  return (
    <>
      <img src={project.coverimg} alt="" />
      <main>
        <aside>
          <h1>{project.name}</h1>
          <p>{project.intro}</p>
          <p>
            <span>{project.type[0]}</span> /   
            <span>  {project.type[1]}</span>
          </p>
          <p>
            <span> {project.tags[0]}</span> / 
            <span> {project.tags[1]}</span> / 
            <span> {project.tags[2]}</span>
          </p>

          <a href={project.livelink}>Visit Website</a>
        </aside>

        <section>
          <h2>Project Background</h2>
          <p>{project.background}</p>
          <h2>Static Previews</h2>
          <img src = {project.previews[0]} alt="" />
          <img src = {project.previews[1]} alt="" />
        </section>

        
      </main>
    </>
  )
}

export default Project;