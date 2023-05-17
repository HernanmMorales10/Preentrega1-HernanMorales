var nombreIngresado = prompt("Ingresa tu nombre para comenzar a navegar")

if(nombreIngresado==nombreIngresado){
    alert("Bienvenido:  " + nombreIngresado)
}

//inicia cotizacion
function totalFotos(cantidad,precio){

    let precioFotos = cantidad * precio
    alert("El precio total de tus fotos es:  $" + precioFotos + " COP")
}

let cantidad=parseInt(prompt("ingrese cantidad de fotos que te gustarian para tu sesíon"))
let precio=5000

totalFotos(cantidad,precio)

function totalhoras(cantidadHoras,preciohoras){

    let precioHorastotal = cantidadHoras * preciohoras
    alert("El precio total de tus fotos es:  $" + precioHorastotal + " COP")
}

let cantidadHoras=parseInt(prompt("ingrese cantidad de fotos que te gustarian para tu sesíon"))
let preciohoras=1000

totalhoras(cantidadHoras,preciohoras)




//usuarios registrados con limite de 15 que aplican para descuento

for (let usuarios = 0; usuarios <15; usuarios++){
    console.log("Usuarios con descuento " + usuarios)
}