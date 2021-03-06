const time = document.querySelector(".time");
const add = document.querySelector("#add-alarm");
const submit = document.querySelector(".submit");

//*EventListeners
add.addEventListener("click", addElements);

//*Functions

function setTime() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let amPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let theTime = `${hours} : ${minutes} : ${seconds} ${amPm}`;
  time.innerHTML = theTime;
  alarmTime();
}

setInterval(setTime, 1000);

function addElements() {
  const alarmsContainer = document.querySelector(".alarms-container");
  const createInput = document.createElement("input");
  const createAlarmDiv = document.createElement("div");

  const appendAlarm = alarmsContainer.appendChild(createAlarmDiv);
  appendAlarm.classList.add("alarm");

  appendAlarm.appendChild(createInput).classList.add("event-name");
  appendAlarm.appendChild(createInput).setAttribute("type", "text");

  const timeContainer = appendAlarm.appendChild(document.createElement("div"));
  timeContainer.classList.add("alarm-time-container");

  let hoursFrom = 1;
  let hoursTo = 2;
  const alarmTime = timeContainer.appendChild(document.createElement("span"));
  alarmTime.classList.add("alarm-time");
  alarmTime.innerText = `${hoursFrom} AM - ${hoursTo} AM`;
  const arrowsContainer = timeContainer.appendChild(
    document.createElement("div")
  );
  arrowsContainer.classList.add("arrow");
  const arrowUp = arrowsContainer.appendChild(document.createElement("i"));
  arrowUp.classList.add("fas", "fa-angle-up");
  const arrowDown = arrowsContainer.appendChild(document.createElement("i"));
  arrowDown.classList.add("fas", "fa-angle-down");

  setTheAlarm();
  makeAlarm();
  alarmTime();
}

function setTheAlarm() {
  const arrowsUpTo = document.querySelectorAll(".fa-angle-up");
  const arrowsDownTo = document.querySelectorAll(".fa-angle-down");

  arrowsUpTo.forEach((arrow, index) => {
    hoursFrom = 1;
    hoursTo = 2;
    arrow.addEventListener("click", () => {
      const time = document.querySelectorAll(
        ".alarm-time-container .alarm-time"
      );
      hoursFrom = hoursFrom + 1;
      hoursTo = hoursTo + 1;
      hoursTo = hoursTo > 24 ? 1 : hoursTo;
      hoursFrom = hoursFrom > 24 ? 1 : hoursFrom;
      let amPmFrom = hoursFrom >= 12 ? "PM" : "AM";
      let amPmTo = hoursTo >= 12 ? "PM" : "AM";
      let absHoursFrom = hoursFrom;
      let absHoursTo = hoursTo;
      absHoursFrom = absHoursFrom % 12;
      absHoursTo = absHoursTo % 12;
      absHoursFrom = absHoursFrom ? absHoursFrom : 12;
      absHoursTo = absHoursTo ? absHoursTo : 12;

      setATime = `${absHoursFrom + amPmFrom} - ${absHoursTo + amPmTo}`;

      time[index].innerText = "";
      time[index].innerText = setATime;
    });
  });
  arrowsDownTo.forEach((arrow, index) => {
    hoursFrom = 1;
    hoursTo = 2;
    arrow.addEventListener("click", (e) => {
      const time = document.querySelectorAll(
        ".alarm-time-container .alarm-time"
      );
      hoursFrom = Math.abs(hoursFrom - 1);
      hoursTo = Math.abs(hoursTo - 1);
      hoursTo = hoursTo < 1 ? 24 : hoursTo;
      hoursFrom = hoursFrom < 1 ? 24 : hoursFrom;
      let amPmFrom = hoursFrom >= 12 ? "PM" : "AM";
      let amPmTo = hoursTo >= 12 ? "PM" : "AM";
      let absHoursFrom = hoursFrom;
      let absHoursTo = hoursTo;
      absHoursFrom = absHoursFrom % 12;
      absHoursTo = absHoursTo % 12;
      absHoursFrom = absHoursFrom ? absHoursFrom : 12;
      absHoursTo = absHoursTo ? absHoursTo : 12;

      setATime = `${Math.abs(absHoursFrom) + amPmFrom} - ${
        Math.abs(absHoursTo) + amPmTo
      }`;

      time[index].innerText = "";
      time[index].innerText = setATime;
    });
  });
}

function makeAlarm() {
  submit.addEventListener("click", () => {
    const eventNames = document.querySelectorAll(".event-name")
    eventNames.forEach((eventName) => {
      eventName.setAttribute("readonly", true);
    });
  });
}

function alarmTime() {
  if (hours == absHoursFrom && amPmFrom == amPm) {
    const alarmSound = document.querySelector(".alarm-sound audio");
    setInterval(() => {
      alarmSound.play();
    },1000)
  }
}
