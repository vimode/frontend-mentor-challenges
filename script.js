// data
let projectList =
  [{
    id: "n1",
    difficulty: "newbie",
    type: "vanillajs",
    title: "Huddle landing page with single introductory section",
    img_src: "./huddle-landing-page-with-single-introductory-section/design/desktop-preview.jpg"
  },
  ];


async function fetchRepoData() {
  const fetchURI = "https://api.github.com/repos/vimode/frontend-mentor-challenges/contents/"
  const response = await fetch(fetchURI);
  const resData = await response.json()

  let repoData = []

  const selectiveData = resData.map(item => {
    if (item.type == "dir" && item.name !== "img") {
      let capitalizeText = item.name.split('-').map((title) => title.charAt(0).toUpperCase() + title.substring(1)).join(' ')
      let repoItem = {
        title: capitalizeText,
        link: item.html_url,
        img: item.html_url + "/design/design-preview.jpg"
      }

      repoData.push(repoItem)
    }
    return repoData;
  })

}

// fetchRepoData()



// - access link.html and append design/desktop-preview.jpg as image source
// - if title has REACT in it, add category as react



// console.log(projectListData)