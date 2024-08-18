// bucles o loops 

//For

for (let i = 0 ; i <= 5 ; i++){
    console.log(`Hola eres el numero: ${i}`)
}

const num = [1,2,3,4,5,7]

for(let i = 0; i < num.length; i++){
    console.log(`Elemento: ${num[i]}`)
}

//While

// let i = 0

// while(i < 6){
//     console.log(`Hola, eres el numero ${i}`)
//     i++
// }

// do while (Hacer 1 vez minimo)

let i = 0

do {
    console.log(`Hola ${i}`)
    i++
}while(i < 5)

//for of (Se ejecuta algo que sea iterable) 

let nArray = [1,2,3,4,5]

let nSet = new Set ([6,7,8,9])

let newMap = new Map([
    ['Usuario','Zenen'],
    ['Constraseña',1234],
    ['Edad',22]
])

nString = 'Hola, Js'

for(let valor of nArray){
    console.log(valor)
}
for(let valor of nSet){
    console.log(valor)
}
for(let valor of newMap){
    console.log(valor)
}
for(let valor of nString){
    console.log(valor)
}

//Continue (Saltar la ejecucion dependiendo de lo que se le pida)
// Break (Parar todo el bucle )

for(let i = 0; i<10; i++){
    if (i == 5){
        continue
    }else if(i == 6){
        break 
    }

    console.log(`Hola inidice ${i}`)
}



//Buenas Practicas 

//1. Asegurar que la condicion sea false en algun momento para que no sea un ejecutre infinitamente 
 
//2. Uso del break y del continue 
