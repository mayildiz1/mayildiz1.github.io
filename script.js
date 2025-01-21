const dateWord = document.getElementById("date-coding");
const myDate = new Date("1998-09-01T18:00:00");
const today = new Date();

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

dateWord.innerHTML = findPeriod();

document.addEventListener("DOMContentLoaded", findPeriod);
