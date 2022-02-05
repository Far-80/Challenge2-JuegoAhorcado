var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
pincel.fillStyle = "lightgrey";
pincel.fillRect (0,0,800,600);

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


  function drawGuiones(cantidadGuiones){
    var separacion = 350;
    pincel.clearRect(separacion,550,800,3);
    pincel.beginPath();
    pincel.moveTo(separacion,550);
    pincel.lineWidth = 3;
    for(i=0; i < cantidadGuiones; i++){
      pincel.lineTo(separacion + 40,550);
      pincel.stroke();
      separacion = separacion + 50;
      pincel.moveTo(separacion,550);
    }
  }