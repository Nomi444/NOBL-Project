const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
});

scroll.on('scroll', (args) => {
    const currentScroll = args.scroll.y;
    const startScroll = 5160;
    const endScroll = 6240;

    // The element that we want to animate
    const targetElement = document.querySelector('.animate-up');
    // The maximum translation up (negative value) that we want to allow
    const maxTranslateY = 0; // 0 ensures it does not go beyond the top border

    if (currentScroll >= startScroll && currentScroll <= endScroll) {
      // Calculate the amount to translate
      let translateY = (currentScroll - startScroll) * -0.5;

      // Ensure the content does not go above the top border
      if (translateY < maxTranslateY) {
        translateY = maxTranslateY;
      }

      // Apply the transform
      targetElement.style.transform = `translateY(${translateY}px)`;
    } else if (currentScroll < startScroll) {
      // Reset the transform when above the startScroll
      targetElement.style.transform = 'translateY(0)';
    }
  });