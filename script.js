const dateWord = document.getElementById("date-coding");
const documentBody = document.querySelector("html");
const navMenu = document.querySelectorAll("a");
const footer = document.querySelector("footer");
const darkButton = documentBody.querySelector("button");

// Date variables
const myDate = new Date("1998-09-01T18:00:00");
const today = new Date();
const nowHour = new Date().getHours();

console.log(nowHour);

//Auxilary vars
let isDark = true;

function findPeriod() {
  let dateDiff = today - myDate;
  const years = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
  dateDiff -= years * (1000 * 60 * 60 * 24 * 365);
  const days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  dateDiff -= days * (1000 * 60 * 60 * 24);
  const hours = Math.floor(dateDiff / (1000 * 60 * 60));
  dateDiff -= hours * (1000 * 60 * 60);
  const minutes = Math.floor(dateDiff / (1000 * 60));
  dateDiff -= minutes * (1000 * 60);
  const seconds = Math.floor(dateDiff / 1000);

  //   return `${years} years ${days} days ${hours} hours ${minutes} minutes and ${seconds} seconds`;
  return `${years} years ${days} days and ${hours} hours`;
}

function changeMode() {
  if (isDark) {
    documentBody.style.backgroundColor = "black";
    documentBody.style.color = "white";
    navMenu.forEach((element) => {
      element.style.color = "white";
    });
    footer.style.borderTop = "1px solid white";
    darkButton.style.color = "black";
    darkButton.style.backgroundColor = "white";
    darkButton.innerHTML = "Light Mode ☀️";
    isDark = false;
  } else {
    documentBody.style.backgroundColor = "white";
    documentBody.style.color = "black";
    navMenu.forEach((element) => {
      element.style.color = "black";
    });
    footer.style.borderTop = "1px solid black";
    darkButton.style.color = "white";
    darkButton.style.backgroundColor = "black";
    darkButton.innerHTML = "Dark Mode 🌕";
    isDark = true;
  }
}

if (nowHour > 6 && nowHour <= 18) {
  isDark = false;
  changeMode();
}

darkButton.addEventListener("click", changeMode);
dateWord.innerHTML = findPeriod();
