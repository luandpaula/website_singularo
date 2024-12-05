// Removed search-box open close js code since the search button is replaced with the contact button

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
  navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
  navLinks.style.left = "-100%";
}

// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
  navLinks.classList.toggle("show2");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
  navLinks.classList.toggle("show3");
}
let aboutArrow = document.querySelector(".about-arrow");
aboutArrow.onclick = function() {
  navLinks.classList.toggle("show4");
}
let suportArrow = document.querySelector(".suport-arrow");
suportArrow.onclick = function() {
  navLinks.classList.toggle("show5");
}

// Navbar alterando cor
document.addEventListener('scroll', () => {
  const header = document.querySelector('nav');

  if (window.scrollY > 0) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }
})

// Text Animation - Home Page
var typed = new Typed(".typing", {
  strings: ["Website Incluso", "Automação de Processos", "Inteligência Artificial"],
  typeSpeed: 70,
  backSpeed: 30,
  loop: true
});

var typed = new Typed(".typing-2", {
  strings: ["Análise de Dados", "Computação Em Núvem", "Segurança de Rede"],
  typeSpeed: 70,
  backSpeed: 30,
  loop: true
});



