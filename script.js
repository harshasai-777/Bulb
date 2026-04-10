const button = document.getElementById("toggleBtn");
const bulbIcon = document.getElementById("bulbIcon");

let isOn = false;

button.addEventListener("click", function () {
    isOn = !isOn;

    if (isOn) {
        document.body.classList.add("light-mode");
        bulbIcon.classList.remove("ri-lightbulb-line");
        bulbIcon.classList.add("ri-lightbulb-flash-fill");
        button.textContent = "Turn Off";
    } else {
        document.body.classList.remove("light-mode");
        bulbIcon.classList.remove("ri-lightbulb-flash-fill");
        bulbIcon.classList.add("ri-lightbulb-line");
        button.textContent = "Turn On";
    }
});
