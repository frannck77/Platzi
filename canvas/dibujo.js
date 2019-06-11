var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var linias = 30 ;
var l = 0;
var yi , xf;
while (l < linias) 
{ 
    yi = 10 * l;
    xf =10 * (l+1);
     DibujarLinia("blue" ,0 ,0 ,10 ,300);
l = l + 1;   
}
function DibujarLinia(color, xinicial ,yinicial ,xfinal ,yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle =color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
DibujarLinia("orange" ,200 ,200 ,150 ,150);
DibujarLinia("blue" ,0 ,0 ,10 ,300);
DibujarLinia("blue" ,0 ,10 ,20 ,300);
DibujarLinia("blue" ,0 ,20 ,30 ,300);