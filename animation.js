document.addEventListener("DOMContentLoaded", function() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
  });

  scroll.on('scroll', (args) => {
    const currentScroll = args.scroll.y;
    const startScroll = 5160; // Adjust as needed
    const endScroll = 6240; // Adjust as needed

    const targetElement = document.querySelector('.animate-up');
    const maxTranslateY = 0;

    if (currentScroll >= startScroll && currentScroll <= endScroll) {
      let translateY = (currentScroll - startScroll) * -0.5;
      if (translateY < maxTranslateY) {
        translateY = maxTranslateY;
      }
      targetElement.style.transform = `translateY(${translateY}px)`;
    } else if (currentScroll < startScroll) {
      targetElement.style.transform = 'translateY(0)';
    }
  });
});
