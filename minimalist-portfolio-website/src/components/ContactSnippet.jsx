import { Link } from "react-router-dom";
import { SnippetWrapper } from "./ContactSnippet.styles";
import { PrimaryStyledLink } from "./LinkButton.styles";

function ContactSnippet () {
  return (
    <SnippetWrapper>
      <h1>Interested in doing a project together?</h1>
      <hr></hr>
      <PrimaryStyledLink to="/contact">Contact Me</PrimaryStyledLink>
    </SnippetWrapper>
  )
}

export default ContactSnippet;