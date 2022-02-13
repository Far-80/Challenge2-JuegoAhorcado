var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

pincel.lineWidth = 3;
//pincel.fillStyle = "lightgrey";
//pincel.fillRect (0,0,1200,800);

function drawBase(){
  pincel.fillStyle = "lightgrey";
  pincel.fillRect (0,0,1200,800);

  pincel.beginPath();
  pincel.moveTo(150,400);
  pincel.lineWidth = 3;
  pincel.lineTo(100,450);
  pincel.lineTo(200,450);
  pincel.closePath();          // base 
  pincel.stroke();
}
/*
function drawFinJuego() {
    var canvas = document.querySelector('canvas');
    if (canvas.getContext){
      var ctx = canvas.getContext('2d');
  
      //dibujo de la horca
      ctx.beginPath();
      ctx.moveTo(150,400);
      ctx.lineWidth = 3;
      ctx.lineTo(100,450);
      ctx.lineTo(200,450);
      ctx.closePath();          // base 
      ctx.lineTo(150,100);      // linea columna
      ctx.lineTo(300,100);      // linea horizontal
      ctx.lineTo(300,140);      //soga
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(300,170,30,0,Math.PI*2,true); // Cabeza
      //ctx.stroke();

      //ctx.beginPath();
      ctx.moveTo(300,200);
      ctx.lineTo(300,320);      //torso
      ctx.lineTo(250,400);      // pierna izq
      ctx.moveTo(300,320);
      ctx.lineTo(350,400);      //pierna der
      ctx.moveTo(300,260);
      ctx.lineTo(230,190);      //brazo izq
      ctx.moveTo(300,260);
      ctx.lineTo(370,190);      //brazo der
      ctx.stroke();
    }
  }*/

  function drawColumna() {
    pincel.moveTo(150,400);
    pincel.lineTo(150,100);      // linea columna
    pincel.stroke();
  }

  function drawSoga() {
    pincel.moveTo(150,100);
    pincel.lineTo(300,100);      // linea horizontal
    pincel.lineTo(300,140);      //soga
    pincel.stroke();
  }

  function drawCabeza(){
    pincel.beginPath();
    pincel.arc(300,170,30,0,Math.PI*2,true); // Cabeza
    pincel.stroke();
  }

  function drawTorso () {
    pincel.moveTo(300,200);
    pincel.lineTo(300,320);      //torso
    pincel.stroke();
  }

  function drawPiernaIzq (){
    pincel.moveTo(300,320);      
    pincel.lineTo(250,400);      // pierna izq  
    pincel.stroke();
  }

  function drawPiernaDer (){
    pincel.moveTo(300,320);      
    pincel.lineTo(350,400);      // pierna der  
    pincel.stroke();
  }

  function drawBrazoIzq (){      
    pincel.moveTo(300,260);
    pincel.lineTo(230,190);      //brazo izq
    pincel.stroke();
  }

  function drawBrazoDer (){      
    pincel.moveTo(300,260);
    pincel.lineTo(370,190);      //brazo izq
    pincel.stroke();
  }

  function drawGuiones(palabraSecreta){
    var separacion = 450;
    
    pincel.clearRect(0,0,1200,800);
    drawBase();
    pincel.beginPath();
    pincel.moveTo(separacion,400);
    pincel.lineWidth = 3;
    for(i=0; i < palabraSecreta.length; i++){
      pincel.lineTo(separacion + 40,400);
      pincel.stroke();
      separacion = separacion + 50;
      pincel.moveTo(separacion,400);
    }
  }

  function drawLetraCorrecta(palabraSecreta, letra){
    var separacion = 450;
    pincel.font = "30px Comic Sans MS";
    pincel.fillStyle = "green";

    for(i=0; i < palabraSecreta.length; i++){
      if (palabraSecreta[i] == letra){
          pincel.fillText(palabraSecreta[i],separacion + 10,390);
      }
      separacion = separacion + 50;
      pincel.moveTo(separacion,400);
    }
    pincel.stroke();
  }

  function drawLetraIncorrecta(arrayLetrasIncorrectas){
    var separacion = 550;
    pincel.font = "25px Comic Sans MS";
    pincel.fillStyle = "red";

    for(g=0; g < arrayLetrasIncorrectas.length; g++){
      pincel.fillText(arrayLetrasIncorrectas[g],separacion,300);
      separacion = separacion + 30;
      pincel.moveTo(separacion,300);
    }
    pincel.stroke();
    
    if (arrayLetrasIncorrectas.length == 1){
      drawColumna();
    }
    if (arrayLetrasIncorrectas.length == 2){
      drawSoga();
    }
    if (arrayLetrasIncorrectas.length == 3){
      drawCabeza();
    }
    if (arrayLetrasIncorrectas.length == 4){
      drawTorso();
    }
    if (arrayLetrasIncorrectas.length == 5){
      drawPiernaDer();
    }
    if (arrayLetrasIncorrectas.length == 6){
      drawPiernaIzq();
    }
    if (arrayLetrasIncorrectas.length == 7){
      drawBrazoDer();
    }
    if (arrayLetrasIncorrectas.length == 8){
      drawBrazoIzq();
    }
  }

  function drawFinJuego(texto){

    pincel.font = "40px Comic Sans MS";
    if(texto == "Fin del Juego!"){
      pincel.fillStyle ="red";
    }else{
      pincel.fillStyle = "green";
    }
    pincel.fillText(texto,520,150);
    pincel.stroke();
  }

  drawBase();