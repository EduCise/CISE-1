let currentSlide = 1;
const totalSlides = 15;

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  const counters = document.querySelectorAll(
    '.slide-counter span[id^="slideNumber"]'
  );

  if (n > totalSlides) {
    currentSlide = totalSlides;
  }
  if (n < 1) {
    currentSlide = 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  slides[currentSlide - 1].classList.add("active");

  counters.forEach((counter) => {
    counter.textContent = currentSlide;
  });

  updateButtons();
}

function changeSlide(direction) {
  currentSlide += direction;
  showSlide(currentSlide);
}

function updateButtons() {
  const prevButtons = document.querySelectorAll('[id^="prevBtn"]');
  const nextButtons = document.querySelectorAll('[id^="nextBtn"]');

  prevButtons.forEach((btn) => {
    btn.disabled = currentSlide === 1;
  });

  nextButtons.forEach((btn) => {
    btn.disabled = currentSlide === totalSlides;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  showSlide(currentSlide);
});
