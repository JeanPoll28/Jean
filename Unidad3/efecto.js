// Primero crear un array que contenga el orden de los colores 
const colores=['rojo','amarillo','verde'];

// Debes selleccionar la variable que lleve la posicion actual del color 
let indice=0;

// Esta funcion de llama cuando realizas un clic al boton
function cambiarLuz(){
    // Primero se debe quitar la clase activa de todos los colores
    colores.forEach(color => {
        document.getElementById(color).classList.remove('activa');
    });
// activar el color actual usando el indice
  const colorActual=colores[indice];
  document.getElementById(colorActual).classList.add('activa');
//   Luego tenemos que realizar el avance al otro color 
  indice=(indice+1)%colores.length;
}
