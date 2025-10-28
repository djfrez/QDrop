// Navegação, ano no rodapé e interações simples
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Menu mobile
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    if (menu.style.display === 'flex') menu.style.flexDirection = 'column';
  });
}

// Rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (!id || id === '#') return;
    const el = document.querySelector(id);
    if (el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Newsletter (simples)
const form = document.getElementById('newsletter-form');
if (form){
  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('newsletter-email').value.trim();
    if (!email) return;
    alert('Obrigado! Em breve você receberá dicas exclusivas da QDrop.');
    form.reset();
  });
}
