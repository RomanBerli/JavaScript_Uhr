// Selecting all of the css classes which i want to manipulate

const hr = document.querySelector(".hand.hour-hand");
const min = document.querySelector(".hand.min-hand");
const sec = document.querySelector(".hand.second-hand");

let oldDate = 0;
let oldMonth = 0;
let oldYear = 0;
//Setting up a loop wich changes to rotation of the clock hands when required
//Settinh up a transformazion affect


setInterval(() => {
  // Extracting the current time from DATE() function

  let day = new Date();
  let hour = day.getHours();
  let minutes = day.getMinutes();
  let seconds = day.getSeconds();
  //For Date
  let date = day.getDate();
  let month = day.getMonth() + 1;
  let year = day.getFullYear();
  //Formula for the rotation of hour, minute and second

  let hrrotation = 30 * hour + 0.5 * minutes;
  let minrotation = 6 * minutes;
  let secrotation = 6 * seconds;

  //manipulating the css. (We set a rotation for the clock hands)

  hr.style.transform = `translate(-50%,-100%) rotate(${hrrotation}deg)`;
  min.style.transform = `translate(-50%,-100%) rotate(${minrotation}deg)`;
  sec.style.transform = `translate(-50%,-85%) rotate(${secrotation}deg)`;

  //Writing Date
  if (date != oldDate) {
    document.querySelector(".hand.second-hand").after(
      Object.assign(document.createElement("p"), {
        textContent: date,
        id: "date",
      })
    );

    document.querySelector(".hand.second-hand").after(
      Object.assign(document.createElement("p"), {
        textContent: date + "." + month + "." + year,
        id: "datePopUp",
      })
    );
    oldDate = date;
    oldMonth = month;
    oldYear = year;
  }
  /*Opens Pop Up if mouse hovers*/
  let datePopUper = document.querySelector("#datePopUp");
  document.addEventListener("mouseover", function (event) {
    if (event.target.id === "date") {
      datePopUper.style.display = "block";
    }
  });
  /*Closes Pop Up if mouse leavs*/
  document.addEventListener("mouseout", function (event) {
    if (event.target.id === "date") {
      datePopUper.style.display = "none";
    }
  });
});
