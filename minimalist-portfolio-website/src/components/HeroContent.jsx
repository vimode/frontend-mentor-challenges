import LinkButton from "./LinkButton"
import { HeroContentWrapper, HeroWrapper } from "./HeroContent.styles"

function HeroContent () {
  return (
    <HeroWrapper>
      <img src="/images/homepage/desktop/image-homepage-hero@2x.jpg" />
      <HeroContentWrapper>
        <h1>Hey, I&apos;m Alex Spencer and I love bulding beautiful websites</h1>
        <LinkButton link="/portfolio" linkText="About Me"></LinkButton>
      </HeroContentWrapper>
    </HeroWrapper>
  )
}

export default HeroContent