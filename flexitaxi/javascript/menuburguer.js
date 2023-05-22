const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  nav.classList.toggle('open');
});
const botonVolverMenu = document.getElementById('volver-menu');

botonVolverMenu.addEventListener('click', function() {
  window.location.href = 'menu.html';
});
var tipoRecogidaSelect = document.getElementById("tipo_recogida");
var infoRecogidaInput = document.getElementById("info_recogida");
var tipoEntregaSelect = document.getElementById("tipo_entrega");
var infoEntregaInput = document.getElementById("info_entrega");

tipoRecogidaSelect.addEventListener("change", function() {
  if (tipoRecogidaSelect.value === "torre") {
    infoRecogidaInput.style.display = "block";
  } else {
    infoRecogidaInput.style.display = "none";
  }
});

tipoEntregaSelect.addEventListener("change", function() {
  if (tipoEntregaSelect.value === "torre") {
    infoEntregaInput.style.display = "block";
  } else {
    infoEntregaInput.style.display = "none";
  }
});
