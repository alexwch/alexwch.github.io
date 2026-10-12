const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

// Dark mode toggle — preference persists in localStorage,
// falls back to the OS prefers-color-scheme setting.
const themeToggle = document.querySelector(".theme-toggle");

if (themeToggle) {
  const currentTheme = () => document.documentElement.getAttribute("data-theme");

  const syncToggle = () => {
    const dark = currentTheme() === "dark";
    themeToggle.setAttribute("aria-pressed", String(dark));
    themeToggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  };

  syncToggle();

  themeToggle.addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    syncToggle();
  });
}
