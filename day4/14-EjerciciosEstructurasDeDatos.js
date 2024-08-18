
// 1. Crea un array que almacene cinco animales

let newArray = ['Leon','Perro', ' Gato', 'Tigre', 'Elefante']

// 2. Añade dos más. Uno al principio y otro al final

newArray.push('Vaca')
newArray.unshift('Caballo')

console.log(newArray)


// 3. Elimina el que se encuentra en tercera posición

newArray.splice(3,1)
console.log(newArray)

// 4. Crea un set que almacene cinco libros

let newSet = new Set([1,2,3,4,5])

console.log(newSet)

// 5. Añade dos más. Uno de ellos repetido

newSet.add(6)
newSet.add(5)

console.log(newSet)

// 6. Elimina uno concreto a tu elección

newSet.delete(5)
console.log(newSet)

// 7. Crea un mapa que asocie el número del mes a su nombre

let newMap = new Map([
    [1,'Enero'],
    [2,'Febrero'],
    [3,'Marzo'],
    [4,'Abril'],
    [5,'Mayo'],

])

console.log(newMap)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

if(newMap.has(5)){
    console.log('Tiene a mayo ')
}else{
    console.log('No tiene a mayo')
}

console.log(newMap.get(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano

newMap.mesesdeverano = ['junio','julio','agosto']
console.log(newMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let nArray = [1,2,3,4,5]

nSet = new Set(nArray)

let NMAP = new Map()

NMAP.set('set',nSet)

console.log(NMAP)
