document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', function () {
      const icon = this.querySelector('i');
  
      if (this.classList.contains('collapsed')) {
        icon.classList.replace('fa-minus', 'fa-plus');
      } else {
        icon.classList.replace('fa-plus', 'fa-minus');
      }
    });
  });