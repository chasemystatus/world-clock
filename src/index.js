function updateWorldClocks() {
  //London
  let londonElement = document.querySelector("#london-card");
  let londonDateElement = londonElement.querySelector(".subtext-city-date");
  let londonTimeElement = londonElement.querySelector(".city-time");
  let londonAmPmElement = londonElement.querySelector(".city-am-pm");
  let londonTime = moment().tz("Europe/London");
  londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format("h:mm:ss");
  londonAmPmElement.innerHTML = londonTime.format("A");

  //Dublin
  let dublinElement = document.querySelector("#dublin-card");
  let dublinDateElement = dublinElement.querySelector(".subtext-city-date");
  let dublinTimeElement = dublinElement.querySelector(".city-time");
  let dublinAmPmElement = dublinElement.querySelector(".city-am-pm");
  let dublinTime = moment().tz("Europe/Dublin");
  dublinDateElement.innerHTML = dublinTime.format("MMMM Do YYYY");
  dublinTimeElement.innerHTML = dublinTime.format("h:mm:ss");
  dublinAmPmElement.innerHTML = dublinTime.format("A");

  //Rhodes
  let rhodesElement = document.querySelector("#rhodes-card");
  let rhodesDateElement = rhodesElement.querySelector(".subtext-city-date");
  let rhodesTimeElement = rhodesElement.querySelector(".city-time");
  let rhodesAmPmElement = rhodesElement.querySelector(".city-am-pm");
  let rhodesTime = moment().tz("Europe/Athens");
  rhodesDateElement.innerHTML = rhodesTime.format("MMMM Do YYYY");
  rhodesTimeElement.innerHTML = rhodesTime.format("h:mm:ss");
  rhodesAmPmElement.innerHTML = rhodesTime.format("A");
}

updateWorldClocks();
setInterval(updateWorldClocks, 1000);
