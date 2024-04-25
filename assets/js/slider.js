let slideIndex = 0;
let slides;

// Function to initialize the slider
function initializeSlider() {
  slides = document.querySelectorAll('.carousel-slide img');
  showSlide(slideIndex);
}

// Function to show the current slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block'; // Show the current slide
    } else {
      slide.style.display = 'none'; // Hide other slides
    }
  });
}

// Function to move to the next slide
function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

// Function to move to the previous slide
function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
}

// Wait for all images to load before initializing the slider
window.addEventListener('load', initializeSlider);

// Set interval to move to next slide automatically
setInterval(nextSlide, 2000);
