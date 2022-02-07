var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
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

function draw() {
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
      ctx.lineTo(150,100);      // linea vertical
      ctx.lineTo(300,100);      // linea horizontal
      ctx.lineTo(300,140);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.arc(300,170,30,0,Math.PI*2,true); // Cabeza
      ctx.stroke();

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
  }


  function drawGuiones(palabraSecreta){
    var separacion = 350;
    
    pincel.clearRect(0,0,1200,800);
    drawBase();
    pincel.beginPath();
    pincel.moveTo(separacion,550);
    pincel.lineWidth = 3;
    for(i=0; i < palabraSecreta.length; i++){
      pincel.lineTo(separacion + 40,550);
      pincel.stroke();
      separacion = separacion + 50;
      pincel.moveTo(separacion,550);
    }
  }

  function drawLetraCorrecta(palabraSecreta, letra){
    var separacion = 350;
    pincel.font = "30px Comic Sans MS";
    pincel.fillStyle = "green";

    for(i=0; i < palabraSecreta.length; i++){
      if (palabraSecreta[i] == letra){
          pincel.fillText(palabraSecreta[i],separacion + 10,530);
      }
      separacion = separacion + 50;
      pincel.moveTo(separacion,550);
    }
    pincel.stroke();
  }

  function drawLetraIncorrecta(arrayLetrasIncorrectas){
    var separacion = 450;
    pincel.font = "30px Comic Sans MS";
    pincel.fillStyle = "red";

    for(g=0; g < arrayLetrasIncorrectas.length; g++){
      pincel.fillText(arrayLetrasIncorrectas[g],separacion,400);
      separacion = separacion + 30;
      pincel.moveTo(separacion,400);
    }
    pincel.stroke();
  }

  drawBase();