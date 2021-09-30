let cards = document.querySelectorAll('.single_card');
let cardCurrent = document.querySelectorAll('.current_time');
let cardPrevTime = document.querySelectorAll('.previous_time');
let cardPrevTitle = document.querySelectorAll('.previous_time_title');

let setClick = document.querySelectorAll(".profile_bottom li")

async function getLocalData() {

  const res = await fetch('./data.json');

  if (res.ok) {
    const result = await res.json();
    return result;
  } else {
    console.log(res.status)
  }

}

setClick.forEach(set => {
  set.addEventListener('click', () => {

    setClick.forEach(set => set.classList.remove('display_active'))

    if (set.childNodes[1].textContent === "Daily") {
      set.classList.add("display_active");
      getLocalData()
        .then(result => insertData(result, set.childNodes[1].textContent))
        .catch(error => console.log("error"))
    }

    else if (set.childNodes[1].textContent === "Weekly") {
      set.classList.add("display_active");
      getLocalData()
        .then(result => insertData(result, set.childNodes[1].textContent))
        .catch(error => console.log("error"))
    }

    else if (set.childNodes[1].textContent === "Monthly") {
      set.classList.add("display_active");
      getLocalData()
        .then(result => insertData(result, set.childNodes[1].textContent))
        .catch(error => console.log("error"))
    }
  })
})


function insertData(result, cardTitle) {

  function switcher(checker, period) {
    switch (checker) {
      case 'Work':
        cardCurrent[0].textContent = `${period.current}hrs`
        cardPrevTime[0].textContent = `${period.previous}hrs`;
        break;
      case 'Play':
        cardCurrent[1].textContent = `${period.current}hrs`
        cardPrevTime[1].textContent = `${period.previous}hrs`;
        break;
      case 'Study':
        cardCurrent[2].textContent = `${period.current}hrs`
        cardPrevTime[2].textContent = `${period.previous}hrs`;
        break;
      case 'Exercise':
        cardCurrent[3].textContent = `${period.current}hrs`
        cardPrevTime[3].textContent = `${period.previous}hrs`;
        break;
      case 'Social':
        cardCurrent[4].textContent = `${period.current}hrs`
        cardPrevTime[4].textContent = `${period.previous}hrs`;
        break;
      case 'Self Care':
        cardCurrent[5].textContent = `${period.current}hrs`
        cardPrevTime[5].textContent = `${period.previous}hrs`;
        break;
    }

  }

  for (data of result) {
    let checker = data.title;

    if (cardTitle === "Daily") {
      let period = data.timeframes.daily;
      for (prevTitle of cardPrevTitle) {
        prevTitle.textContent = `Yesterday - `;
      }
      switcher(checker, period)
    }

    else if (cardTitle === "Weekly") {
      let period = data.timeframes.weekly;
      for (prevTitle of cardPrevTitle) {
        prevTitle.textContent = `Last Week - `;
      }
      switcher(checker, period)
    }

    else if (cardTitle === "Monthly") {
      let period = data.timeframes.monthly;
      for (prevTitle of cardPrevTitle) {
        prevTitle.textContent = 'Last Month - '
      }
      switcher(checker, period)
    }

  }
}