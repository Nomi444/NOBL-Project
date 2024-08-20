
  // Capabilities hover event
  document.querySelectorAll('.nav-set')[0].addEventListener('mouseenter', function() {
    var offcanvasElement = document.getElementById('offcanvasTop-1');
    var bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);
    bsOffcanvas.show();
  });

  // Methodology hover event
  document.querySelectorAll('.nav-set')[1].addEventListener('mouseenter', function() {
    var offcanvasElement = document.getElementById('offcanvasTop-2');
    var bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);
    bsOffcanvas.show();
  });

  // Close offcanvas on mouse leave
  document.querySelectorAll('.offcanvas').forEach(function(offcanvas) {
    offcanvas.addEventListener('mouseleave', function() {
      var bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
      bsOffcanvas.hide();
    });
  });

