//Creamos una funcion para acceder a los elementos de los arreglos
function agregar(arreglo)
{
/**
 * forEach es un ciclo para recorrer los elementos de un arreglo u objeto, tiene una funcion anonima callback (se llaman asi por que la funcion no tiene nombre)
 */
    arreglo.forEach(function(contenido,index)
    {
    let item=document.createElement('li');
    item.textContent= `${index+1} ${contenido}` ;
    //appendChild para meter datos dentro de una lista
    list.appendChild(item);
    }); 
}

//Creamos un arreglo de animales
const animales=['Perro','Gato', 'Mapache','Pez','Leopardo','Raton', 'Zorro','Elefante','Pantera','Perico'];
//Seleccionamos nuestro elemento dentro del html
const list=document.querySelector('#animales');

//Creamos un arreglo de marcas de computadoras
const computadoras=['Dell','HP', 'Toshiba','Asus','Hisense','Mac', 'IBM','Lenovo','Huawei','otra'];
//Seleccionamos nuestro elemento dentro del html
const list2=document.querySelector('#pc');

//Creamos un arreglo nombres de compañeros
const companeros=['Miguel','Yanni', 'Luz','Uriel','Jaquelin','Joel', 'Magali','Carlos','Rodrigo','Laura'];
//Seleccionamos nuestro elemento dentro del html
const list3=document.querySelector('#companeros');


//Declaramos nuestra variable button y accdemos por medio del id
let button=document.querySelector('#button1');
button.addEventListener('click', event => 
{
    //Llamamos a nuestra funcion
    agregar(animales);

})

//Declaramos nuestra variable button2 y accedemos por medio del id
let button2=document.querySelector('#button2');
button2.addEventListener('click', event => 
{
    //Llamamos a nuestra funcion
    agregar(computadoras);

})

//Declaramos nuestra variable button3 y accedemos por medio del id
let button3=document.querySelector('#button3');
button3.addEventListener('click', event => 
{
    //Llamamos a nuestra funcion
    agregar(companeros);

})







