// ===========================
// THEME TOGGLE ELEMENT
// ===========================
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// ===========================
// LOAD SAVED THEME
// ===========================
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    body.classList.add("dark");
    themeToggle.textContent = "☀️ Light Mode";
} else {
    themeToggle.textContent = "🌙 Dark Mode";
}

// ===========================
// TOGGLE THEME ON CLICK
// ===========================
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️ Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙 Dark Mode";
    }
});

// ===========================
// SIMPLE PAGE ANIMATION ON LOAD
// ===========================
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});