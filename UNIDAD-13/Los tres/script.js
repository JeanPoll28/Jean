// obtener el boton de por id y lo almacenaremos en 
// una variable 
const boton=document.getElementById("botonColor");

// crear un arreglo de colores posibles para fondo 
const colores=['lightblue', 'lightgreen', 'lightpink','lightyellow', 'lavender'];

// Añadir un evento a la hora de hacer un click
boton.addEventListener('click',cambiarColor);

// Vamos a definir la funcion para cambiar el color 
function cambiarColor(){
    // Vamos a generar un numero alatorio entre 0 y la cantidad de colores -1
    const indiceAleatorio=Math.floor(Math.random()*colores.length);
    // usaremos ese numero para seleccionar un color del arreglo
    const colorSeleccionado=colores[indiceAleatorio];
    // por ultimo cambiamos el color de fondo de la pagina usando document.body
    document.body.style.backgroundColor=colorSeleccionado;
}