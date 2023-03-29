const header = document.querySelector('header');
const a = document.querySelector('a');
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });