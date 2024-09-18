
var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true, // Ensures a smooth fade effect between slides
    },
    speed: 2000
});



// navbar js 


const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');
const closeBtn = document.querySelector('.close-btn');
const navLinks = document.querySelectorAll('.nav-links'); // NodeList of nav links
const navItems = document.querySelectorAll('.nav-item'); // NodeList of nav items

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    menuToggle.style.display = "none";
});

closeBtn.addEventListener('click', () => {
    navList.classList.remove('active');
    menuToggle.style.display = "block";
});

// Add event listeners to each nav link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navList.classList.remove('active');

        menuToggle.style.display = "block";
    });
});

// Add event listeners to each nav item
navItems.forEach(item => {
    item.addEventListener("click", () => {
        navList.classList.remove('active');

        menuToggle.style.display = "block";
    });
});


// this is the code of our team carousel 


document.addEventListener('DOMContentLoaded', () => {
    // Select all necessary elements for the left carousel
    const prevBtnLeft = document.querySelector('.prev-btn-left');
    const nextBtnLeft = document.querySelector('.next-btn-left');
    const slidesWrapperLeft = document.querySelector('.team-carousel-left .slides-wrapper');
    const slidesLeft = document.querySelectorAll('.team-carousel-left .slide');
    let currentIndexLeft = 0;

    // Select all necessary elements for the right carousel
    const slidesWrapperRight = document.querySelector('.team-carousel-right .slides-wrapper');
    const slidesRight = document.querySelectorAll('.team-carousel-right .slide');
    let currentIndexRight = 0;

    // Update function for the left carousel
    function updateCarouselLeft() {
        const offset = -currentIndexLeft * 100;
        slidesWrapperLeft.style.transform = `translateX(${offset}%)`;
    }

    // Update function for the right carousel
    function updateCarouselRight() {
        const offset = -currentIndexRight * 100;
        slidesWrapperRight.style.transform = `translateX(${offset}%)`;
    }

    // Synchronize both carousels
    function synchronizeCarousels() {
        updateCarouselLeft();
        updateCarouselRight();
    }

    // Event listener for the previous button
    prevBtnLeft.addEventListener('click', () => {
        if (currentIndexLeft > 0) {
            currentIndexLeft--;
        } else {
            currentIndexLeft = slidesLeft.length - 1;
        }
        currentIndexRight = currentIndexLeft; // Synchronize right carousel index with left
        synchronizeCarousels();
    });

    // Event listener for the next button
    nextBtnLeft.addEventListener('click', () => {
        if (currentIndexLeft < slidesLeft.length - 1) {
            currentIndexLeft++;
        } else {
            currentIndexLeft = 0;
        }
        currentIndexRight = currentIndexLeft; // Synchronize right carousel index with left
        synchronizeCarousels();
    });

    // Initialize both carousels
    synchronizeCarousels();
});





// review swiper carousel 


var swiper = new Swiper(".mySwiper-review", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    speed: 1000
});


$(document).ready(function () {
    $('.tilt-crads').on('click', function () {
        $(this).addClass("tilt-up").siblings().removeClass("tilt-up")
    })
})






document.addEventListener('DOMContentLoaded', () => {
    const carouselItems = document.querySelectorAll('.our-story-carousel-item');
    const dotsContainer = document.getElementById('dots-container');
    const dotsContainer2 = document.getElementById('dots-container2');

    const prevArrow = document.querySelector('.our-story-prev-arrow');
    const nextArrow = document.querySelector('.our-story-next-arrow');

    let currentIndex = 0;
    const intervalTime = 4000; // Interval time in milliseconds (3 seconds)
    let autoSlideInterval;

    function createDots(container) {
        const itemCount = carouselItems.length;
        container.innerHTML = ''; // Clear existing dots
        for (let i = 0; i < itemCount; i++) {
            const dot = document.createElement('span');
            dot.className = 'our-story-dot';
            dot.dataset.index = i;
            container.appendChild(dot);
        }
    }

    function updateDots(container) {
        const dots = container.querySelectorAll('.our-story-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function updateCarousel() {
        carouselItems.forEach((item, index) => {
            item.classList.toggle('active', index === currentIndex);
        });
        updateDots(dotsContainer);
        updateDots(dotsContainer2);
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel();
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(showNext, intervalTime);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    nextArrow.addEventListener('click', () => {
        showNext();
        stopAutoSlide(); // Stop auto-slide on manual navigation
        startAutoSlide(); // Restart auto-slide
    });

    prevArrow.addEventListener('click', () => {
        showPrev();
        stopAutoSlide(); // Stop auto-slide on manual navigation
        startAutoSlide(); // Restart auto-slide
    });

    dotsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('our-story-dot')) {
            currentIndex = parseInt(e.target.dataset.index);
            updateCarousel();
            stopAutoSlide(); // Stop auto-slide on dot click
            startAutoSlide(); // Restart auto-slide
        }
    });

    dotsContainer2.addEventListener('click', (e) => {
        if (e.target.classList.contains('our-story-dot')) {
            currentIndex = parseInt(e.target.dataset.index);
            updateCarousel();
            stopAutoSlide(); // Stop auto-slide on dot click
            startAutoSlide(); // Restart auto-slide
        }
    });

    createDots(dotsContainer); // Create dots for first container
    createDots(dotsContainer2); // Create dots for second container
    updateCarousel();
    startAutoSlide(); // Start auto-slide
});
