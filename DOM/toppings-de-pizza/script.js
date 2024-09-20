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

//Selecciona todos que cumpla con el criterio