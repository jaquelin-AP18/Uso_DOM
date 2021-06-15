/*
var parrafos = document.getElementsByClassName('parrafo');
console.log(parrafos)

//Se coloca el nombre de la clase al que queremos acceder
document.getElementsByClassName('parrafo')[0].innerHTML= 'Soy un texto por clase' ; 
//Se accede al elemento por medio del ID
document.getElementById('parrafo2').innerHTML='Soy un parrafo por ID';

//Este ciclo nos sirve para intercalar el contenido que deseamos cambios
var i;
for(i=0;i<parrafos.length;i++)
{
    if(i%2==0)
    {
        parrafos[i].innerHTML="Cambio";
    }
}

*/


//Selecciona elementos de la clase (queryselector, primer elemento, query selectorall())
document.querySelectorAll('.parrafo') [1].textContent='Nuevo texto de parrafo QuerySelectorAll';
document.querySelector('#parrafo3').textContent= 'Nuevo texto de parrafo QuerySelector';

var parrafo1 = document.querySelectorAll('.parraf4')[3];
var parrafo2 = document.querySelector('#parrafo5');

console.log(document);
console.log(document.head);
console.log(document.body);
console.log(parrafo1);
console.log(parrafo2);
