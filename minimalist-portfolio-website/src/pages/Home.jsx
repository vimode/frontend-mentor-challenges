import { ContactSnippet, HeroContent, Summary } from "../components";

function Home () {
  return (
    <main>
      <HeroContent />
      <Summary
        title= "About Me"
        content = "I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work."
        linktext = "Go to my portfolio"
        link = "/portfolio"
        imgsrc = "/images/homepage/desktop/image-homepage-profile@2x.jpg"
      />
      <ContactSnippet />
    </main>
  )
}

export default Home;