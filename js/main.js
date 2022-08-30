var ElOpenBtn = document.querySelector(".burger");
var siteNavbar = document.querySelector(".site-nav");


ElOpenBtn.addEventListener("click", function () {
  siteNavbar.classList.toggle("shownav");
  ElOpenBtn.classList.toggle("close-burger");
});


