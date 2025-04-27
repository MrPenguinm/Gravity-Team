//counter About section
let nums = document.querySelectorAll(".about .container .box span");
let section = document.querySelector(".about");
let started = false;
// slider testimonials section
const allSlides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const arrowNext = document.getElementById("next");
const arrowPrev = document.getElementById("prev");
// Navbar
const menuOpen = document.querySelector(".nav-bar .container .menu");
const navOpen = document.querySelector(".nav-bar .container .mobile");
menuOpen.addEventListener("click", () => {
  menuOpen.classList.toggle("active");
  navOpen.classList.toggle("active");
});
//counter About section start
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 10 / goal);
}
// ====================================================
// slider testimonials section
let currentSlide = 0;
function showSlide(index) {
  allSlides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
  });
  allSlides[index].classList.add("active");
  dots[index].classList.add("active");
}
function nextSlide() {
  currentSlide++;
  if (currentSlide > allSlides.length - 1) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}
function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = allSlides.length - 1;
  }
  showSlide(currentSlide);
}
arrowNext.addEventListener("click", nextSlide);
arrowPrev.addEventListener("click", prevSlide);
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentSlide = i;
    showSlide(currentSlide);
  });
});
// ====================================================
