import { ContactSnippet, Summary } from ".";

function PortfolioDefault () {
  return (
    <>
      <Summary 
        title = "Manage" 
        content = "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider." 
        linktext = "View Project" 
        link = "/portfolio/manage" 
        imgsrc = "/images/portfolio/desktop/image-portfolio-manage@2x.jpg"
        />

      <Summary 
        title = "Bookmark" 
        content = "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.This project required me to build a fully responsive landinge page" 
        linktext = "View Project" 
        link = "/portfolio/bookmark"
        imgsrc= "images/portfolio/desktop/image-portfolio-bookmark@2x.jpg"
        />
      <Summary 
        title = "Insure" 
        content = "This project required me to build a fully responsive landinge pageThis was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation."
        linktext = "View Project" 
        link ="/portfolio/insure"
        imgsrc= "images/portfolio/desktop/image-portfolio-insure@2x.jpg"
        />
      <Summary 
        title ="Fylo" 
        content ="This project required me to build a fully responsive landinge pageThis project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes."
        linktext = "View Project"
        link ="/portfolio/fylo"
        imgsrc= "images/portfolio/desktop/image-portfolio-fylo@2x.jpg"
        />
      <ContactSnippet />
    </>
  )
}

export default PortfolioDefault;