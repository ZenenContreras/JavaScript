//Seleccionar todos los elementos por su id

const contenedor = document.getElementById('contenedor');
const titulo = document.getElementById('titulo');

console.log(titulo.innerText); 
console.log(titulo.tagName); 
console.log(titulo.innerHTML); 

//Elementos por su clase
const topping = document.getElementsByClassName("toppings")

console.log(topping) 


//Se puede seleccionar todos los elementos por su tag
const misToppings = document.getElementsByTagName("li")

console.log(misToppings)

//ejemplo

const rojo = document.getElementsByClassName("rojo")

console.log(rojo)

//seleccionar un elemento por un selector css

//Selecciona el primero que cumpla con el criterio

const aceituna = document.querySelector("#aceitunas")
const toppings = document.querySelector(".toppings")

console.log(aceituna)
console.log(toppings)

const roppingRojo = document.querySelector(".toppings:not(.rojo)")

console.log( roppingRojo)

//Selecciona todos que cumpla con el criterio

const toppingsAzul = document.querySelectorAll(".toppings.rojo")

console.log(toppingsAzul)
console.log(toppingsAzul[0])

const primerTopping = document.querySelector(".toppings")
console.log(primerTopping)

primerTopping.style.backgroundColor = "blue"
primerTopping.style.textTransform = "uppercase"

console.log(primerTopping.style)

//Seleccionar el texto

const listaToppings = document.getElementById("lista-toppings")
console.log(listaToppings)
console.log(listaToppings.innerText)

//formato en el que esta en el documento. incluyendo los espacios

console.log(listaToppings.textContent)

//toda la estructura 
console.log(listaToppings.innerHTML)

//modificar el texto 

const titulo1 = document.getElementById("titulo")

titulo1.innerText = "Mis toppings favoritos"

//modifica atributos de un elemento 

const enlaces = document.getElementsByTagName("a")

//Asignarle un valor a un elemento especifico .setattribute

console.log(enlaces[0].setAttribute("href","https://www.freecodecamp.org"))


//Clases===


const primerTopping1 = document.querySelector('.toppings')

console.log(primerTopping1.classList); 

//agregar una clase a un elemento

primerTopping1.classList.add('txtverde')

//verificar si una clase sxiste

console.log(primerTopping1.classList.contains('rojo'))

//eliminar una clase

primerTopping1.classList.remove('txtverde')

//DOM

//CREAR UN ELEMENTO DESDE CERO

const listaDeToppings = document.getElementById('lista-toppings')

const toppingNuevo = document.createElement('li')
toppingNuevo.classList.add('toppings', 'rojo')
toppingNuevo.innerText = 'Queso Extra'

listaDeToppings.append(toppingNuevo)

//REMOVER UN ELEMENTO

toppingNuevo.remove()

//RECORRER EL DOM

//Obtener el elemento padre html 
console.log(listaToppings.parentElement.parentElement)

//obtener el elemento hijo html
console.log(listaDeToppings.firstElementChild)

//Obtener el elemento hermano
console.log(listaDeToppings.previousElementSibling)

//EVENTOS DEL DOM

//target= elemento que va a recibir

//a donde va a ir el usuario 


//trigger = desencadenante
// es el click

//EVENTOS = FUNCION

//event handler
//funcion que se ejecuta cuando ocurre un evento 

//event listener

//EVENTOS EN HTML

function mostrarclic(e){
    console.log(e.target.innerText)
}

//ADDEVENLISTENER

const topping2 = document.getElementsByClassName('toppings')

for(const topping3 of topping2 ){
    topping3.addEventListener('click' ,  (e) => {
        console.log(e.target.innerText); 
    })
}

topping2.addEventListener('click', mostrarclic)


