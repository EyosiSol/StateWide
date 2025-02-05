document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const bottom = document.getElementById("bottom");

  menuToggle.addEventListener("click", () => {
    bottom.classList.toggle("show");    
  });
});
