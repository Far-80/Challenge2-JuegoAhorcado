function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

function palabraSecreta (){
    var palabras = ["DESAYUNO","GENIO","ESTADIO","LUNA","HOJA"];
    var cantidadPalabras = getRandomInt(0, palabras.length);
    return palabras[cantidadPalabras];
}

var iniciarJuego = document.querySelector("#btn-iniciar");
iniciarJuego.addEventListener("click", function (evt){
    evt.preventDefault();
    var palabraRandom = palabraSecreta();
    console.log(palabraRandom);

    
    pincel.clearRect(0,0,800,600);
    draw();
    drawGuiones(palabraRandom.length);
})