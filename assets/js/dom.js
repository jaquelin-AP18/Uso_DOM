/*Accedo a un elemento de html por medio del querySelector
el #subtitle es el id que tiene mi elemento dentro del html
-Para seleccionar una clase se usa .
-Para seleccionar un id usamos #
*/
let subtitle=document.querySelector('#subtitle');
let parrafo=document.querySelector('#parrafo');
console.log(subtitle);

//textContent sirve para obtener el valor actual que tiene en el html
console.log(subtitle.textContent);
//.textContent= es para asignar un nuevo valor al elemento
subtitle.textContent= 'Nuevo valor';

//classList.add('mi-clase') lo utilizamos para agregar clases al elemento
subtitle.classList.add('red');
//Removemos la clase
subtitle.classList.remove('red');

//Creamos un arreglo de animales
const animales=['Perro','Gato', 'Mapache','Pez','Leopardo','Raton', 'Zorro'];
const list=document.querySelector('#list');
//push sirve para agregar elementos a un arreglo
animales.push('Elefante');

/**
 * forEach es un ciclo para recorrer los elementos de un arreglo u objeto, tiene una funcion anonima callback (se llaman asi por que la funcion no tiene nombre)
 */
animales.forEach(function(animal,index)
{
    let item=document.createElement('li');
    item.textContent= `${index+1} ${animal}` ;
    //appendChild para meter datos dentro de una lista
    list.appendChild(item);
}); 



//Con funcion de flecha
/* animales.forEach(animal => {
    let item=document.createElement('li');
    item.textContent=animal;
    //appendChild para meter datos dentro de una lista
    list.appendChild(item);
});  */