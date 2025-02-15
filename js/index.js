function countryDateTime() {
  let romCt = document.querySelector("#rome");

  if (romCt) {
    let romeCityDate = document.querySelector(".date");
    let romeTzTime = moment().tz("Europe/Rome");

    romeCityDate.innerHTML = romeTzTime.format("dddd, MMMM Do, YYYY");

    let romeCityActualTime = document.querySelector(".time");

    romeCityActualTime.innerHTML = romeTzTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let parCt = document.querySelector("#canbera");
  if (parCt) {
    let austCityDate = document.querySelector("#aus");
    let austTzTime = moment().tz("Australia/Canberra");

    austCityDate.innerHTML = austTzTime.format("dddd, MMMM Do, YYYY");

    let austActualTime = document.querySelector("#aid");
    austActualTime.innerHTML = austTzTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function changeCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector(".allCities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

countryDateTime();
setInterval(countryDateTime, 1000);

let searchCity = document.querySelector("#ch-city");
searchCity.addEventListener("change", changeCity);
