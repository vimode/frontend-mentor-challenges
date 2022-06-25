import LinkButton from "./LinkButton"

function HeroContent () {
  return (
    <div>
      <img src="/images/homepage/desktop/image-homepage-hero@2x.jpg" />
      <h1>Hey, I'm Alex Spencer and I love bulding beautiful websites</h1>
      <LinkButton link="/portfolio" linkText="About Me"></LinkButton>
    </div>
  )
}

export default HeroContent