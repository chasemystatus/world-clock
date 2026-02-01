let selectedTimeZone = "";
let lastRenderedTimeZone = "";
let defaultCitiesHTML = "";

let timeZoneToFlag = {
  "Europe/London": "🇬🇧",
  "Europe/Dublin": "🇮🇪",
  "Europe/Athens": "🇬🇷",
  "Europe/Amsterdam": "🇳🇱",
  "America/Barbados": "🇧🇧",
  "America/Los_Angeles": "🇺🇸",
};
console.log(timeZoneToFlag["Europe/London"]);

let citiesElement = document.querySelector("#cities");
if (citiesElement) {
  defaultCitiesHTML = citiesElement.innerHTML;
}

function updateLocalTime() {
  let localTimeZoneElement = document.querySelector("#local-timezone");
  let localTimeElement = document.querySelector("#local-time");
  let localAmPmElement = document.querySelector("#am-pm");
  let localDateElement = document.querySelector("#local-date");

  if (
    !localTimeZoneElement ||
    !localTimeElement ||
    !localAmPmElement ||
    !localDateElement
  ) {
    return;
  }

  let now = moment();
  let userTimeZone = moment.tz.guess();
  let localFlag = timeZoneToFlag[userTimeZone] || "🌍";
  let localCityName = userTimeZone.split("/")[1].replace(/_/g, " ");

  localTimeZoneElement.innerHTML = `${localCityName} <span aria-hidden="true">${localFlag}</span>`;
  localTimeElement.innerHTML = now.format("h:mm:ss");
  localAmPmElement.innerHTML = now.format("A");
  localDateElement.innerHTML = now.format("MMMM Do YYYY");
}

function updateWorldClocks() {
  //London

  let londonElement = document.querySelector("#london-card");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".subtext-city-date");
    let londonTimeElement = londonElement.querySelector(".city-time");
    let londonAmPmElement = londonElement.querySelector(".city-am-pm");

    let londonTime = moment().tz("Europe/London");
    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format("h:mm:ss");
    londonAmPmElement.innerHTML = londonTime.format("A");
  }

  //Dublin

  let dublinElement = document.querySelector("#dublin-card");
  if (dublinElement) {
    let dublinDateElement = dublinElement.querySelector(".subtext-city-date");
    let dublinTimeElement = dublinElement.querySelector(".city-time");
    let dublinAmPmElement = dublinElement.querySelector(".city-am-pm");
    let dublinTime = moment().tz("Europe/Dublin");
    dublinDateElement.innerHTML = dublinTime.format("MMMM Do YYYY");
    dublinTimeElement.innerHTML = dublinTime.format("h:mm:ss");
    dublinAmPmElement.innerHTML = dublinTime.format("A");
  }

  //Rhodes

  let rhodesElement = document.querySelector("#rhodes-card");
  if (rhodesElement) {
    let rhodesDateElement = rhodesElement.querySelector(".subtext-city-date");
    let rhodesTimeElement = rhodesElement.querySelector(".city-time");
    let rhodesAmPmElement = rhodesElement.querySelector(".city-am-pm");
    let rhodesTime = moment().tz("Europe/Athens");
    rhodesDateElement.innerHTML = rhodesTime.format("MMMM Do YYYY");
    rhodesTimeElement.innerHTML = rhodesTime.format("h:mm:ss");
    rhodesAmPmElement.innerHTML = rhodesTime.format("A");
  }
}

function updateCity(event) {
  if (event.target.value === "") {
    selectedTimeZone = "";
    lastRenderedTimeZone = "";

    let citiesElement = document.querySelector("#cities");
    if (citiesElement) {
      citiesElement.innerHTML = defaultCitiesHTML;
    }

    updateWorldClocks();
    return;
  }

  selectedTimeZone = event.target.value;
  renderSelectedCity();
}

function renderSelectedCity() {
  if (selectedTimeZone === "") {
    return;
  }
  let cityTimeZone = selectedTimeZone;
  let flag = timeZoneToFlag[cityTimeZone] || "🌍";
  let cityName = cityTimeZone.split("/")[1].replace(/_/g, " ");
  let cityTime = moment().tz(cityTimeZone);
  let cityElement = document.querySelector("#cities");
  if (!cityElement) {
    return;
  }

  let cardElement = cityElement.querySelector(".city-card");
  if (!cardElement || cityTimeZone !== lastRenderedTimeZone) {
    lastRenderedTimeZone = cityTimeZone;
    cityElement.innerHTML = `<article class="city-card"  data-timezone="${cityTimeZone}">
      <div class="city-card-left">
        <h3 class="city-name">
          ${cityName} <span aria-hidden="true">${flag}</span>
        </h3>
        <p class="subtext-city-date"></p>
      </div>
      <div class="city-card-right">
        <span class="city-time"></span>
        <span class="city-am-pm"></span>
      </div>
    </article>`;
    cardElement = cityElement.querySelector(".city-card");
  }

  let dateElement = cardElement.querySelector(".subtext-city-date");
  let timeElement = cardElement.querySelector(".city-time");
  let amPmElement = cardElement.querySelector(".city-am-pm");

  dateElement.innerHTML = cityTime.format("MMMM Do YYYY");
  timeElement.innerHTML = cityTime.format("h:mm:ss");
  amPmElement.innerHTML = cityTime.format("A");
}

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", updateCity);

updateLocalTime();
updateWorldClocks();

setInterval(() => {
  updateLocalTime();
  updateWorldClocks();
  renderSelectedCity();
}, 1000);
