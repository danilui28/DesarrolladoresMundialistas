function ocultarSecciones() {
    document.getElementById("portugal").classList.remove("activa");
    document.getElementById("colombia").classList.remove("activa");
    document.getElementById("congo").classList.remove("activa");
    document.getElementById("uzbekistan").classList.remove("activa");
}

function mostrarSeccion(id) {
    ocultarSecciones();

    document.getElementById(id).classList.add("activa");
}