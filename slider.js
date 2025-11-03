
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.image-slider');
  const images = document.querySelectorAll('.image-slider img');
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');

  let currentIndex = 0;

  function updateSlider() {
    const imageWidth = images[0].clientWidth;
    const offset = -currentIndex * imageWidth;
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(${offset}px)`;
  }

  leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
  });

  rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
  });

  window.addEventListener('resize', updateSlider);
});