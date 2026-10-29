const textArea = document.getElementById("textArea");
const counter = document.getElementById("counter");
const resetBtn = document.getElementById("resetBtn");

const maxChars = 100;

// Update character counter
function updateCounter() {
    const remaining = maxChars - textArea.value.length;

    counter.textContent = `Remaining characters: ${remaining}`;

    // Reset counter color
    counter.style.color = "green";

    // Yellow warning at 20 characters left
    if (remaining <= 20 && remaining > 0) {
        counter.style.color = "yellow";
    }

    // Red when no characters remain
    if (remaining === 0) {
        counter.style.color = "red";
    }
}

// Prevent typing beyond 100 characters
textArea.addEventListener("keydown", (event) => {
    if (
        textArea.value.length >= maxChars &&
        event.key.length === 1 &&
        !event.ctrlKey &&
        !event.metaKey &&
        !event.altKey
    ) {
        event.preventDefault();
    }
});

// Update counter while typing or pasting
textArea.addEventListener("input", updateCounter);

// Reset everything
resetBtn.addEventListener("click", () => {
    textArea.value = "";
    updateCounter();
});

// Initialize counter
updateCounter();
