
const steps = document.querySelectorAll(".step");
const nextBtns = document.querySelectorAll(".next-btn");
const backBtns = document.querySelectorAll(".back-btn");
const summary = document.getElementById("summary");

let currentStep = 0;

// Display the current step
function showStep(index) {
    steps.forEach((step, i) => {
        step.style.display = i === index ? "block" : "none";
    });
}

// Validate the current step
function validateStep() {
    const input = steps[currentStep].querySelector("input");

    if (!input.checkValidity()) {
        input.reportValidity();
        return false;
    }

    if (input.type === "text" && input.value.trim() === "") {
        input.setCustomValidity("Please enter your name.");
        input.reportValidity();
        input.setCustomValidity("");
        return false;
    }

    return true;
}

// Next button
nextBtns.forEach((button) => {
    button.addEventListener("click", () => {
        if (!validateStep()) return;

        currentStep++;

        if (currentStep < steps.length) {
            showStep(currentStep);
        } else {
            showSummary();
        }
    });
});

// Back button
backBtns.forEach((button) => {
    button.addEventListener("click", () => {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    });
});

// Show final summary
function showSummary() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    summary.innerHTML = `
        <h2>Form Completed!</h2>
        <p><strong>Name:</strong> ${escapeHTML(name)}</p>
        <p><strong>Email:</strong> ${escapeHTML(email)}</p>
        <p><strong>Password:</strong> ${"*".repeat(password.length)}</p>
    `;

    summary.style.display = "block";

    steps.forEach((step) => {
        step.style.display = "none";
    });

    document.getElementById("navigation").style.display = "none";
}

// Escape user input before displaying it
function escapeHTML(value) {
    return value.replace(/[&<>"']/g, (char) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

// Initial display
showStep(currentStep);
