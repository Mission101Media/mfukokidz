const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const slider = document.querySelector("[data-slider]");

if (slider) {
  const slides = Array.from(slider.querySelectorAll("[data-slide]"));
  const controls = Array.from(slider.querySelectorAll("[data-direction]"));
  const dotsWrap = document.querySelector("[data-dots]");
  let activeIndex = 0;
  let intervalId;

  const dots = slides.map((_, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("aria-label", `Show video ${index + 1}`);
    button.addEventListener("click", () => {
      showSlide(index);
      restartAutoPlay();
    });
    dotsWrap.appendChild(button);
    return button;
  });

  function showSlide(index) {
    activeIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-hidden", slideIndex !== activeIndex);
    });

    dots.forEach((dot, dotIndex) => {
      dot.setAttribute("aria-current", String(dotIndex === activeIndex));
    });
  }

  function nextSlide(direction) {
    showSlide(activeIndex + direction);
  }

  function restartAutoPlay() {
    window.clearInterval(intervalId);
    intervalId = window.setInterval(() => nextSlide(1), 6500);
  }

  controls.forEach((control) => {
    control.addEventListener("click", () => {
      nextSlide(Number(control.dataset.direction));
      restartAutoPlay();
    });
  });

  showSlide(0);
  restartAutoPlay();
}
