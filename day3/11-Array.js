// Array

let lista = []

let lista2 = new Array(4) 

//inicializacion 

lista = [2,3,4]
lista2 = new Array(2,3,4)

console.log(lista)
console.log(lista2)

//Variable de tipado dianmico 

lista = [2, 'Hola', true]

lista = []
lista[1] = 'Contreras'
lista[2] = 'Zenendev'

console.log(lista)

//Métodos comunes 

lista = []

//Push y pop 

lista.push('Zenen')
lista.push('Contrersa')
lista.push('Zenendev')
lista.push(22)

lista.pop()// elimina el ultimo

console.log(lista)

//shift y unshift 

console.log(lista.shift()) // elimina desde el inicio 

console.log(lista.unshift('Zenen','Contreras')) // Agrega desde el inicio del array
console.log(lista)

//Length es una propiedad no es una funcion, no hay que llamarla con los parentesis

console.log(lista.length)

//Clear

lista = [] //Es mejor inicializar a vacio 

lista.length = 0  //Funciona pero es poco usada 

//slice (Devolver una copia superficial)

lista.push('Zenen', 'Contreras', 'Zenendev', 22,true)

let Nuevalista = lista.slice(0,2)

console.log(lista)
console.log(Nuevalista)

//splice

lista.splice(1,2)
console.log(lista)

lista = ['Zenen', 'Contreras', 'Zenendev', 22, true]
lista.splice(1,2,'Nueva entrada')
console.log(lista)
