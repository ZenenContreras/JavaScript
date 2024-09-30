const boton = document.getElementById('boton-color')
const color = document.getElementById('color')

function generarColorHex(){
    let digitos = '0123456789ABCDEF'; 
    let colorHex = '#'; 

    for(let i = 0; i< 6; i++){
        let indiceAleatorio = Math.floor( Math.random() * 16) 
        colorHex += digitos[indiceAleatorio]
    }
    return colorHex
}

boton.addEventListener('click' , function(){
    let colorAletorio = generarColorHex()
    color.textContent = colorAletorio;
    document.body.style.backgroundColor = colorAletorio
})