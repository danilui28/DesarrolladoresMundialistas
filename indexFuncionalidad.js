function mostrarSeccion(nombreSeccion) {
  let secciones = document.querySelectorAll("section");

  for (let i = 0; i < secciones.length; i++) {
    secciones[i].classList.remove("activa");
  }

  let seccionMostrar = document.getElementById(nombreSeccion);
  seccionMostrar.classList.add("activa");
}