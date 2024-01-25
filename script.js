// data
let projectList =
  [
  //   {
  //   id: "n1",
  //   difficulty: "junior",
  //   tags: ["HTML", "CSS", "JS"],
  //   title: "Loopstudios landing page",
  //   img_src: "./loopstudios-landing-page/design/desktop-design.jpg",
  //   repo_url: "https://github.com/vimode/frontend-mentor-challenges/tree/master/loopstudios-landing-page",
  //   live_url: "https://frontend-mentor-challenges-ecru.vercel.app/loopstudios-landing-page/",
  //   text: "Many responsive images of different sizes with some hover effects. Animated mobile navigation to the playful theme of the landing page."
  // },
    {
      id: "n4",
      difficulty: "junior",
      tags: ["HTML", "CSS", "JS"],
      title: "Crowdfunding Product Page",
      img_src: "./crowdfunding-product-page/design/desktop-design.jpg",
      repo_url: "https://github.com/vimode/frontend-mentor-challenges/tree/master/crowdfunding-product-page",
      live_url: "https://frontend-mentor-challenges-ecru.vercel.app/crowdfunding-product-page/",
      text: "The page has custom radio buttons with form validation to limit the pledge amount. Page elements dynamically updates based on pledges."
    },
    {
      id: "n5",
      difficulty: "intermediate",
      tags: ["HTML", "CSS", "JS"],
      title: "Launch Countdown Timer",
      img_src: "./launch-countdown-timer/design/desktop-design.jpg",
      repo_url: "https://github.com/vimode/frontend-mentor-challenges/tree/master/launch-countdown-timer",
      live_url: "https://frontend-mentor-challenges-ecru.vercel.app/launch-countdown-timer",
      text: "The countdown timer uses CSS animations to flip the cards and the animationend javascript event to continue the animation every second."
    },
    {
      id: "n6",
      difficulty: "intermediate",
      tags: ["HTML", "CSS", "JS"],
      title: "Clock App",
      img_src: "./clock-app/preview.jpg",
      repo_url: "https://github.com/vimode/frontend-mentor-challenges/tree/master/clock-app",
      live_url: "https://frontend-mentor-challenges-ecru.vercel.app/clock-app/",
      text: "This web app uses multiple APIs to display a quote, local time and visitor's IP location"
    },
    {
      id: "n7",
      difficulty: "intermediate",
      tags: ["HTML", "CSS", "JS", "React"],
      title: "Github User Search",
      img_src: "./github-user-search-app/preview.jpg",
      repo_url: "https://github.com/vimode/frontend-mentor-challenges/tree/master/github-user-search-app-v2",
      live_url: "https://github-user-search-app-v2-beta.vercel.app",
      text: "The search App uses Github API to show github user profile data."
    },
    {
      id: "n9",
      difficulty: "intermediate",
      tags: ["HTML", "CSS", "JS", "React"],
      title: "IP Adddress Tracker",
      img_src: "./ip-address-tracker/design/desktop-design.jpg",
      repo_url: "https://github.com/vimode/frontend-mentor-challenges/tree/master/ip-address-tracker",
      live_url: "https://fm-ip-address-tracker-react.vercel.app/",
      text: "This API tracker uses multiple APIs to fetch the necessary data. Map is drawn using LeaftetJS and CSS is done using styled components."
    },
    {
      id: "n10",
      difficulty: "intermediate",
      tags: ["HTML", "CSS", "JS", "React"],
      title: "Minimalist Portfolio Website",
      img_src: "./minimalist-portfolio-website/design/preview.jpg",
      repo_url: "https://github.com/vimode/frontend-mentor-challenges/tree/master/minimalist-portfolio-website/",
      live_url: "https://fm-minimalist-portfolio-website-react.vercel.app/",
      text: "This react project uses React Router and styled components for CSS."
    },
    {
      id: "n11",
      difficulty: "intermediate",
      tags: ["HTML", "SCSS", "JS", "React"],
      title: "Todo App",
      img_src: "./todo-app/design/desktop-preview.jpg",
      repo_url: "https://github.com/vimode/frontend-mentor-challenges/tree/master/todo-app/",
      live_url: "",
      text: "This is a full stack app that uses React, React Redux and RTK for the frontend; Express.JS, MongoDB with Mongoose for the backend."
    },
    {
      id: "n12",
      difficulty: "advanced",
      tags: ["HTML", "SCSS", "JS", "React"],
      title: "Multi-Step Form",
      img_src: "./multi-step-form/design/desktop-preview.jpg",
      repo_url: "https://github.com/vimode/frontend-mentor-challenges/tree/master/multi-step-form/",
      live_url: "https://multi-step-form-vimo.vercel.app/",
      text: "This react project leverages the use of localStorage to store & retrieve data between each step of the form. The styling is done using SCSS."
    },
    {
      id: "n13",
      difficulty: "advanced",
      tags: ["HTML", "SCSS", "JS", "React"],
      title: "Entertainment Web App",
      img_src: "./entertainment-web-app/design/preview.jpg",
      repo_url: "https://github.com/vimode/frontend-mentor-challenges/tree/master/entertainment-web-app",
      live_url: "#",
      text:"A Full Stack App that uses the TMDB API to fetch popular movies & tvshows and filter them to display in an optimized manner with a cache on the backend to not many too many API requests. With use of localStorage each unique visitor can save bookmarks which is stored in a MongoDB database." 
    },
    {
      id: "n14",
      difficulty: "intermediate",
      tags: ["HTML", "SCSS", "TS", "React"],
      title: "Dictionary web app",
      img_src: "./dictionary-web-app/design/preview.jpg",
      repo_url: "https://github.com/vimode/frontend-mentor-challenges/tree/master/dictionary-web-app",
      live_url: "https://dictionary-web-app-orcin.vercel.app/",
      text:"A React SPA dictionary app built using TS with a theme switcher and font switcher. The dictionary API is a dummy API with a lot of conditional rendering and challenging data to display." 
    },
  ];



const ulWrapper = document.querySelector("#inner_wrapper");

let displayList = projectList.reverse().map((project) => {
  return `<li class="relative bg-transparent max-w-sm flex flex-grow flex-col align-center bg-amber-50 justify-between border-4 border-brown-900 shadow shadow-brown-900">
      <img src="${project.img_src}" alt="" class="w-full h-56 object-cover align-start">
        <div class="p-4">
          <h2 class="text-xl font-bold">${project.title}</h2>
          <p class="mt-4">${project.text}</p>
          <div class="flex justify-between mt-4">
            <span class="font-bold text-sm uppercase text-orange-500">${project.tags[0]}</span>
            <span class="font-bold text-sm uppercase text-blue-400">${project.tags[1]}</span>
            <span class="font-bold text-s uppercase text-yellow-500">${project.tags[2]}</span>
            ${project.tags[3] ? `<span class="font-bold text-sm uppercase text-cyan-400">${project.tags[3]}</span>`: ``}
          </div>
          <div class="flex flex-none justify-between mt-3">
            <a href=${project.live_url ? project.live_url : project.repo_url} class="focus:outline-dotted" aria-label="Live">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                role="img" class="iconify iconify--ion w-6 fill-currentColor hover:fill-yellow-400 transition-all"
                width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512">
                <path
                  d="M280 341.1l-1.2.1c-3.6.4-7 2-9.6 4.5l-64.6 64.6c-13.7 13.7-32 21.2-51.5 21.2s-37.8-7.5-51.5-21.2c-13.7-13.7-21.2-32-21.2-51.5s7.5-37.8 21.2-51.5l68.6-68.6c3.5-3.5 7.3-6.6 11.4-9.3 4.6-3 9.6-5.6 14.8-7.5 4.8-1.8 9.9-3 15-3.7 3.4-.5 6.9-.7 10.2-.7 1.4 0 2.8.1 4.6.2 17.7 1.1 34.4 8.6 46.8 21 7.7 7.7 13.6 17.1 17.1 27.3 2.8 8 11.2 12.5 19.3 10.1.1 0 .2-.1.3-.1.1 0 .2 0 .2-.1 8.1-2.5 12.8-11 10.5-19.1-4.4-15.6-12.2-28.7-24.6-41-15.6-15.6-35.9-25.8-57.6-29.3-1.9-.3-3.8-.6-5.7-.8-3.7-.4-7.4-.6-11.1-.6-2.6 0-5.2.1-7.7.3-5.4.4-10.8 1.2-16.2 2.5-1.1.2-2.1.5-3.2.8-6.7 1.8-13.3 4.2-19.5 7.3-10.3 5.1-19.6 11.7-27.7 19.9l-68.6 68.6C58.9 304.4 48 330.8 48 359c0 28.2 10.9 54.6 30.7 74.4C98.5 453.1 124.9 464 153 464c28.2 0 54.6-10.9 74.4-30.7l65.3-65.3c10.4-10.5 2-28.3-12.7-26.9z">
                </path>
              </path>
              <path
                d="M433.3 78.7C413.5 58.9 387.1 48 359 48s-54.6 10.9-74.4 30.7l-63.7 63.7c-9.7 9.7-3.6 26.3 10.1 27.4 4.7.4 9.3-1.3 12.7-4.6l63.8-63.6c13.7-13.7 32-21.2 51.5-21.2s37.8 7.5 51.5 21.2c13.7 13.7 21.2 32 21.2 51.5s-7.5 37.8-21.2 51.5l-68.6 68.6c-3.5 3.5-7.3 6.6-11.4 9.3-4.6 3-9.6 5.6-14.8 7.5-4.8 1.8-9.9 3-15 3.7-3.4.5-6.9.7-10.2.7-1.4 0-2.9-.1-4.6-.2-17.7-1.1-34.4-8.6-46.8-21-7.3-7.3-12.8-16-16.4-25.5-2.9-7.7-11.1-11.9-19.1-9.8-8.9 2.3-14.1 11.7-11.3 20.5 4.5 14 12.1 25.9 23.7 37.5l.2.2c16.9 16.9 39.4 27.6 63.3 30.1 3.7.4 7.4.6 11.1.6 2.6 0 5.2-.1 7.8-.3 6.5-.5 13-1.6 19.3-3.2 6.7-1.8 13.3-4.2 19.5-7.3 10.3-5.1 19.6-11.7 27.7-19.9l68.6-68.6c19.8-19.8 30.7-46.2 30.7-74.4s-11.1-54.6-30.9-74.4z">
              </path>
            </svg>
          </a>
          <a href=${project.repo_url} class="focus:outline-dotted" aria-label="Github Repo">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
              role="img" class="iconify iconify--ion w-6 fill-currentColor hover:fill-yellow-400 transition-all"
              width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512">
              <path
                d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4c0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5c-10.2-26.5-24.9-33.6-24.9-33.6c-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8c11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7c-49.7-5.8-102-25.5-102-113.5c0-25.1 8.7-45.6 23-61.6c-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8c14.3 16.1 23 36.6 23 61.6c0 88.2-52.4 107.6-102.3 113.3c8 7.1 15.2 21.1 15.2 42.5c0 30.7-.3 55.5-.3 63c0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7C480 134.9 379.7 32 256 32Z">
              </path>
            </svg>
          </a>
        </div>
    </div>
  </li>`
})

ulWrapper.innerHTML = displayList.join('');



// fetch all my repo data using GITHUB API
// async function fetchRepoData() {
//   const fetchURI = "https://api.github.com/repos/vimode/frontend-mentor-challenges/contents/"
//   const response = await fetch(fetchURI);
//   const resData = await response.json()

//   let repoData = []

//   const selectiveData = resData.map(item => {
//     if (item.type == "dir" && item.name !== "img") {
//       let capitalizeText = item.name.split('-').map((title) => title.charAt(0).toUpperCase() + title.substring(1)).join(' ')
//       let repoItem = {
//         title: capitalizeText,
//         link: item.html_url,
//         img: item.html_url + "/design/design-preview.jpg"
//       }

//       repoData.push(repoItem)
//     }
//     console.log(repoData)
//     return repoData;
//   })

// }

// fetchRepoData()
 

