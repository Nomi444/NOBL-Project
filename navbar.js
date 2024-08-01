document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.getElementById("navbar");
  let lastScrollDirection = '';

  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    getDirection: true, // Enable direction detection
  });

  scroll.on('scroll', (instance) => {
    const direction = instance.direction;

    // Toggle navbar visibility based on scroll direction
    if (window.innerWidth >= 992) { // Check for desktop
      if (direction === 'down' && lastScrollDirection !== 'down') {
        navbar.classList.add('hidden');
      } else if (direction === 'up' && lastScrollDirection !== 'up') {
        navbar.classList.remove('hidden');
      }
    }

    lastScrollDirection = direction;
  });
});
