//
let nums = document.querySelectorAll(".about .container .box span");
let section = document.querySelector(".about");
let started = false;
//
const allSlides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const arrowNext = document.getElementById("next");
const arrowPrev = document.getElementById("prev");
//
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
// step one current slide
let currentSlide = 0;
// step two
function showSlide(index) {
  // step three
  allSlides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
  });
  // step four
  allSlides[index].classList.add("active");
  dots[index].classList.add("active");
}
// step five
function nextSlide() {
  currentSlide++;
  if (currentSlide > allSlides.length - 1) {
    currentSlide = 0;
  }
  // step six
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
