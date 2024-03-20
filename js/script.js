document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const navbar = document.getElementById("navbar-default");

  menuButton.addEventListener("click", function () {
    navbar.classList.toggle("hidden");
  });
});
