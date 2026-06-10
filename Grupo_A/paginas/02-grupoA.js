function mostrarSeccion(idSeccion) {
    let secciones = document.querySelectorAll("section");

    for (let i = 0; i < secciones.length; i++) {
        secciones[i].classList.remove("activa");
    }

    let seccionMostrar = document.getElementById(idSeccion);
    seccionMostrar.classList.add("activa");
}