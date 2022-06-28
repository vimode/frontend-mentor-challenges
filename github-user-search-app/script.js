const searchForm = document.querySelector('.search_bar')
const searchInput = document.querySelector('#dev_search')
const btn = document.querySelectorAll('.btn');

const formData = new FormData();
const errorText = document.querySelector('.error_text');

// profile data
const pCard = document.querySelector(".profile_card")
const pImgSrc = document.querySelector(".profile_img_src");
const pName = document.querySelector(".profile_name");
const pUsername = document.querySelector(".profile_username");
const pDate = document.querySelector(".profile_date");
const pBio = document.querySelector(".profile_bio");
const pRepo = document.querySelector(".repo_number");
const pFollowers = document.querySelector(".followers_number");
const pFollowing = document.querySelector(".following_number");
const pLocation = document.querySelector(".info_location_text");
const pURL = document.querySelector(".info_website_text");
const pTwitter = document.querySelector(".info_twitter_text");
const pCompany = document.querySelector(".info_company_text");

// fetch data
async function searchUser(event) {
  event.preventDefault()

  let queryString = searchInput.value;
  let endPointUrl = `https://api.github.com/users/${queryString}`

  const response = await fetch(endPointUrl);

  if (response.ok) {
    const searchResult = await response.json();

    let { avatar_url, html_url, name, login, bio, public_repos, followers, following, location, blog, twitter_username, company, created_at } = searchResult;

    let createdDate = new Date(created_at).toLocaleString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    pImgSrc.src = avatar_url;
    name ? pName.textContent = name : pName.textContent = login
    pUsername.href = html_url;
    pUsername.textContent = `@${login}`;
    pDate.textContent = `Joined ${createdDate}`;
    bio ? pBio.textContent = bio : pBio.textContent = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, eum? Eveniet, ullam
    vel laborum corrupt.`;
    pRepo.textContent = public_repos;
    pFollowers.textContent = followers;
    pFollowing.textContent = following;
    location ? (pLocation.textContent = location, pLocation.style.opacity = "1") : (pLocation.textContent = `Not Available`, pLocation.style.opacity = "0.5");
    blog ? pURL.href = `${blog}` : pURL.href = "";
    blog ? (pURL.textContent = blog, pURL.style.opacity = "1") : (pURL.textContent = `Not Available`, pURL.style.opacity = "0.5");
    twitter_username ? (pTwitter.textContent = twitter_username, pTwitter.style.opacity = "1") : (pTwitter.textContent = 'Not Available', pTwitter.style.opacity = "0.5");
    company ? (pCompany.textContent = company, pCompany.style.opacity = "1") : (pCompany.textContent = "Not Available", pCompany.style.opacity = "0.5");

    pCard.classList.add('show');

    searchInput.value = "";
  } else {
    errorText.classList.add('show');
    setTimeout(function () {
      errorText.classList.remove('show')
    }, 2000);
  }
}

// theme toggle

const labelText = document.querySelector('#mode');
const body = document.querySelector('body')
// dark theme /media prefers-color-scheme 
const darkSide = window.matchMedia('(prefers-color-scheme: dark)');

const themeSwitcherToggle = document.querySelector('.toggle_theme');

themeSwitcherToggle.addEventListener('change', () => {
  darkSideStatus(themeSwitcherToggle.checked)
})

// switch media queries

function darkSideStatus(status) {
  body.classList.toggle('dark_theme', status);
  if (status) {
    labelText.textContent = 'LIGHT';
    // themeSwitcherToggle.checked = "true"
  } else {
    labelText.textContent = 'DARK';
    // themeSwitcherToggle.checked = "false"
  }
}

// todo : on browser pref change, wrong toggle icon/text is displayed.

// run to check the preferred browser theme 
// the matchMedia has  a property of matches which returns true/false
darkSideStatus(darkSide.matches)

// listen to changes to switch theme on fly
darkSide.addListener((e) => {
  darkSideStatus(e.matches)
})