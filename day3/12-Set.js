// set

//declaracion

let myset = new Set()

console.log(myset)

//inicializacion con valores ojo!!! []

myset = new Set(['Zenen', 'Contreras', 'Zenendev', 22, true])

console.log(myset)

//Métodos comunes 

//Add y delete

myset.add('https://zenen.dev') //Se mantiene la ordenacion de elementos

console.log(myset)

myset.delete(22) //No funciona siguiendo un indice, se tiene que indicar el valor del elemento 

console.log(myset.delete('Zenen'))

if (myset.delete(4)){
    console.log('Se ha borrado')
}else{
    console.log('No se ha borrado ')
}

//Has (Comprobar si existe un elemento)

console.log(myset.has('Zenen'))

//Longitud (Size)

console.log(myset.size)

//convertit un set a array

myArray = Array.from(myset)
console.log(myArray)

//Convertir un array a un set 

myset2 = new Set(myArray)
console.log(myset2)

//Principal diferencia entre set y array 

//(El set no admite duplicados (Tiene que ser exactamente igual) el array si )

myset.add('Contreras')
myset.add('Contrerss')
console.log(myset)