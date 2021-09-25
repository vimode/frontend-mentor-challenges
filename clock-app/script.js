// currentTime from IP
let clockTime = document.querySelector('.clock_time');
let clocktz = document.querySelector('.clock_tz');
let currentLocation = document.querySelector('.clock_location');
let detailtz = document.querySelector('.details_tz');
let daysCount = document.querySelector('.days_count');
let weekDay = document.querySelector('.week_day');
let WeekCount = document.querySelector('.week_count');
let greeting = document.querySelector('.clock_greeting');
let outerWrapper = document.querySelector('.outer_wrapper');



const getTime = async () => {
  const response = await fetch("https://worldtimeapi.org/api/ip")

  try {
    const data = await response.json();
    let { abbreviation, client_ip, datetime, day_of_week, day_of_year, timezone, week_number } = data;
    // slice the time 
    let convertedTime = datetime.slice(11, 16);
    // slice the hour of the day
    let timeOftheDay = datetime.slice(11, 13)

    timeOftheDay >= 5 && timeOftheDay <= 11 ? (greeting.textContent = "Good Morning", outerWrapper.classList.remove('night_theme')) : timeOftheDay >= 12 && timeOftheDay <= 17 ? greeting.textContent = "Good afternoon" : timeOftheDay >= 18 || timeOftheDay <= 4 ? (greeting.textContent = "Good evening", outerWrapper.classList.add('night_theme')) : greeting.textContent = "Good day";

    clockTime.textContent = `${convertedTime}`;
    clocktz.textContent = `${abbreviation}`;
    detailtz.textContent = `${timezone}`;
    daysCount.textContent = `${day_of_year}`;
    weekDay.textContent = `${day_of_week}`;
    WeekCount.textContent = `${week_number}`;
    // geolocation stuff.
    const IPresponse = await fetch(`https://freegeoip.app/json/${client_ip}`)
    try {
      const IPdata = await IPresponse.json()
      let { city, country_code } = IPdata
      currentLocation.textContent = `in ${city}, ${country_code}`
    } catch (error) {
      console.log(error)
    }
  } catch (error) {
    console.log("worldtimeapifail")
  }
}

setTimeout(getTime(), 60000)

// QuoteGen
let quoteContent = document.querySelector('.quote_text');
let quoteAuthor = document.querySelector('.quote_person');
let refreshQuoteButton = document.querySelector('.icon_refresh');

const randomQuote = async () => {
  const response = await fetch('https://api.quotable.io/quotes?tags=technology|inspirational|wisdom')

  try {
    const data = await response.json()
    let randPageNumber = Math.floor(Math.random() * data.totalPages)

    const newResponse = await fetch(`https://api.quotable.io/quotes?tags=technology|inspirational|wisdom?page=${randPageNumber}`)
    const newData = await newResponse.json()

    let randQuote = Math.floor(Math.random() * newData.results.length - 1)
    quoteContent.textContent = `" ${newData.results[randQuote].content}"`
    quoteAuthor.textContent = `${newData.results[randQuote].author}`
  } catch (error) {
    console.log("quoteapifail")
  }
}
randomQuote()

refreshQuoteButton.addEventListener('click', randomQuote)


// show overlay

let detailsBtn = document.querySelector('.btn')
let arrowIcon = document.querySelector('.icon_arrow')
let innerWrapper = document.querySelector('.inner_wrapper')

detailsBtn.addEventListener('click', (e) => {
  e.preventDefault()
  displayDetails()
})

arrowIcon.addEventListener('click', displayDetails);

function displayDetails() {
  innerWrapper.classList.toggle('show_overlay')
  innerWrapper.classList.contains('show_overlay') ? detailsBtn.textContent = "LESS" : detailsBtn.textContent = "MORE"
}