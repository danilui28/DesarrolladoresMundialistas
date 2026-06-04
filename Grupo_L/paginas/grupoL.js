const curiosidades = [
    "Inglaterra ganó la Copa Mundial de 1966 jugando como local.",
    "Croacia llegó a la final del Mundial 2018 en Rusia.",
    "Ghana estuvo a un penal de convertirse en el primer semifinalista africano en 2010.",
    "Panamá anotó su primer gol mundialista frente a Inglaterra en Rusia 2018.",
    "Croacia tiene una población menor a muchos países, pero ha logrado grandes éxitos futbolísticos.",
    "Inglaterra fue uno de los países fundadores del fútbol moderno.",
    "Ghana ha ganado varias Copas Africanas de Naciones.",
    "Panamá logró su primera clasificación mundialista en 2018."
];

function mostrarCuriosidad() {

    const numeroAleatorio = Math.floor(
        Math.random() * curiosidades.length
    );

    document.getElementById("datoCurioso").textContent =
        curiosidades[numeroAleatorio];
}