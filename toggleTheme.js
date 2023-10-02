// To switch the document color and icon
const moon = document.getElementById("moon");
// select the document
const doc = document.getElementById("doc");

// Event listener
document.getElementById("toggle").addEventListener("click", function () {
  // To get the current theme of the document and
  const currentTheme = doc.getAttribute("data-bs-theme");
  const currentIcon = moon.getAttribute("class");
  // if theme is dark then it toggles it to light, else dark
  doc.setAttribute("data-bs-theme", currentTheme == "dark" ? "light" : "dark");
  moon.setAttribute(
    "class",
    currentIcon == "bi bi-moon-stars-fill"
      ? "bi bi-brightness-high"
      : "bi bi-moon-stars-fill"
  );
});
