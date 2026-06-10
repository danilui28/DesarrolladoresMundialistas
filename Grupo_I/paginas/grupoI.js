function mostrarSeccion(id) {
    let secciones = document.querySelectorAll(".pais");
    secciones.forEach(seccion => {
        seccion.style.display = "none";
    });
    document.getElementById(id).style.display = "block";
}

window.onload = function() {
    mostrarSeccion("francia");
}