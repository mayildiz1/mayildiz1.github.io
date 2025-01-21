const dateWord = document.getElementById("date-coding");
const documentBody = document.querySelector("html");
const navMenu = document.querySelectorAll("a");
const footer = document.querySelector("footer");

const myDate = new Date("1998-09-01T18:00:00");
const today = new Date();
const nowHour = new Date().getHours();

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

  return `${years} years ${days} days ${hours} hours ${minutes} minutes and ${seconds} seconds`;
}

if (nowHour >= 19 && nowHour < 6) {
  documentBody.style.backgroundColor = "black";
  documentBody.style.color = "white";
  navMenu.forEach((element) => {
    element.style.color = "white";
  });
  footer.style.borderTop = "1px solid white";
}

dateWord.innerHTML = findPeriod();

document.addEventListener("DOMContentLoaded", findPeriod);
