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
  