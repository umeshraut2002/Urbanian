// hero section slider 

// JavaScript for Auto-Sliding Multiple Slides with Text Animation
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideContents = document.querySelectorAll('.slide-content');
const totalSlides = slides.length;

function showSlide(index) {
  const sliderContainer = document.querySelector('.slider-container');
  currentSlide = index;

  // Move the slider container to show the correct slide
  sliderContainer.style.transform = `translateX(-${index * 100}vw)`;

  // Remove active class from all slide contents to reset animation
  slideContents.forEach(content => content.classList.remove('active'));

  // Add active class to current slide content to trigger animation
  slideContents[index].classList.add('active');
}

// Auto-slide every 4 seconds
function autoSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;  // Loop back to the first slide after the last
  showSlide(currentSlide);
}

// Initialize the first slide and start the auto-slide
document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);  // Show the initial slide
  setInterval(autoSlide, 4000);  // Auto-slide every 4 seconds
});
