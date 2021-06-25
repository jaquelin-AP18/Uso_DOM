//Hacemos la seleccion de nuestro elemento html
let btnUsers=document.querySelector('#btnUsers');
let divUsers=document.querySelector('#divUsers');

/* btnUsers.addEventListener('click',() =>
{
    //Hacemos la peticion al Api
    let getUsers= fetch('https://jsonplaceholder.typicode.com/users');

    //Realizamos la promesa
    getUsers
            //Convertimos la respuesta a formato Json
        .then(resp => resp.json())
        .then(data=>
    {
        //Accedemos a los elementos del arreglo
        data.forEach(user=> 
        {
            //Creamos nuestros elemento parrafo en el html
            let parr=document.createElement('p');
            //ponemos los datos dentro del parrafo y seleccionamos nuestro elemento que queremos imprimir (.name) o el dato que se requiera
            parr.textContent=user.name;
            //appendChild para meter datos dentro de una lista
            divUsers.appendChild(parr);

        });

        console.log(data)

    }) .catch(e=>console.log(e));
}) */

//Agregamos un evento a nuestro boton
btnUsers.addEventListener('click', displayData);

/**
 * Creamos una funcion asincrona (async) y por medio del await(tiempo de espera)
 */
async function displayData()
{
    let getUsers= await fetch('https://jsonplaceholder.typicode.com/users');

    //Checamos el status de nuestro fetch (sustituye el catch) nos devuelve true o false
    console.log(getUsers.ok);

    //Agreamos nuestro espera (promesa) y convertimos nuestro archivo en json
    let data= await getUsers.json();

        //Accedemos a los elementos del arreglo
        data.forEach(user=> 
            {
                //Creamos nuestros elemento parrafo en el html
                let parr=document.createElement('p');
                //ponemos los datos dentro del parrafo y seleccionamos nuestro elemento que queremos imprimir (.name) o el dato que se requiera
                parr.textContent=`Nombre de usuario: ${user.name},Email:${user.email}, Ciudad:${user.address.city}` ;
                //appendChild para meter datos dentro de una lista
                divUsers.appendChild(parr);
    
            });
    //Imprimimos nuestros datos
    console.log(data);
}
