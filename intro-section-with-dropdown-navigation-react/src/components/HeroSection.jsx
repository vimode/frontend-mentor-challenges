
//styles
import {HeroWrapper, ContentWrapper, ImageWrapper, TextWrapper, IllustrationWrapper, HeroTitle, HeroText, HeroLink } from './HeroSection.styles';

function HeroSection () {
  return (
    <HeroWrapper aria-label="main">
      <ContentWrapper>
        <TextWrapper>
          <HeroTitle>Make <span>remote work </span></HeroTitle>
          <HeroText>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</HeroText>
          <HeroLink href="#">Learn more</HeroLink>
        </TextWrapper>
        <ImageWrapper>
          <img 
            src="./images/client-databiz.svg"
            alt="databiz logo"
            title= "Databiz"
          />
          <img 
            src="./images/client-audiophile.svg"
            alt="audiophile logo"
            title= "AudioPhile"
          />
          <img 
            src="./images/client-meet.svg"
            alt="meet logo"
            title= "Meet"
          />
          <img 
            src="./images/client-maker.svg"
            alt="maker logo"
            title= "Maker"
          />
        </ImageWrapper>
      </ContentWrapper>

      <IllustrationWrapper />

    </HeroWrapper>
  )
}

export default HeroSection;