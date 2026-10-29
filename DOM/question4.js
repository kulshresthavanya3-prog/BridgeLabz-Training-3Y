
const lightBtn = document.getElementById("lightBtn");
const darkBtn = document.getElementById("darkBtn");
const blueBtn = document.getElementById("blueBtn");

function setTheme(theme) {
    // Apply the theme class using setAttribute()
    document.body.setAttribute("class", theme + "-theme");

    // Save the current theme in a custom attribute
    document.body.setAttribute("data-theme", theme);
}

// Light theme
lightBtn.addEventListener("click", () => {
    setTheme("light");
});

// Dark theme
darkBtn.addEventListener("click", () => {
    setTheme("dark");
});

// Blue theme
blueBtn.addEventListener("click", () => {
    setTheme("blue");
});

// Set default theme
setTheme("light");
