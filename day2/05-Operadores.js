// Operadores

//Operadores aritmeticos 

let a = 5
let b = '10'

console.log(a + b) // suma 
console.log(a - b) // resta
console.log(a * b) // multiplicacion
console.log(a / b) // division
console.log(a % b) // modulo
console.log(a ** b) // exponente

a++ //incremento
console.log(a)

b-- //Decremento
console.log(b)

//Operadores de asignacion 

let myVariable = 2 

myVariable += 2 // es lo mismo si se hace el 'myVariable = myVariable + 2'

console.log(myVariable)

myVariable += 2 
myVariable *= 2 
myVariable /= 2 
myVariable %= 2 
myVariable **= 2 

//Operadores de comparacion 

console.log(a > b)
console.log(a < b)
console.log(a <= b)
console.log(a >= b)
console.log(a == b) // Comprobando una igualdad por valor
console.log(a != b) //  Desigualdad por valor
console.log(a === '6') // Comprobando igualdad por tipo y por valor 
console.log(a !== '6') // desigualdad por tipo y por valor 
console.log(0 == false) // 0 es el unico falso 
console.log(1 == false) //
console.log(2 == false) // 
console.log(0 == '') // 
console.log(0 == ' ') // 
console.log(0 == null) // No es nullo 
console.log(0 == undefined) // No es undefined 
console.log(null == undefined) // No es undefined 

//Valores verdaderos

/*
Todos los numeros positvivos y negaticos menos el cero
Todas las cadenas de texto menos las vacias 
El boolean true
*/

//Valores Falso 

/* 0n
null
undefinded
NaN
El boolean false
Cadenas de texto vacîas 
*/


//Operadores logicos 

// and &&

console.log(15 > 10 && 25 > 20)

// or ||

console.log(10 > 15 || 10 > 5)


// not !

console.log(!true)
console.log(!(5 > 10 && 5 < 10))

//Operador ternarios 

const isRaining = true 

isRaining ? console.log('Esta Lloviendo') : console.log('No esta lloviendo')