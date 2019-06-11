var imagenes = [];
imagenes["cauchin"] = "vaca.png";
imagenes["pocacho"] = "pollo.png";
imagenes["tocinauro"] = "cerdo.png";

var coleccion = [];
coleccion.push(new pakiman("cauchin", 100, 30) );
coleccion.push(new pakiman("pocacho", 80, 50) );
coleccion.push(new pakiman("tocinauro", 120 , 40) );

//caso donde sirve el indice usar "in" , caso donde sirve el objeto usar "of" ("in" para mostrar en document y "of" para mostrar en consola//
for(var pakin of coleccion)
{
pakin.mostrar();
}