//Objetos
 
//Sintaxis 

//Los objetos puede contener propiedades, otros objetos etc

let person ={
    name: 'Zenen',
    age : 22,
    alias :'zenendev'
}

//Acceso a propiedades

//Notacion punto 

console.log(person.name) //Esta es la recomendada 

//Notacion de corchetes

console.log(person['name'])

//Modificacion de propiedades 

person.name = 'Zenen Contreas'
person.age = '37'

console.log(person.name)
console.log(typeof person.age)

//Eliminacion de propiedades

delete person.age

console.log(person)

//Añadir propiedad

person.email = 'Zenencontreras1@gmail.com'
console.log(person)

//Metodos (Funciones)

let person2 = {
    name: 'Zenen',
    age : 22,
    alias :'zenendev',
    walk : function(){
        console.log('La persona camina')
    }
}

person2.walk()

//Anidacion de objetos

let person3 = {
    name: 'Zenen',
    age : 22,
    alias :'zenendev',
    walk : function(){
        console.log('La persona camina')
    },
    job: {
        name: 'Ingeniero de software',
        exp: 1 ,
        work: function(){
            console.log('La persona trabaja')
        }    
    }

}

console.log(person3)

console.log(person3.job.name)
person3.job.work()

//Igualdad de objetos


let person4 = {
    name: 'Zenen',
    age : 22,
    alias :'zenendev',
    walk : function(){
        console.log(`${this.name} trabaja`)
    }
}

console.log(person2)
console.log(person4)

console.log(person2 == person4)
console.log(person2 === person4) // Los objetos se guardan en una direccion de memoria

console.log(person2.name == person4.name)

//Iteración

for(let key in person4){
    console.log(key + ':' + person4[key])
}

person4.walk()


//Buenas practicas
//Para llamar a una variable se tiene que utilizar el this. 

//Se pueden usar objetos como funciones

function Person(name,age){ //Deberia de ser una clase 
    this.name = name
    this.age = age
}

let person5 = new Person('Zenen', 22)
console.log(person5)
console.log(person5.name)

console.log(typeof person5)
console.log(typeof person4)