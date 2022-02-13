function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

function listaPalabras (basePalabras){
    var cantidadPalabras = getRandomInt(0, basePalabras.length);
    return basePalabras[cantidadPalabras];
}

var basePalabras = ["DESAYUNO","GENIO","ESTADIO","LUNA","HOJA","ELEFANTE"];
var botonInicioPresionado = false;
var palabraRandom;
var arrayLetrasCorrectas = [];
var arrayLetrasIncorrectas =[];
var finalJuego;

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

function finJuego (cantidadIntentos){
    var fin = false;
    if (cantidadIntentos == 8){
        fin = true;
    }
    return fin;
}

function ganador (palabraRandom, aciertos){
    var fin = false;

    if (aciertos.length != 0){
        fin = true;
        for (i=0; i < palabraRandom.length; i++){
            if (fin){
                for(j=0; j<aciertos.length; j++){
                    if (palabraRandom[i] == aciertos[j]){
                        fin = true;
                        break;
                    }else{
                        fin = false;
                    }
                }
            }else{
                break;
            }
        }
    }
    return fin;
}

function validarCaracter(caracter){
    var valido = false;
    const patron = new RegExp("[A-ZÑ]");
    if (caracter.length == 1 && botonInicioPresionado && patron.test(caracter)){
        valido = true;
    }
    return valido;
}

function validarTexto (texto){
    const patron = new RegExp("[A-ZÑ]$");
    const espacio = /\s/;
    var valido = false;
    if (patron.test(texto) && !espacio.test(texto)){
        valido = true;
    }
    return valido;
}



document.addEventListener('keydown', function(event){
    var keyName = event.key;
    keyName = keyName.toUpperCase();

    if (!finalJuego){
        if (validarCaracter(keyName)){
            const buscar = new RegExp(keyName);
            if (buscar.test(palabraRandom)){
                agregarLetra(arrayLetrasCorrectas,keyName)
            }else{
                agregarLetra(arrayLetrasIncorrectas,keyName)
            }
        }

        for (j=0; j < arrayLetrasCorrectas.length; j++){
            drawLetraCorrecta(palabraRandom,arrayLetrasCorrectas[j]);
        }

        drawLetraIncorrecta(arrayLetrasIncorrectas);

        if (finJuego (arrayLetrasIncorrectas.length)){
            drawFinJuego("Fin del Juego!");
            document.getElementById("input-text").style.display = "block";
            finalJuego = true;
        }

        if (ganador(palabraRandom,arrayLetrasCorrectas) && 
            !finalJuego){
                drawFinJuego("Ganaste, felicidades");
                document.getElementById("input-text").style.display = "block";
                finalJuego = true;
            }
    }
        
});

document.addEventListener("DOMContentLoaded", function () { 
    document.getElementById("input-text").style.display = "block";
 });

var iniciarJuego = document.querySelector("#btn-iniciar");
iniciarJuego.addEventListener("click", function (evt){
    evt.preventDefault();
    
    arrayLetrasCorrectas = [];
    arrayLetrasIncorrectas =[];
    finalJuego = false;

    document.getElementById("input-text").style.display = "none";
    palabraRandom = listaPalabras(basePalabras);
    console.log(palabraRandom);

    drawGuiones(palabraRandom);
    botonInicioPresionado = true;
    
    console.log(basePalabras);
});

//cada vez que se refresca la pagina se carga en la base de palabras la ultima ingresada
// por el usuario
(()=>{
    if (localStorage.getItem("palabraNueva"+ basePalabras.length) != null){
        for(i=0; i < localStorage.length; i++){
            basePalabras.push(localStorage.getItem("palabraNueva"+basePalabras.length));
        }
    }
})();

var btnAgregar = document.querySelector("#btn-agregar");
btnAgregar.addEventListener("click", function(evt){
    evt.preventDefault();
    var palabraRepetida = false;
    botonInicioPresionado = false;
    var agregarPalabra = document.querySelector("#agregar-palabra");
    var palabraNueva = agregarPalabra.value.toUpperCase();
    
    if (validarTexto(palabraNueva)){
        for(j=0; j < basePalabras.length; j++){
            if (basePalabras[j] == palabraNueva){
                palabraRepetida = true;
                break;
            }
        };
        for(i=0; i < localStorage.length; i++){
            if (localStorage.getItem("palabraNueva"+basePalabras.length) == palabraNueva){
                palabraRepetida = true;
                break;
            }
        };

        if (!palabraRepetida){
            localStorage.setItem("palabraNueva" + basePalabras.length,palabraNueva);
            basePalabras.push(palabraNueva);
        };
    };
    
    agregarPalabra.value = "";
})