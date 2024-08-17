// if, else if, else

//if

let age = 10

if (age == 37){
    console.log(`Tu edad es ${age}`)
}else{
    console.log('Tu edad no es 37')
}

age1 = 37

if (age1 == 37 ){
    console.log('tu edad es 37')
}else if( age >18){
    console.log('Eres mayor de edad')
}else{
    console.log('Eres menor de edad')
}

//operador ternario 
let age2 = 38 

const message = age2 == 37 ? 'tu edad es 37' : 'Eres menor de edad'
console.log(message)


//switch cuando se compara una unica variable con varios valores posibles 

let day = 8
let dayname 

switch (day){
    case 0:
        dayname = 'Lunes'
        break
    case 1:
        dayname = 'Martes'
        break
    case 2:
        dayname = 'Miercoles'
        break
    case 3:
        dayname = 'Jueves'
        break
    case 4:
        dayname = 'Viernes'
        break
    case 5:
        dayname = 'Sabado'
        break
    case 6:
        dayname = 'Domingo'
        break   
    default:
        dayname = 'Numero de dia incorrecto '        
}

console.log(dayname)