    //El objeto window es la ventana, onload es el evento y se utiliza cuando se carga el script en la parte del head, asi forzamos a que funcione, se carga dentro de la funcion lo que queremos que ejecute
    /*
    window.onload=function(){

    }  */
          //Para obtener los datos de mi documento html
let nameInput=document.querySelector('#nameInput');

/** 1- Se hace referencia al elemento
 * 2-se agrega addEventListener 
 * 3-Agregamos el tipo de evento
 * 4-Se agrega una funcion anonima*/
nameInput.addEventListener('change',function()
{
    //Es para mostrar el valor que tiene nuestro input
console.log((nameInput.value));
})

/** 1- Se hace referencia al elemento
 * 2-se agrega addEventListener 
 * 3-Agregamos el tipo de evento
 * 4-Se agrega una funcion anonima*/

/*
nameInput.addEventListener('keydown',function(event)
{
     //Es para mostrar el valor que tiene nuestro input por medio del event
console.log(event.target.value);
})
*/

/**
 * Declaramos nuestra variable de tipo button
 * Agregamos nuestro querySelector para seleccionar nuestro button
 * agregamos el addEventListener para agregar un evento
 * Agregamos el tipo de eento (click)
 *Agregamos una funcion de flecha
 * Dentro de la funcion declaramos otra variable para obtener el valor y posterior colocarlo en nuestro h2 que lleva por d nameH
 */
let button=document.querySelector('#button1');
button.addEventListener('click', event => {
    let nameHeader=document.querySelector('#nameH');
    //Escribe sobre nuestro h2
    nameHeader.textContent=nameInput.value;

})