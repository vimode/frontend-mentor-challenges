import { Link } from "react-router-dom";
import { SummaryWrapper, ContentWrapper } from "./Summary.styles"
import { PrimaryStyledLink } from "./LinkButton.styles";

function Summary ({title, content, link, linktext, imgsrc, order,homepage}) {

  return (
    <SummaryWrapper homepage={homepage}>
      <picture className={order}>
        <source srcSet={imgsrc[0]} media = "(min-width: 900px)"/>
        <source srcSet={imgsrc[1]} media="(min-width: 400px)" />
        <img src ={imgsrc[1]} alt={title} className="summary" />
      </picture>
      <ContentWrapper homepage={homepage}>
        <h2>{title}</h2>
        <p>{content}</p>
        {link && <PrimaryStyledLink to={link}>{linktext}</PrimaryStyledLink>}
      </ContentWrapper>

    </SummaryWrapper>
  )
}

export default Summary;