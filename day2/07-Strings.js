let myNombre = 'zenen'
let myAge = '22'

console.log( 'hola, mi nombre es ' + myNombre + ' y tengo ' + myAge +' años')

//Longitud

console.log(myAge.length)
console.log(typeof myAge)

//Acceso a caracteres
console.log(myNombre[0])
console.log(myNombre[1])
console.log(myNombre[2])
console.log(myNombre[3])
console.log(myNombre[4])

//Metodos comunes 

console.log(myNombre.length)
console.log(myNombre.toUpperCase())
console.log(myNombre.toLowerCase())
console.log(myNombre.indexOf ('zenen'))
console.log(myNombre.indexOf('hola'))
console.log(myNombre.includes('hola'))

console.log(myNombre.slice(0,2))
//Templates literals (Plantillas literales)

let message = `Hola, este es mi 
curso de javascript` //Escribir en varias lineas

let email = 'zenencontreras1@gmail.com'

console.log(`Hola, ${myNombre} ! Tu email es ${email}`)


