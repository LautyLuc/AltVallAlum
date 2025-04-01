const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 100) { 
      header.classList.add('sticky');
  } else {
      header.classList.remove('sticky');
  }
});

abrir.addEventListener('click', () => {
    nav.classList.add('active');
});

cerrar.addEventListener('click', () => {
    nav.classList.remove('active');
});

//menu hamburguesa

function adjustHeroOnMobileNav() {
    const navLinks = document.querySelector('.wrap_nav-ul');
    const heroContent = document.querySelector('.hero-content');
    const hero = document.querySelector('.hero'); 
  
    if (!navLinks || !heroContent || !hero) {
      console.error("One or more elements not found: .wrap_nav-ul, .hero-content, or .hero");
      return;
    }
  
    const mediaQuery = window.matchMedia('(max-width: 768px)');
  
    function handleNavToggle() {
      if (mediaQuery.matches) {
        if (navLinks.classList.contains('active')) {
          hero.style.display = 'none';
        } else {
          hero.style.display = 'block';
        }
      } else {
        heroContent.style.marginLeft = '0';
        heroContent.style.transition = 'none';
        hero.style.position = 'relative';
        hero.style.zIndex = '0';
      }
    }

    handleNavToggle();
  
    const abrirMenu = document.querySelector('.abrir-menu');
    if (abrirMenu) {
      abrirMenu.addEventListener('click', () => {
        handleNavToggle();
      });
    }
  
    window.addEventListener('resize', () => {
      handleNavToggle();
    });
  
    const observer = new MutationObserver(handleNavToggle);
    observer.observe(navLinks, { attributes: true, attributeFilter: ['class'] });
  }
  
  adjustHeroOnMobileNav();


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// app.js

const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
    let isValid = true;

    const nameInput = form.querySelector('[name="nombre"]');
    const emailInput = form.querySelector('[name="email"]');
    const messageInput = form.querySelector('[name="mensaje"]');
    const asuntoInput = form.querySelector('[name="asunto"]');


    if (nameInput.value.trim() === '') {
        isValid = false;
        alert('Por favor, ingresa tu nombre.');
    }

    if (asuntoInput.value.trim() === '') {
        isValid = false;
        alert('Por favor, ingresa el asunto.');
    }


    if (emailInput.value.trim() === '') {
        isValid = false;
        alert('Por favor, ingresa tu correo electrónico.');
    } else if (!isValidEmail(emailInput.value)) {
        isValid = false;
        alert('Por favor, ingresa un correo electrónico válido.');
    }

    if (messageInput.value.trim() === '') {
        isValid = false;
        alert('Por favor, ingresa un mensaje.');
    }

    if (!isValid) {
        event.preventDefault(); 
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
    e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
                  behavior: 'smooth'
      });
    });
});
