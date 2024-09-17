
const galleryImages = document.querySelectorAll('.gallery-grid img');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');
const lightboxClose = document.querySelector('.lightbox-close');

let currentIndex = 0;

galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentIndex = index;
        lightboxImage.src = image.src;
        lightbox.classList.add('active');
    });
});

lightboxPrev.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = galleryImages.length - 1;
    }
    lightboxImage.src = galleryImages[currentIndex].src;
});

lightboxNext.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
    }
    lightboxImage.src = galleryImages[currentIndex].src;
});

lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        lightboxNext.click();
    } else if (event.key === 'ArrowLeft') {
        lightboxPrev.click();
    }
});