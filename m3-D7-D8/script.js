const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("image-animation");
      }
    });
  });
  
  const row = document.querySelectorAll(".movie-cards");
  row.forEach((image) => {
    observer.observe(image);
  });