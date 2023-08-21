const box = document.querySelector(".box");

const months = [
                "January",
                "Febuary",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
              ];
const days = [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Tursday",
              "Friday",
              "Saturday"
            ];

function run() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let dd = date.getDate();
  let month = date.getMonth();
  let yy = date.getFullYear();
  let week = date.getDay();

  if(hh > 12) hh -= 12;
  if(hh < 10) hh = "0" + hh;
  if(mm < 10) mm = "0" + ss;

  let timez = `${hh} : ${mm} : ${ss}`;
  let datez = `${days[week]}, ${dd}, ${months[month]}, ${yy}`;
  box.innerHTML = `${timez} <br><br> ${datez} `;
}
let handlez = setInterval(run, 1000);

function stopz() {
  clearInterval(handlez);
  handlez = 0;
}