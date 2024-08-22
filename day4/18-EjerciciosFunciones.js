
// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function func(a = 0, b = 0){
    console.log('La suma es:', a + b)
}

func(2,3)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

myArray = [1,8,3,4,6]
num = 0

myArray.forEach(function(value){
    for(let i = 0; i < myArray.length; i++){
        if(myArray[i] > num){
            num = myArray[i]
        }
    }
})

console.log(`El numero mayor es: [${num}] `)
// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

string = 'Hola como estas'
vocales1 = 'aeiouAEIOU'
contador = 0

function vocales(arr){
    for(let i = 0; i < string.length;i++){
        if(vocales1.includes(string[i])){
            contador++
        }
    }
    console.log(contador)
    
}

console.log(vocales(string))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

let strings =['z','e','n','e','n']
let mayusc = []

function tomayusc(arr){

    arr.forEach(function(value){
        mayusc.push(value.toUpperCase())
    })
    return mayusc
}


console.log(tomayusc(strings))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    if (numero === 2) {
        return true; // 2 es el único número primo par
    }
    if (numero % 2 === 0) {
        return false; // Si es divisible por 2, no es primo
    }
    for (let i = 3; i <= Math.sqrt(numero); i += 2) {
        if (numero % i === 0) {
            return false; // Si encuentra un divisor, no es primo
        }
    }
    return true; // Si no encontró divisores, es primo
}

console.log(esPrimo(7))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

let array1 = [1,2,3,4,5]
let array2 = [1,2,3,4,5,6,7,8,9,10]


function comunes(array1,array2){
    let array3 = []
    for(let i = 0; i< array1.length;i++){
        if(array2.includes(array1[i])){
            array3.push(array1[i])
        }
    }
    return array3 
}

console.log(comunes(array1,array2))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

let num1 = [1,2,3,4,5,6,7,8]

function sumaPar(array){
    let sum = 0
    for(let i = 0; i < array.length; i++)
        if(array[i] % 2 == 0)
        sum += array[i]
    return sum
}

console.log(sumaPar(num1))



// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

let cuadrado = [2]

function alcuadrado(array){
    let acuadrado = []
    for(let i = 0;i < array.length; i++){
        acuadrado.push(Math.pow(array[i], 2))
    }
    return acuadrado
}

console.log(alcuadrado(cuadrado))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

let inversa = [1,2,3,4,5]

function inversaa(array){
    let inversa2 = []
    for(let i = array.length - 1; i >= 0; i-- ){
        inversa2.push(array[i])
    }
    return inversa2
}

console.log(inversaa(inversa))

// 10. Crea una función que calcule el factorial de un número dado

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }

  console.log(factorial(5))