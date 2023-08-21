let iconz = document.querySelector(".iconz");

iconz.addEventListener("click", togglethemechange);

let lsdarkmode = localStorage.getItem("lsdarkmode");
let darkmode = (lsdarkmode == "enabled")? true : false;  // can use normal way

function togglethemechange() {
  lsdarkmode = localStorage.getItem("lsdarkmode");
  if(lsdarkmode == "enabled") {
    darkmodeOff();
  } else {
    darkmodeOn();
  }
}

function darkmodeOn() {
  document.body.classList.add("dark");
  document.querySelector(".iconz .lightz").classList.remove("hidden");
  document.querySelector(".iconz .darkz").classList.add("hidden");
  darkmode = true; // can use normal way
  localStorage.setItem("lsdarkmode", "enabled");
}

function darkmodeOff() {
  document.body.classList.remove("dark");
  document.querySelector(".iconz .lightz").classList.add("hidden");
  document.querySelector(".iconz .darkz").classList.remove("hidden");
  darkmode = false; // can use normal way
  localStorage.setItem("lsdarkmode", "disabled");
}

(lsdarkmode == "enabled")? darkmodeOn() : darkmodeOff();