// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const dayX = document.querySelector("#datetime-picker");
const btnEl = document.querySelector("button[data-start]");
const daysEl = document.querySelector(".value[data-days]");
const hoursEl = document.querySelector(".value[data-hours]");
const minutesEl = document.querySelector(".value[data-minutes]");
const secondsEl = document.querySelector(".value[data-seconds]");
btnEl.setAttribute("disabled", "");

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < new Date()) {
            btnEl.setAttribute("disabled", "");
            window.alert("Please choose a date in the future");
        } else {
            btnEl.removeAttribute("disabled", "");
        }
    },
};

const fp = flatpickr(dayX, options);

btnEl.addEventListener("click", onClick);
let timerId = null;

function onClick() {
    timerId = setInterval(() => {
        const timeToWait = new Date(dayX.value) - new Date();
        if (timeToWait > 0) {
        const result = convertMs(timeToWait);
        daysEl.textContent = addLeadingZero(result.days);
        hoursEl.textContent = addLeadingZero(result.hours);
        minutesEl.textContent = addLeadingZero(result.minutes);
            secondsEl.textContent = addLeadingZero(result.seconds);
            daysEl.style.color = "red";
            hoursEl.style.color = "red";
            minutesEl.style.color = "red";
            secondsEl.style.color = "red";
        } else {
            clearInterval(timerId);
            daysEl.style.color = "black";
            hoursEl.style.color = "black";
            minutesEl.style.color = "black";
            secondsEl.style.color = "black";
        }
    }, 1000);
};

function addLeadingZero(value) {
    return  String(value).padStart(2, "0"); 
};

function convertMs(ms) {
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const days = Math.floor(ms / day);
const hours = Math.floor((ms % day) / hour);
const minutes = Math.floor(((ms % day) % hour) / minute);
const seconds = Math.floor((((ms % day) % hour) % minute) / second);

return { days, hours, minutes, seconds };
}

