
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

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado