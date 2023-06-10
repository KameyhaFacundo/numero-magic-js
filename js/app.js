let numeroMagico;
let btnComenzar = document.querySelector("#btnComenzar");
let empezar = document.querySelector("#empezar");

function comenzarJuego() {
  numeroMagico = Math.floor(Math.random() * (10 - 1) + 1);
  console.log(numeroMagico);

  btnComenzar.innerHTML = "El juego comenzo";
  btnComenzar.disabled = true;

  empezar.className = " ";

  let formPlay = document.querySelector("formJuego");
  formPlay.reset();
}

function consultarNumero(a) {
  a.preventDefault(); // Evitar para q se vaya a otra pagina
  let numeroIngresado = document.querySelector("#numeroIngresado").value;
  let ganador = document.querySelector("#ganador");

  if (numeroIngresado == numeroMagico) {
    empezar.className = "d-none";
    ganador.className = "alert alert-primary m-2";
    ganador.innerHTML = "Felicidades, has ganado";
  } else if (numeroIngresado > numeroMagico) {
    ganador.className = "alert alert-info";
    ganador.innerHTML = "Casi, el numero magico es menor al ingresado";
  } else {
    ganador.className = "alert alert-info";
    ganador.innerHTML = "Casi, el numero magico es mayor al ingresado";
  }
}
