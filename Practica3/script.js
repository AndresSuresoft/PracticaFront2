const toggleBtn = document.getElementById("toggle-btn");
const navBar = document.getElementById("navbar");

toggleBtn.addEventListener("click", () => {
  navBar.classList.toggle("collapsed");
});