const burger = document.querySelector(".burger");
console.log(burger);
const mobileHeader = document.querySelector(".mobile-header");
console.log(mobileHeader);

const mobNav = document.querySelector(".mob-nav");
console.log(mobNav);

const mobileNav = document.querySelector(".mobile-nav");
console.log(mobileNav);

burger.addEventListener("click", function () {
  mobNav.classList.toggle("active");
  burger.classList.toggle("active");
});
