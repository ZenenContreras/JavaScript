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
primerTopping.style.color = "#f1f1f1";
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

console.log(enlaces[0].setAttribute("href","https://www.freecodecamp.org"))

