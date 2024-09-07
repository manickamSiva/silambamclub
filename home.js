// JavaScript for slider functionality
const track = document.querySelector('.quote-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next-btn');
const prevButton = document.querySelector('.prev-btn');

let currentSlideIndex = 0;

// Function to update slide position
const updateSlidePosition = () => {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`;
};

// Function to move to the next slide
const moveToNextSlide = () => {
    if (currentSlideIndex < slides.length - 1) {
        currentSlideIndex++;
    } else {
        currentSlideIndex = 0; // Loop back to the first slide
    }
    updateSlidePosition();
};

// Function to move to the previous slide
const moveToPrevSlide = () => {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
    } else {
        currentSlideIndex = slides.length - 1; // Loop to the last slide
    }
    updateSlidePosition();
};

// Event listeners for the buttons
nextButton.addEventListener('click', moveToNextSlide);
prevButton.addEventListener('click', moveToPrevSlide);

// Auto-slide functionality
const autoSlide = setInterval(moveToNextSlide, 5000); // Change slide every 5 seconds

// Pause auto-slide when the mouse is over the slider
track.addEventListener('mouseover', () => clearInterval(autoSlide));

// Restart auto-slide when the mouse leaves the slider
track.addEventListener('mouseleave', () => setInterval(moveToNextSlide, 5000));

// Update slide position on window resize to ensure the correct width
window.addEventListener('resize', updateSlidePosition);

// Ensure slides are correctly positioned initially
updateSlidePosition();
