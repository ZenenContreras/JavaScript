// 1. Crea una variable para cada operación aritmética
let a = 5
let b = 10

console.log(a + b)
console.log(a - b)
console.log(a / b)
console.log(a * b)
console.log(a % b)
console.log(a ** b)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

a +=5

console.log(a)

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación

console.log(a < b)
console.log(a <= b)
console.log(a === b)
console.log(a !== 'b')
console.log(a == b)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

// 5. Utiliza el operador lógico and

console.log(a <= b && b >= a)

// 6. Utiliza el operador lógico or

console.log(a == b || b == a)

// 7. Combina ambos operadores lógicos


console.log(a <= b && b >= a || a + 5)

// 8. Añade alguna negación

console.log(!(a > b))

// 9. Utiliza el operador ternario

const yuliEsLinda = true

yuliEsLinda ? console.log('Yuli es muy hermosa') : console.log('Yuli sigue siendo muy hermosa')

// 10. Combina operadores aritméticos, de comparáción y lógicas
