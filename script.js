document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Função para mostrar ou ocultar o botão "Voltar ao topo"
function toggleBackToTopButton() {
    const backToTopButton = document.getElementById("back-to-top");
    if (window.scrollY > 100) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  }
  
  // Adicionar evento de rolagem para exibir ou ocultar o botão "Voltar ao topo"
  window.addEventListener("scroll", toggleBackToTopButton);
  
  // Função para rolagem suave ao topo
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  
  // Adicionar evento de clique no botão "Voltar ao topo"
  document.getElementById("back-to-top").addEventListener("click", scrollToTop);