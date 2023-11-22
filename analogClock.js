// Selecting all of the css classes which i want to manipulate

const hr = document.querySelector(".hand.hour-hand");
const min = document.querySelector(".hand.min-hand");
const sec = document.querySelector(".hand.second-hand");

// Setting up the loop wich changes to rotation of the clock hands when required

setInterval(() => {
  // Extracting the current time from DATE() function

  let day = new Date();
  let hour = day.getHours();
  let minutes = day.getMinutes();
  let seconds = day.getSeconds();

  //Formula for the rotation of hour, minute and second

  let hrrotation = 30 * hour + 0.5 * minutes;
  let minrotation = 6 * minutes;
  let secrotation = 6 * seconds;

  //manipulating the css. (We set a rotation for the clock hands)

  hr.style.transform = `translate(-50%,-100%) rotate(${hrrotation}deg)`;
  min.style.transform = `translate(-50%,-100%) rotate(${minrotation}deg)`;
  sec.style.transform = `translate(-50%,-85%) rotate(${secrotation}deg)`;
});
