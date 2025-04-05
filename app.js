const nav=document.querySelector('#nav');const abrir=document.querySelector('#abrir');const cerrar=document.querySelector('#cerrar');document.querySelectorAll('a[href^="#"]').forEach(anchor=>{anchor.addEventListener('click',function(e){e.preventDefault();document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'})})});document.querySelectorAll('.dropdown-btn').forEach(btn=>{btn.addEventListener('click',()=>{const wrapper=btn.nextElementSibling;wrapper.classList.toggle('active')})});window.addEventListener('scroll',function(){const header=document.querySelector('header');if(window.scrollY>100){header.classList.add('sticky')}else{header.classList.remove('sticky')}});abrir.addEventListener('click',()=>{nav.classList.add('active')});cerrar.addEventListener('click',()=>{nav.classList.remove('active')});function adjustHeroOnMobileNav(){const navLinks=document.querySelector('.wrap_nav-ul');const heroContent=document.querySelector('.hero-content');const hero=document.querySelector('.hero');if(!navLinks||!heroContent||!hero){console.error("One or more elements not found: .wrap_nav-ul, .hero-content, or .hero");return}
const mediaQuery=window.matchMedia('(max-width: 768px)');function handleNavToggle(){if(mediaQuery.matches){if(navLinks.classList.contains('active')){hero.style.display='none'}else{hero.style.display='block'}}else{heroContent.style.marginLeft='0';heroContent.style.transition='none';hero.style.position='relative';hero.style.zIndex='0'}}
handleNavToggle();const abrirMenu=document.querySelector('.abrir-menu');if(abrirMenu){abrirMenu.addEventListener('click',()=>{handleNavToggle()})}
window.addEventListener('resize',()=>{handleNavToggle()});const observer=new MutationObserver(handleNavToggle);observer.observe(navLinks,{attributes:!0,attributeFilter:['class']})}
adjustHeroOnMobileNav();document.querySelectorAll('a[href^="#"]').forEach(anchor=>{anchor.addEventListener('click',function(e){e.preventDefault();document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'})})});const form=document.querySelector('.form');form.addEventListener('submit',(event)=>{let isValid=!0;const nameInput=form.querySelector('[name="nombre"]');const emailInput=form.querySelector('[name="email"]');const messageInput=form.querySelector('[name="mensaje"]');const asuntoInput=form.querySelector('[name="asunto"]');if(nameInput.value.trim()===''){isValid=!1;alert('Por favor, ingresa tu nombre.')}
if(asuntoInput.value.trim()===''){isValid=!1;alert('Por favor, ingresa el asunto.')}
if(emailInput.value.trim()===''){isValid=!1;alert('Por favor, ingresa tu correo electrónico.')}else if(!isValidEmail(emailInput.value)){isValid=!1;alert('Por favor, ingresa un correo electrónico válido.')}
if(messageInput.value.trim()===''){isValid=!1;alert('Por favor, ingresa un mensaje.')}
if(!isValid){event.preventDefault()}});function isValidEmail(email){const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return emailRegex.test(email)}
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{anchor.addEventListener('click',function(e){e.preventDefault();document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'})})});document.addEventListener('DOMContentLoaded',function(){const dropdownTriggers=document.querySelectorAll('.dropdown-trigger');dropdownTriggers.forEach(trigger=>{const dropdownContent=trigger.nextElementSibling;dropdownContent.style.display='none';trigger.addEventListener('click',function(){this.classList.toggle('active');const content=this.nextElementSibling;if(content.style.display==='none'||content.style.display===''){content.style.display='block'}else{content.style.display='none'}})})})
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch("enviar.php", {
    method: "POST",
    body: formData
  })
  .then(response => response.text())
  .then(result => {
    document.getElementById("modalText").innerText = result;
    document.getElementById("popupModal").style.display = "block";
    document.getElementById("contactForm").reset();
  })
  .catch(() => {
    document.getElementById("modalText").innerText = "Ocurrió un error al enviar el mensaje ❌";
    document.getElementById("popupModal").style.display = "block";
  });
});

document.querySelector(".close-btn").onclick = function() {
  document.getElementById("popupModal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("popupModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}