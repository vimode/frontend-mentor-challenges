import { SnippetWrapper } from "./ContactSnippet.styles.js";
import { PrimaryStyledLink } from "./LinkButton.styles.js";

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