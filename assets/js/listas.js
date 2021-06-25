
//Creamos nuestro arreglos
const listAnimals = ['Pez','Jaguar','Lobo','PejeLagarto','Ardilla','Canguro','Tlacuache','Ajolote','Gato','Perro'];

const listComputers=['Asus','HP','Toshiba','Dell','Mac','Acer','Lenovo','Huawwi','Alienware','Compaq'];

const listPeople=['Jaquelin','Edgar Rodrigo','Carlos Eduardo','Pedro Angel','Cesar Eduardo','Luis','Clara Itzel','Tania Belen','Felipe de Jesus','Sharon','Astrik Sem','Gustavo Israel','Humberto'];


//Hacemos referencias a nuestros botones
const btnAnimals=document.querySelector('#animals');
const btnComputers= document.querySelector('#computers');
const btnPeople= document.querySelector('#people');


//Hacemos referencia a las listas
const list=document.querySelector('#list')

//Creamos una funcion para agregar los elementos a las listas (ahorra codigo)
function displayList(lists){
    list.textContent='';
    lists.forEach(l => {
        const item=document.createElement('li');
        item.textContent=l;
        list.appendChild(item);
    })
}


//Creamos la funcion para mandar a llamar a nuestro arreglo
btnAnimals.addEventListener('click', function(){
    displayList(listAnimals);
});

//Creamos la funcion de flecha para mandar a llamar a nuestro arreglo
btnComputers.addEventListener('click',() =>{
    displayList(listComputers);
});

btnPeople.addEventListener('click',() =>{
    displayList(listPeople);
});


/*

//Agregamos elementos a nuestras lista, por medio del forEach
btnAnimals.addEventListener('click', function(){
    listAnimals.forEach(animal=>{
        const li=document.createElement('li');
        li.textContent=animal;
        list.appendChild(li);
    })
})

//Agregamos elementos a nuestras lista, por medio del forEach
btnComputers.addEventListener('click', function(){
    listComputers.forEach(computer=>{
        const li=document.createElement('li');
        li.textContent=computer;
        list.appendChild(li);
    })
})

//Agregamos elementos a nuestras lista, por medio del forEach
btnPeople.addEventListener('click', function(){
    listPeople.forEach(people=>{
        const li=document.createElement('li');
        li.textContent=people;
        list.appendChild(li);
    })
})
*/