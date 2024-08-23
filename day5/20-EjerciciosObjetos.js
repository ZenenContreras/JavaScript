
// 1. Crea un objeto con 3 propiedades

let person = {
    name: 'Zenen',
    age: 22,
    carrera: 'Ing.Sistemas'
}

// 2. Accede y muestra su valor

console.log(person.name)

// 3. Agrega una nueva propiedad

person.email = 'Zenencontreras1@gmail.com'

// 4. Elimina una de las 3 primeras propiedades

delete person.age

// 5. Agrega una función e invócala

let person2 = {
    name: 'Zenen',
    age: 22,
    work: function(){
        console.log( `${this.name} trabaja`)
    }
}

person2.work()

// 6. Itera las propiedades del objeto

for(let key in person2){
    console.log(key + ':' + person[key])
}


// 7. Crea un objeto anidado

let person3 = {
    name: 'Zenen',
    age: 22,
    job: {
        name: 'Ingenierio de sistemas',
        exp: 1,
        work: function(){
            console.log(`El nombre trabaja de ${this.name}.`)
        }
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(person3)
person3.job.work()

// 9. Comprueba si los dos objetos creados son iguales

console.log(person2 === person3)

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(person2.name === person3.name)
console.log(person2.name === person3.age)