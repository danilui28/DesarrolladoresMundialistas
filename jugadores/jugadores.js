// =====================================================
// ARREGLO GLOBAL DEL ÁLBUM
// =====================================================

const cromosMundial = [];


// =====================================================
// FUNCIÓN CONSTRUCTORA / FÁBRICA DE JUGADORES
// =====================================================

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
// DATOS DEL ESTUDIANTE B
// GRUPO A Y GRUPO E
// =====================================================

// =====================================================
// JUGADOR 1
// =====================================================

cromosMundial.push(
    crearJugador(
        1, // id único del jugador

        "Enner Valencia", // nombre del jugador real

        "Ecuador", // país del Grupo A o Grupo E

        "Delantero", // ejemplo: Delantero, Mediocampista, Defensa, Arquero

        "imgJugadores/ennerValencia.png", // ruta de la imagen del jugador

        "../Grupo_E/img/ecuador.png", // ruta de la bandera del país

        "#fffb00", // color representativo del país en formato hexadecimal

        40, // goles del jugador

        84, // partidos jugados

        true, // true si es destacado, false si no

        "Máximo artillero de la selección ecuatoriana y único ecuatoriano con goles en tres Copas Mundiales distintas."
    )
);


// =====================================================
// JUGADOR 2
// =====================================================

cromosMundial.push(
    crearJugador(
        2,

        "Thomas Müller",

        "Alemania",

        "Mediapunta / Delantero",

        "imgJugadores/thomasMüller.png",

        "../Grupo_E/img/alemania.png",

        "#000000",

        44,

        126,

        true,

        "Solo Miroslav Klose ha marcado más goles mundialistas para Alemania; Müller suma 10 en tres ediciones."
    )
);


// =====================================================
// JUGADOR 3
// =====================================================

cromosMundial.push(
    crearJugador(
        3,

        "Hirving Lozano",

        "Mexico",

        "Extremo",

        "imgJugadores/hirvingLozano.png",

        "../Grupo_A/img/mexico.png",

        "#00ff00",

        20,

        73,

        true,

        "Anotó el gol con el que México venció por primera vez a Alemania en un Mundial (Rusia 2018)."
    )
);


// =====================================================
// JUGADOR 4
// =====================================================

cromosMundial.push(
    crearJugador(
        4,

        "Son Heung-min",

        "Corea del Sur",

        "Delantero",

        "imgJugadores/sonHeungMin.png",

        "../Grupo_A/img/corea_del_sur.png",

        "#ff0000",

        41,

        117,

        true,

        "Primer asiático en ganar la Bota de Oro de la Premier League (temporada 2021-22)."
    )
);


// =====================================================
// JUGADOR 5
// =====================================================

cromosMundial.push(
    crearJugador(
        5,

        "Christian Eriksen",

        "Dinamarca",

        "Mediocampista ofensivo",

        "imgJugadores/christianEriksen.png",

        "../Grupo_A/img/dinamarca.png",

        "#ff0000",

        40,

        130,

        true,

        "Regresó a la élite y al gol en la Euro 2024 tras sufrir un paro cardíaco en la Euro 2020, convirtiéndose en símbolo de resiliencia."
    )
);


// =====================================================
// JUGADOR 6
// =====================================================

cromosMundial.push(
    crearJugador(
        6,

        "Benni McCarthy",

        "Sudáfrica",

        "Delantero",

        "imgJugadores/benniMccarthy.png",

        "../Grupo_A/img/sudafrica.png",

        "#ffd000",

        31,

        80,

        true,

        "Único sudafricano que ha ganado la UEFA Champions League (con el Porto en 2004)."
    )
);

// =====================================================
// DATOS DEL ESTUDIANTE C
// GRUPO C Y GRUPO I
// =====================================================

// =====================================================
// JUGADOR 7
// =====================================================

cromosMundial.push(
    crearJugador(
        7, // id único del jugador

        "Zé Roberto", // nombre real del jugador

        "Brasil", // país del Grupo C o Grupo I

        "Mediocampista / lateral izquierdo", // ejemplo: Arquero, Defensa, Mediocampista, Delantero

        "imgJugadores/zéRoberto.png", // imagen del jugador guardada en la carpeta img

        "../Grupo_C/img/brasil.jpg", // imagen de la bandera guardada en la carpeta img

        "#fffb00", // color representativo del país en hexadecimal

        6, // cantidad de goles del jugador

        84, // cantidad de partidos jugados

        false, // true si es destacado, false si no es destacado

        "Con 42 años y 10 meses se convirtió en el goleador más veterano de la historia de la Copa Libertadores."
    )
);


// =====================================================
// JUGADOR 8
// =====================================================

cromosMundial.push(
    crearJugador(
        8,

        "James McFadden",

        "Escocia",

        "Delantero",

        "imgJugadores/jamesMcFadden.png",

        "../Grupo_C/img/escocia.png",

        "#001aff",

        15,

        48,

        false,

        "Su tiro de 30 m que dio el 1-0 a Escocia sobre Francia en París (2007) es considerado uno de los goles más memorables del país."
    )
);


// =====================================================
// JUGADOR 9
// =====================================================

cromosMundial.push(
    crearJugador(
        9,

        "Lilian Thuram",

        "Francia",

        "Defensa central / lateral derecho",

        "imgJugadores/lilianThuram.png",

        "../Grupo_I/img/francia.png",

        "#002fff",

        2,

        142,

        true,

        "Sus únicos dos goles con Les Bleus los marcó —de una sola vez— en la semifinal del Mundial 1998 ante Croacia, sellando el pase a la final."
    )
);


// =====================================================
// JUGADOR 10
// =====================================================

cromosMundial.push(
    crearJugador(
        10,

        "Younis Mahmoud",

        "Irak",

        "Delantero",

        "imgJugadores/younisMahmoud.png",

        "../Grupo_I/img/irak.png",

        "#66ff00",

        57,

        148,

        true,

        "Capitaneó a Irak y anotó el gol del título en la final de la Copa AFC 2007, siendo además máximo goleador y MVP del torneo."
    )
);


// =====================================================
// JUGADOR 11
// =====================================================

cromosMundial.push(
    crearJugador(
        11,

        "Papa Bouba Diop",

        "Senegal",

        "Mediocampista defensivo",

        "imgJugadores/papaBoubaDiop.png",

        "../Grupo_I/img/senegal.png",

        "#1eff00",

        11,

        63,

        true,

        "Anotó el gol que derrotó a la campeona Francia en el partido inaugural del Mundial 2002, debut absoluto de Senegal en la Copa."
    )
);


// =====================================================
// JUGADOR 12
// =====================================================

cromosMundial.push(
    crearJugador(
        12,

        "Achraf Hakimi",

        "Marruecos",

        "Lateral derecho",

        "imgJugadores/achrafHakimi.png",

        "../Grupo_C/img/marruecos.png",

        "#ff0000",

        12,

        99,

        true,

        "En 2025 fue 6.º en el Balón de Oro, la posición más alta jamás lograda por un futbolista marroquí."
    )
);

// =====================================================
// FUNCIÓN PARA RENDERIZAR EL ÁLBUM
// =====================================================

function renderizarAlbum(listaJugadores = cromosMundial) {

    const contenedorAlbum = document.getElementById("albumJugadores");
    const contadorAlbum = document.getElementById("contadorAlbum");

    if (contenedorAlbum === null) {
        console.log("No se encontró el contenedor albumJugadores.");
        return;
    }

    contenedorAlbum.innerHTML = "";

    if (contadorAlbum !== null) {
        contadorAlbum.textContent = "Cromos cargados: " + listaJugadores.length;
    }

    if (listaJugadores.length === 0) {
        contenedorAlbum.innerHTML = `
            <p class="mensaje-vacio">
                Todavía no hay cromos registrados.
            </p>
        `;
        return;
    }

    listaJugadores.forEach(function(jugador) {

        const tarjeta = document.createElement("article");

        tarjeta.classList.add("card-cromo");

        tarjeta.setAttribute("data-id", jugador.id);
        tarjeta.setAttribute("data-pais", jugador.pais);

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

renderizarAlbum();