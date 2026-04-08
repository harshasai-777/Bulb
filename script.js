const toggleBtn = document.getElementById("toggleBtn");
const bulbIcon = document.getElementById("bulbIcon");
const pullChain = document.getElementById("pullChain");

toggleBtn.addEventListener("click", () => {
    pullChain.classList.remove("pulling");
    void pullChain.offsetWidth;
    pullChain.classList.add("pulling");

    const isLightMode = document.body.classList.toggle("light-mode");

    if (isLightMode) {
        bulbIcon.classList.remove("ri-lightbulb-line");
        bulbIcon.classList.add("ri-lightbulb-flash-fill");
        toggleBtn.textContent = "Off";
    } else {
        bulbIcon.classList.remove("ri-lightbulb-flash-fill");
        bulbIcon.classList.add("ri-lightbulb-line");
        toggleBtn.textContent = "On";
    }
});

pullChain.addEventListener("animationend", () => {
    pullChain.classList.remove("pulling");
});
