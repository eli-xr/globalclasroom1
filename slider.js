
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.image-slider');
  const images = document.querySelectorAll('.image-slider img');
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');

  let currentIndex = 0;

  function updateSlider() {
    const imageWidth = images[0].clientWidth;
    const visibleCount = Math.floor(slider.parentElement.clientWidth / imageWidth);
    const maxIndex = images.length - visibleCount;

    // Clamp currentIndex within bounds
    currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));

    const offset = -currentIndex * imageWidth;
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(${offset}px)`;
  }

  leftArrow.addEventListener('click', () => {
    currentIndex--;
    updateSlider();
  });

  rightArrow.addEventListener('click', () => {
    currentIndex++;
    updateSlider();
  });

  window.addEventListener('resize', updateSlider);
  updateSlider(); // initialize on load
});