let romeCityDate = document.querySelector(".date");
let romeTzTime = moment().tz("Europe/Rome");

romeCityDate.innerHTML = romeTzTime.format("dddd, MMMM Do, YYYY");

let romeCityActualTime = document.querySelector(".time");

romeCityActualTime.innerHTML = romeTzTime.format(
  "h:mm:ss [<small>]A[</small>]"
);
