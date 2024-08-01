document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('#image-container img');
    let currentIndex = 0;
  
    function showNextImage() {
      images[currentIndex].classList.remove('d-block');
      images[currentIndex].classList.add('d-none');
  
      currentIndex = (currentIndex + 1) % images.length;
  
      images[currentIndex].classList.remove('d-none');
      images[currentIndex].classList.add('d-block');
    }
  
    images[currentIndex].classList.add('d-block');
    setInterval(showNextImage, 2000);
  });