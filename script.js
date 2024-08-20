const config = {
  type: 'carousel',
  perView: 2.25,
  touchRatio: 0.5,
  breakpoints: {
    800: {
      perView: 1
    }
  }
};

new Glide('.glide', config).mount();

