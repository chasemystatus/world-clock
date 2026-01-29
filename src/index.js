let selectedTimeZone = "";

function updateWorldClocks() {
  //London
  if (londonElement) {
    let londonElement = document.querySelector("#london-card");
    let londonDateElement = londonElement.querySelector(".subtext-city-date");
    let londonTimeElement = londonElement.querySelector(".city-time");
    let londonAmPmElement = londonElement.querySelector(".city-am-pm");
    let londonTime = moment().tz("Europe/London");
    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format("h:mm:ss");
    londonAmPmElement.innerHTML = londonTime.format("A");
  }
  //Dublin
  if (dublinElement) {
    let dublinElement = document.querySelector("#dublin-card");
    let dublinDateElement = dublinElement.querySelector(".subtext-city-date");
    let dublinTimeElement = dublinElement.querySelector(".city-time");
    let dublinAmPmElement = dublinElement.querySelector(".city-am-pm");
    let dublinTime = moment().tz("Europe/Dublin");
    dublinDateElement.innerHTML = dublinTime.format("MMMM Do YYYY");
    dublinTimeElement.innerHTML = dublinTime.format("h:mm:ss");
    dublinAmPmElement.innerHTML = dublinTime.format("A");
  }

  //Rhodes
  if (rhodesElement) {
    let rhodesElement = document.querySelector("#rhodes-card");
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
  selectedTimeZone = event.target.value;
  renderSelectedCity();
}

function renderSelectedCity() {
  if (selectedTimeZone === "") {
    return;
  }

  let cityTimeZone = selectedTimeZone;
  let cityName = cityTimeZone.split("/")[1].replace(/_/g, " ");
  let cityTime = moment().tz(cityTimeZone);

  let cityElement = document.querySelector("#cities");
  if (!cityElement) {
    return;
  }

  cityElement.innerHTML = `<article class="city-card"  data-timezone="${cityTimeZone}">
      <div class="city-card-left">
        <h3 class="city-name">
          ${cityName} 
        </h3>
        <p class="subtext-city-date">${cityTime.format("MMMM Do YYYY")}</p>
      </div>
      <div class="city-card-right">
        <span class="city-time">${cityTime.format("h:mm:ss")}</span>
        <span class="city-am-pm">${cityTime.format("A")}</span>
      </div>
    </article>`;
}

//updateWorldClocks();//
//setInterval(updateWorldClocks, 1000);//

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", updateCity);

setInterval(renderSelectedCity, 1000);
