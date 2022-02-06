function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

function palabraSecreta (){
    var palabras = ["DESAYUNO","GENIO","ESTADIO","LUNA","HOJA"];
    var cantidadPalabras = getRandomInt(0, palabras.length);
    return palabras[cantidadPalabras];
}

var botonInicioPresionado = false;
var arrayLetras = [];

document.addEventListener('keydown', function(event){
    var keyName = event.key;
    var repetido = false;

    keyName = keyName.toUpperCase();
    console.log(keyName);

    if (validarCaracter(keyName)){
        if (arrayLetras[0] == ""){
            arrayLetras.push(keyName);
        }else{
            for (i=0; i < arrayLetras.length; i++){
                if (keyName == arrayLetras[i]){
                    repetido = true;
                }
            }
            if (!repetido){
                arrayLetras.push(keyName);
            }
        }
        console.log(arrayLetras);
    }
        
});



function validarCaracter(caracter){
    var valido = false;
    const patron = new RegExp("[A-Z]");
    if (caracter.length == 1 && botonInicioPresionado && patron.test(caracter)){
        valido = true;
    }
    return valido;
}

var iniciarJuego = document.querySelector("#btn-iniciar");
iniciarJuego.addEventListener("click", function (evt){
    evt.preventDefault();
    var palabraRandom = palabraSecreta();
    console.log(palabraRandom);

    drawGuiones(palabraRandom.length);
    botonInicioPresionado = true;
})