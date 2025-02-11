function countryDateTime() {
  let romeCityDate = document.querySelector(".date");
  let romeTzTime = moment().tz("Europe/Rome");

  romeCityDate.innerHTML = romeTzTime.format("dddd, MMMM Do, YYYY");

  let romeCityActualTime = document.querySelector(".time");

  romeCityActualTime.innerHTML = romeTzTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let parisCityDate = document.querySelector("#par");
  let parisTzTime = moment().tz("Europe/Paris");

  parisCityDate.innerHTML = parisTzTime.format("dddd, MMMM Do, YYYY");

  let parisActualTime = document.querySelector("#pid");
  parisActualTime.innerHTML = parisTzTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

countryDateTime();
setInterval(countryDateTime, 1000);
