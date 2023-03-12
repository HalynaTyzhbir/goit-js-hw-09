const buttonStartEl = document.querySelector("button[data-start]");
const buttonStopEl = document.querySelector("button[data-stop]");
const bodyEl = document.querySelector("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

buttonStopEl.setAttribute("disabled", "");
let timerId = null;

buttonStartEl.addEventListener("click", () => {
    timerId = setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor();
    }, 1000);
    buttonStartEl.setAttribute("disabled", "");
        if (buttonStartEl.hasAttribute("disabled", "")) {
            buttonStopEl.removeAttribute("disabled", "");  
        };
    });

buttonStopEl.addEventListener("click", () => {
    buttonStartEl.removeAttribute("disabled", "");
    clearInterval(timerId);
        if (!buttonStartEl.hasAttribute("disabled", "")) {
            buttonStopEl.setAttribute("disabled", "");
        };
});



