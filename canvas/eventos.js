//no esta terminado//

var teclas = 
{
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT:39
};
document.addEventListener("keyup", dibujarTeclado);
var cuadro = document.getElementById("areadedibujo");

var papel = cuadro.getContext("2d");

function DibujarLinia(color, xinicial ,yinicial ,xfinal ,yfinal, lienzo , )
{
    lienzo.beginPath();
    lienzo.strokeStyle =color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
function dibujarTeclado(evento) 
{  
    var colorcito = "blue";  
switch(evento.keyCode)
{
    case teclas.DOWN:
    DibujarLinia (colorcito x, y, )
    break;
    case teclas.UP:
    console.log ("arriba")
    break;
    case teclas.LEFT:
    console.log ("arre xD")
    break;
    case teclas.RIGHT:
    console.log ("tu hermana0")
    break;
}
}