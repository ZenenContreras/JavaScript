// Mapas (Estructurar un conjunto de datos) (Direccionario / Coleccion de elementos, y cada elemento no es unico )

// Declaracion 

let newMap = new Map()

let newSet = new Set()

let newArray = new Array()

console.log(newMap)

//Inicializacion 

newMap = new Map([
    ['Usuario','Zenen'],
    ['Constraseña',1234],
    ['Edad',22]
])

console.log(newMap)

//Metodos y propiedades 

//Set (Para cualizar un elemento o para agregarlo)

//No puede haber repetidos en clave (En valores si pero la clave no )

newMap.set('Alias','Zenendev')

console.log(newMap)

//Get (Obtener el valor de una clave, si no existe es undefined)

console.log(newMap.get('Usuario'))

//has (Ver si una clave existe o no)

console.log(newMap.has('Usuario'))

//delete

console.log(newMap.delete('Alias'))
console.log(newMap)

//Clear (Borrar todo el mapa)

//newMap.clear()
console.log(newMap)

//Propiedades de mapa famosas


//keys (retorna las keys )

console.log(newMap.keys())

//size etorna el tamaño del mapa

console.log(newMap.size )

