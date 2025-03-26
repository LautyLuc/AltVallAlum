const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');

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
    const hero = document.querySelector('.hero'); // Assuming you have a .hero container
  
    if (!navLinks || !heroContent || !hero) {
      console.error("One or more elements not found: .wrap_nav-ul, .hero-content, or .hero");
      return;
    }
  
    const mediaQuery = window.matchMedia('(max-width: 768px)');
  
    function handleNavToggle() {
      if (mediaQuery.matches) {
        if (navLinks.classList.contains('active')) {
          // Nav is open, reduce hero width
          hero.style.display = 'none';
        } else {
          // Nav is closed, restore hero width
          hero.style.display = 'block';
        }
      } else {
        // Reset styles for larger screens
        heroContent.style.marginLeft = '0';
        heroContent.style.transition = 'none';
        hero.style.position = 'relative';
        hero.style.zIndex = '0';
      }
    }
  
    // Initial check on load
    handleNavToggle();
  
    // Listen for nav toggle
    const abrirMenu = document.querySelector('.abrir-menu');
    if (abrirMenu) {
      abrirMenu.addEventListener('click', () => {
        handleNavToggle();
      });
    }
  
    // Listen for window resize
    window.addEventListener('resize', () => {
      handleNavToggle();
    });
  
    // Listen for the navLinks class change
    const observer = new MutationObserver(handleNavToggle);
    observer.observe(navLinks, { attributes: true, attributeFilter: ['class'] });
  }
  
  // Call the function to set up the behavior
  adjustHeroOnMobileNav();