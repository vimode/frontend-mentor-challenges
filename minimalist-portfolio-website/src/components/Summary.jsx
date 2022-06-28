import { Link } from "react-router-dom";
import { SummaryWrapper, ContentWrapper } from "./Summary.styles"


function Summary ({title, content, link, linktext, imgsrc}) {
  return (
    <SummaryWrapper>
      <img src = {imgsrc} />
      <ContentWrapper>
        <h2>{title}</h2>
        <p>{content}</p>
        {link && <Link to={link}>{linktext}</Link>}
      </ContentWrapper>

    </SummaryWrapper>
  )
}

export default Summary;