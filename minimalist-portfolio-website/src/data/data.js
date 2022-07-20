export const summaryData = [
  {
    title: "About me",
    content: "I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.",
    linktext:"Go to my portfolio", 
    link: "/portfolio",
    imgsrc: ["/images/homepage/desktop/image-homepage-profile@2x.jpg", "/images/homepage/desktop/image-homepage-profile.jpg"]
  }
]

export const projectData = [
  {
    id: 1,
    name: "Manage",
    intro: "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
    type: ["Interaction Design", "Front End Development"],
    tags: ["HTML", "CSS", "JS"],
    background: `This project was a front-end  challenge from Frontend Mentor. It's a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.`,
    coverimg: "/images/detail/desktop/image-manage-hero@2x.jpg",
    previews: ["/images/detail/desktop/image-manage-preview-1@2x.jpg","/images/detail/desktop/image-manage-preview-2@2x.jpg"],
    portfolioImg: ["/images/portfolio/desktop/image-portfolio-manage.jpg","/images/portfolio/desktop/image-portfolio-manage@2x.jpg"],
    link: "/portfolio/manage",
    livelink: "https://frontend-mentor-challenges-ecru.vercel.app/manage-landing-page",
    order: "left"
  },
  {
    id: 2,
    name: "Bookmark",
    intro: "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.",
    type: ["Interaction Design", "Front End Development"],
    tags: ["HTML", "CSS", "JS"],
    background: `This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.`,
    coverimg: "/images/detail/desktop/image-bookmark-hero@2x.jpg",
    previews: ["/images/detail/desktop/image-bookmark-preview-1@2x.jpg","/images/detail/desktop/image-bookmark-preview-2@2x.jpg"],
    portfolioImg: ["/images/portfolio/desktop/image-portfolio-bookmark.jpg","/images/portfolio/desktop/image-portfolio-bookmark@2x.jpg"],
    link: "/portfolio/bookmark",
    livelink: "https://frontend-mentor-challenges-ecru.vercel.app/bookmark-landing-page",
    order: "right"
  },
  {
    id: 3,
    name: "Insure",
    intro: "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.",
    type: ["Interaction Design", "Front End Development"],
    tags: ["HTML", "CSS", "JS"],
    background: `This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.`,
    coverimg: "/images/detail/desktop/image-insure-hero@2x.jpg",
    previews: ["/images/detail/desktop/image-insure-preview-1@2x.jpg","/images/detail/desktop/image-insure-preview-2@2x.jpg"],
    portfolioImg: ["/images/portfolio/desktop/image-portfolio-insure.jpg","/images/portfolio/desktop/image-portfolio-insure@2x.jpg"],
    link: "/portfolio/insure",
    livelink: "https://frontend-mentor-challenges-ecru.vercel.app/insure-landing-page/",
    order: "left"
  },
  {
    id: 4,
    name: "Fylo",
    intro: "This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.",
    type: ["Interaction Design", "Front End Development"],
    tags: ["HTML", "CSS", "JS"],
    background: `This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.`,
    coverimg: "/images/detail/desktop/image-fylo-hero@2x.jpg",
    previews: ["/images/detail/desktop/image-fylo-preview-1@2x.jpg","/images/detail/desktop/image-fylo-preview-2@2x.jpg"],
    portfolioImg: ["/images/portfolio/desktop/image-portfolio-fylo.jpg","/images/portfolio/desktop/image-portfolio-fylo@2x.jpg"],
    link: "/portfolio/fylo",
    livelink: "https://frontend-mentor-challenges-ecru.vercel.app/fylo-dark-theme-landing-page/",
    order: "right"
  }
]


export function getProject(name) {
  return projectData.find((project) => project.name.toLowerCase() === name.toLowerCase()) ;
}
