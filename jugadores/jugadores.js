// =====================================================
// ARREGLO GLOBAL DEL ÁLBUM
// =====================================================

// Este arreglo empieza vacío.
// Los estudiantes B y C van a agregar aquí los jugadores.
const cromosMundial = [];


// =====================================================
// FUNCIÓN CONSTRUCTORA / FÁBRICA DE JUGADORES
// =====================================================

// Esta función sirve para crear objetos de jugadores con la misma estructura.
// Así todos los compañeros agregan datos de forma ordenada.
function crearJugador(
    id,
    nombre,
    pais,
    posicion,
    urlImagen,
    urlBandera,
    colorFondoHex,
    goles,
    partidos,
    destacado,
    curiosidad
) {
    return {
        id: id,
        nombre: nombre,
        pais: pais,
        posicion: posicion,
        urlImagen: urlImagen,
        urlBandera: urlBandera,
        colorFondoHex: colorFondoHex,

        estadisticas: {
            goles: goles,
            partidos: partidos
        },

        destacado: destacado,
        curiosidad: curiosidad
    };
}


// =====================================================
// ZONA PARA AGREGAR DATOS
// =====================================================

// Ejemplo de cómo tus compañeros deberán agregar un jugador:
//
// cromosMundial.push(
//     crearJugador(
//         1,
//         "Nombre del jugador",
//         "País",
//         "Posición",
//         "img/jugador.png",
//         "img/bandera.png",
//         "#005BBB",
//         10,
//         25,
//         true,
//         "Curiosidad histórica del jugador."
//     )
// );


// =====================================================
// FUNCIÓN PARA RENDERIZAR EL ÁLBUM
// =====================================================

// Esta función recorre el arreglo cromosMundial y crea una tarjeta por cada jugador.
function renderizarAlbum(listaJugadores = cromosMundial) {

    const contenedorAlbum = document.getElementById("albumJugadores");
    const contadorAlbum = document.getElementById("contadorAlbum");

    // Validación básica para evitar errores si el id no existe en el HTML.
    if (contenedorAlbum === null) {
        console.log("No se encontró el contenedor albumJugadores.");
        return;
    }

    // Limpiamos el contenedor antes de volver a pintar tarjetas.
    contenedorAlbum.innerHTML = "";

    // Actualizamos el contador básico.
    if (contadorAlbum !== null) {
        contadorAlbum.textContent = "Cromos cargados: " + listaJugadores.length;
    }

    // Si todavía no hay jugadores, mostramos un mensaje.
    if (listaJugadores.length === 0) {
        contenedorAlbum.innerHTML = `
            <p class="mensaje-vacio">
                Todavía no hay cromos registrados. 
                Los estudiantes B y C deben agregar los jugadores al arreglo cromosMundial.
            </p>
        `;
        return;
    }

    // Recorremos el arreglo usando forEach, como pide el taller.
    listaJugadores.forEach(function(jugador) {

        const tarjeta = document.createElement("article");

        tarjeta.classList.add("card-cromo");

        // Dejamos datos útiles para futuros filtros o funciones.
        tarjeta.setAttribute("data-id", jugador.id);
        tarjeta.setAttribute("data-pais", jugador.pais);

        /*
            Esta línea queda preparada para el Estudiante D.
            Él puede activarla o mejorarla para aplicar fondos dinámicos.

            tarjeta.style.backgroundColor = jugador.colorFondoHex;
        */

        tarjeta.innerHTML = `
            <div class="cromo-imagen-contenedor">
                <img 
                    src="${jugador.urlImagen}" 
                    alt="Imagen de ${jugador.nombre}" 
                    class="cromo-imagen"
                >
            </div>

            <div class="cromo-info">
                <h3>${jugador.nombre}</h3>

                <p>
                    <strong>País:</strong> ${jugador.pais}
                </p>

                <p>
                    <strong>Posición:</strong> ${jugador.posicion}
                </p>

                <div class="cromo-bandera-contenedor">
                    <img 
                        src="${jugador.urlBandera}" 
                        alt="Bandera de ${jugador.pais}" 
                        class="cromo-bandera"
                    >
                </div>

                <p>
                    <strong>Goles:</strong> ${jugador.estadisticas.goles}
                </p>

                <p>
                    <strong>Partidos:</strong> ${jugador.estadisticas.partidos}
                </p>

                <p>
                    <strong>Destacado:</strong> ${jugador.destacado ? "Sí" : "No"}
                </p>

                <p class="cromo-curiosidad">
                    ${jugador.curiosidad}
                </p>
            </div>
        `;

        contenedorAlbum.appendChild(tarjeta);
    });
}


// =====================================================
// EJECUCIÓN INICIAL
// =====================================================

// Cuando el archivo carga, se renderiza el álbum.
// Al inicio aparecerá vacío porque cromosMundial no tiene datos todavía.
renderizarAlbum();