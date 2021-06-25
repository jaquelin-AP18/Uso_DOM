

//Accedemos a nuestro boton
let button=document.querySelector('#button');
button.addEventListener('click',()=>
{

        //Hacemos la peticion
    let apiFetch = fetch('https://api.thecatapi.com/v1/images/search');

        //Creamo la Promesa (promise) tiempo de espera
    apiFetch
    //then, es lo que se ejecuta despues de que se resolvio la promesa
    .then(resp => resp.json())
    .then(data =>
    {
        //Hacemos la seleccion de nuestro elemento (imagen) definida en el html
        let cat = document.querySelector('#cat');

        //nos ayuda a insertar la imagen en el contenedor img de html, a través de la url obtenida por el objeto json
        cat.src=data[0].url;

        //Imprimimos las url de las imagenes por consola
        console.log(data[0].url);
        //Cachamos el error en caso de que la promesa no funcione y lo imprimos por consola
    }) .catch(e=> console.log(e))
})