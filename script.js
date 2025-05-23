const observer = new IntersectionObserver(entradas => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visivel'); 
      observer.unobserve(entrada.target);
    }
  });
});

const elementos = document.querySelectorAll('.animation'); 

elementos.forEach(el => 
  observer.observe(el));  