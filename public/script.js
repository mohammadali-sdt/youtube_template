const sidebar = document.querySelector(".sidebar");
const btnBurger = document.querySelector(".burger");
const btnClose = document.querySelector(".close");

btnBurger.addEventListener("click", function (e) {
  e.preventDefault();
  sidebar.style.left = 0;
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  sidebar.style.left = "-100%";
});
