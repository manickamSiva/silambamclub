let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
const carousel = document.querySelector('.carousel');

document.querySelector('.next-btn').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
});

document.querySelector('.prev-btn').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

function updateCarousel() {
    const slideWidth = slides[0].clientWidth;
    carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
