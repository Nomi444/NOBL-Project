document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.image-rotation-container');
  
  function rotateImages() {
    containers.forEach(container => {
      const images = container.querySelectorAll('img');
      let currentIndex = 0;

      function showNextImage() {
        images.forEach((img, index) => {
          img.classList.remove('active');
          if (index === currentIndex) {
            img.classList.add('active');
          }
        });
        currentIndex = (currentIndex + 1) % images.length;
      }

      showNextImage(); // Initial call to show the first image
      setInterval(showNextImage, 3000); // Adjust the time interval as needed
    });
  }

  rotateImages();
});
