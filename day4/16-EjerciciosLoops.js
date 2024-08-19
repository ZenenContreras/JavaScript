// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for(let i = 1; i <= 20;i++){
    console.log(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let suma = 0;

for (let i = 1; i <= 100; i++) {
    suma += i
}

console.log("La suma de los números del 1 al 100 es: " + suma);


// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}


// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let nombres = ['Zenen','Felipe','Moises','Contreras','Royero']

for ( let valor of nombres ){
    console.log(valor)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let texto = 'Esto es una cadena de texto'
let vocales = 'aeiouAEIOU'
let contador = 0

for(let i = 0; i < texto.length ; i++){
    if(vocales.includes(texto[i])){
        contador++
    }
}

console.log(contador)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let myArray = [1,2,3,4,5]
let multiplicacion = 1

for (let i = 0; i < myArray.length ; i++){
    multiplicacion *= myArray[i]
}

console.log(multiplicacion)


// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

let numero = 5

let i =1

while(i<=10){
    console.log(numero * i)
    i++
}

// 8. Usa un bucle para invertir una cadena de texto

let array = ['Z','E','N','E','N']

let narray = []

for(let i = array.length - 1 ; i >= 0 ; i--){
    narray.push(array[i])
}
console.log(narray)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let fibonacci = [0, 1];  // Inicializamos la secuencia con los dos primeros números

for (let i = 2; i < 10; i++) {  // Comenzamos en 2 porque los dos primeros números ya están definidos
    let siguienteNumero = fibonacci[i - 1] + fibonacci[i - 2];  // Sumamos los dos últimos números de la secuencia
    fibonacci.push(siguienteNumero);  // Añadimos el siguiente número a la secuencia
}

console.log(fibonacci)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let numero1 = [8,9,10,11,12,13,14]
let numeromayor = []

for(let i = 0; i < numero1.length; i++){
    if(numero1[i] > 10){
        numeromayor.push(numero1[i])
    }
}

console.log(numeromayor)