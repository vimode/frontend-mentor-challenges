import { Link } from "react-router-dom";

function Summary ({title, content, link, linktext, imgsrc}) {
  return (
    <div>
      <img src = {imgsrc} />
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
        {link && <Link to={link}>{linktext}</Link>}
      </div>

    </div>
  )
}

export default Summary;