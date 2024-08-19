//Funciones

function myFuncion(){
    console.log('Hola funcion')
}

for(let i = 0; i < 5; i++){
    myFuncion()
}

//Con parametros 

function parametros(nombre,apellido){
    console.log(`Hola ${nombre} ${apellido}`)
}

parametros('Zenen','Contreras')

//Funciones anonimas 

const func = function(nombre,apellido) {
    console.log(`Hola ${nombre} ${apellido}!`)
}

func("zenen","contreras")

//Arrow functions (Mejor forma de escribir funciones)

const func3 = (name) => {
    console.log(`Hola ${name}`)
}

const func4 = (name) => console.log(`hola ${name}`)

func3('zenen')
func4('Zenen')

//Parametros 

function sum(a,b){
    console.log(a +b)
}

sum(5,5)

//Por defecto 

function sum1(a = 0,b = 0){
    console.log(a +b)
}

sum1(5)
sum1(0)
sum1(10,10)

//Retorno de valores 

function mult(a,b){
    return a * b
}

let result = mult(10,5)

console.log(result)

//Funciones anidadas

//Scope es el rango de actuacion 

function extern(){
    console.log('Funcion externa')
    function intern(){
        console.log('Funcion interna')
    }
    intern()
}

extern()
// intern() esta fuera del scope

//Funciones de orden superior

function applyfunc(func,Parametros){
    func(Parametros)
}

applyfunc(func4 , 'Funcion de orden superior')


//forEach (Es una funcion que me sirve para ejectur bucles de elementos iterables)

myArray = [1,2,3,4,5]

myArray.forEach(function(value){
    console.log(value)
})

myArray.forEach((value) => console.log(value))