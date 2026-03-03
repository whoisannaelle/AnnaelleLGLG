document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.gallery-image');
  
    galleryImages.forEach((image, index) => {
      image.style.opacity = 0;
      image.style.transition = `opacity 0.5s ease, transform 0.5s ease`;
      image.style.transitionDelay = `${index * 0.1}s`;
    });
  
    window.addEventListener('scroll', () => {
      const galleryTop = document.querySelector('.project-gallery').offsetTop;
      const scrollY = window.scrollY + window.innerHeight;
  
      if (scrollY > galleryTop) {
        galleryImages.forEach(image => {
          image.style.opacity = 1;
          image.style.transform = 'scale(1)';
        });
      }
    });
  });

  let burger = document.querySelector('.burger');
  let closeburger = document.querySelector('.close-burger');
  let menu = document.querySelector('.menu');

  function toggleMenu() {
    if (burger) burger.classList.toggle('active');
    if (closeburger) closeburger.classList.toggle('active');
    if (menu) menu.classList.toggle('active');
    document.body.classList.toggle('menu-active');
  }

  [burger, closeburger].forEach(el => {
    if (el) {
      el.addEventListener('click', toggleMenu);
    }
  });
  