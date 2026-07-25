// ===== Header con sombra al hacer scroll =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ===== Menú móvil =====
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
  menuToggle.classList.toggle('active');
});

// Cerrar menú al hacer click en un link (móvil)
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.classList.remove('active');
  });
});

// ===== Formulario de agendamiento -> WhatsApp =====
const WHATSAPP_NUMBER = '573103489995';

const agendaForm = document.getElementById('agendaForm');

agendaForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const servicio = document.getElementById('servicio').value;
  const fecha = document.getElementById('fecha').value;
  const mensaje = document.getElementById('mensaje').value.trim();

  let texto = `Hola, quiero agendar una cita en Carolina Torres Fisioderma.\n\n`;
  texto += `*Nombre:* ${nombre}\n`;
  texto += `*Teléfono:* ${telefono}\n`;
  texto += `*Servicio:* ${servicio}\n`;
  if (fecha) texto += `*Fecha preferida:* ${fecha}\n`;
  if (mensaje) texto += `*Mensaje:* ${mensaje}\n`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
  window.open(url, '_blank');
});