function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}

function closeMenu() {
  document.getElementById("menu").classList.remove("show");
}

// Dark mode
function toggleTheme() {
  const theme = document.documentElement.getAttribute("data-theme");
  if (theme === "dark") {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
}

if (localStorage.getItem("theme") === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
}

// Scroll animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".card").forEach(card => observer.observe(card));

// Print CV
function downloadPDF() {
  window.print();
}
