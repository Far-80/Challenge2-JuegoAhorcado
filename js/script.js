function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

function palabraSecreta (){
    var palabras = ["DESAYUNO","GENIO","ESTADIO","LUNA","HOJA","ELEFANTE"];
    var cantidadPalabras = getRandomInt(0, palabras.length);
    return palabras[cantidadPalabras];
}

var botonInicioPresionado = false;
var palabraRandom;
var arrayLetrasCorrectas = [];
var arrayLetrasIncorrectas =[];

function agregarLetra (arrayLetras, keyName){
    var repetido = false;

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
    return arrayLetras;
};

document.addEventListener('keydown', function(event){
    var keyName = event.key;

    keyName = keyName.toUpperCase();
    const buscar = new RegExp(keyName);

    if (validarCaracter(keyName)){
        if (buscar.test(palabraRandom)){
            agregarLetra(arrayLetrasCorrectas,keyName)
        }else{
            agregarLetra(arrayLetrasIncorrectas,keyName)
        }
    }
    console.log(arrayLetrasCorrectas);
    console.log(arrayLetrasIncorrectas);
    for (j=0; j < arrayLetrasCorrectas.length; j++){
        drawLetraCorrecta(palabraRandom,arrayLetrasCorrectas[j]);
    }

    //for (g=0; g < arrayLetrasIncorrectas.length; g++){
        drawLetraIncorrecta(arrayLetrasIncorrectas);
    //}
        
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
    
    arrayLetrasCorrectas = [];
    arrayLetrasIncorrectas =[];
    palabraRandom = palabraSecreta();
    console.log(palabraRandom);

    drawGuiones(palabraRandom);
    botonInicioPresionado = true;
})