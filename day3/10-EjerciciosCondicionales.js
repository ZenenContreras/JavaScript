
// 1. Imprime por consola tu nombre si una variable toma su valor

let nombre = 'zenen'

if(nombre = 'zenen'){
    console.log(nombre)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let user = 'zenenc'
let password = 1234

if (nombre == 'zenenc' || password == 1234){
    console.log('Usted ha ingresado a nuestro sistema')
}else{
    console.log('Usuario o contraseña incorrecta')
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let num = 3

if(num % 2 == 0){
    console.log('Es par')
}else{
    console.log('Es impar')
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let age = 18 

age >= 18 ? console.log('Puede votar') : console.log('No puede votar')

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let adulto = 17

adulto >= 18 ? console.log('Es adulto') : console.log('Es menor')

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 'Octubre'

if( mes == 'Enero' || mes == 'Febrero' || mes == 'Diciembre'){
    console.log('Es Invierno')
}else if(mes == 'Marzo' || mes == 'Abril' || mes == 'Mayo'){
    console.log('Es Primavera')
}else if(mes == 'Junio' || mes == 'Julio' || mes == 'Agosto'){
    console.log('Es Verano')
}else if(mes == 'Septiembre' ||mes == 'Octubre' ||mes == 'Noviembre' ){
    console.log('Es Otoño')
}else{
    console.log('Mes no valido, porfavor revisar las mayusculas')
}
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let mes1 = 14

if (mes1 == 1 || mes1 == 3 ||mes1 ==  5 ||mes1 == 7 || mes1 ==8 || mes1 ==10 || mes1 ==12){
    console.log('Tiene 31 dias')
}else if(mes1 == 4 || mes1 ==  6 ||mes1 == 9 ||mes1 == 11){
    console.log('Tiene 30 dias')
}else if (mes1 == 2){ 
    console.log('El mes tiene 28 o 29 dias, Depende del año :)')
} else{
    console.log('Numero de mes no valido ')
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

const idioma = 'Italiano'

switch (idioma){
    case 'Español':
        console.log('Hola! Como estas?')
        break
    case 'Ingles':
        console.log('Hello! How are you? ')
        break
    case 'Italiano':
        console.log('Ciao!')
        break
    default:
        console.log('Idioma no valido')

}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

const nMes = 12

switch(nMes){
    case 1, 2, 12:
        console.log('Es invierno')
        break
    case 3, 4, 5:
        console.log('Es primavera')
        break
    case 6, 7, 8:
        console.log('Es Verano')
        break
    case 9,10,11:
        console.log('Es Otoño')
        break
    default:
        console.log('Numero de mes no valido')
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

let mes2 = 1

switch (mes2){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log('31 dias')
        break
    case 4:
    case 6:
    case 9:
    case 11:
        console.log('30 dias')
        break
    case 2:
        console.log('28 o 29 dias')
        break
    default:
        console.log('Numero de mes no valido')
}

