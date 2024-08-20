document.addEventListener("DOMContentLoaded", function() {
    const texts = document.querySelectorAll('.text-focus-in');
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Stop observing once it's animated
        }
      });
    }, { threshold: 0.1 }); // Adjust threshold if needed

    texts.forEach(text => {
      observer.observe(text);
    });
  });