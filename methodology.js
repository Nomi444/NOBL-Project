document.addEventListener("DOMContentLoaded", function () {
    // Options for the Intersection Observer
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.1 // Adjust this based on when you want the effect to trigger
    };
  
    // Callback function to execute when elements intersect
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    };
  
    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(handleIntersection, options);
  
    // Select the "Methodology" column
    const methodologyColumn = document.querySelector('.animate-up');
  
    // Observe the "Methodology" column
    observer.observe(methodologyColumn);
  });
  