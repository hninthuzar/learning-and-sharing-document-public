// ScrollReveal().reveal('header');
window.sr = ScrollReveal();

sr.reveal('.header', {
  duration: 500,
  origin: 'bottom',
  delay: 300,
  reset: true
});
sr.reveal('.webdesign .left', {
  duration: 700,
  origin: 'left',
  distance: '150px',
  viewFactor: 0.2,
  reset: true
});
sr.reveal('.webdesign .right', {
  duration: 700,
  origin: 'right',
  distance: '150px',
  viewFactor: 0.2,
  reset: true
});

sr.reveal('.servicez .left', {
  duration: 700,
  origin: 'left',
  distance: '150px',
  delay: 500,
  reset: true
});

sr.reveal('.servicez .right', {
  duration: 700,
  origin: 'right',
  distance: '150px',
  delay: 500,
  reset: true
});

sr.reveal('.dev-left', {
  duration: 700,
  origin: 'left',
  distance: '150px',
  delay: 500,
  reset: true
});
sr.reveal('.dev-center', {
  duration: 700,
  origin: 'bottom',
  distance: '150px',
  delay: 500,
  reset: true
});
sr.reveal('.dev-right', {
  duration: 700,
  origin: 'right',
  distance: '150px',
  delay: 500,
  reset: true
});

sr.reveal('footer', {
  duration: 700,
  origin: 'bottom',
  distance: '150px',
  delay: 500,
  reset: true
});

// when scroll, header sticky
window.addEventListener("scroll", function () {
  var currentScrollPos = window.pageYOffset;
  if(document.querySelector(".header") != null) {
    if (currentScrollPos > 70) {
      document.querySelector(".header").classList.add("fixedz");
    } else {
      document.querySelector(".header").classList.remove("fixedz");
    }
  }
});

//active class add dynamic
let navbaritem = document.querySelectorAll("#navbarNavDropdown .nav-item");
if(navbaritem) {
  navbaritem.forEach(item => {
    item.addEventListener('click', function() {
      this.classList.add('active');
      $(this).siblings().removeClass('active');
    });
  });
}

document.querySelector(".notice button").addEventListener('click', function() {
  this.parentElement.style.display = "none";
});