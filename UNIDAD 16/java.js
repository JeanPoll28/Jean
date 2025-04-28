// Paso 1 seleccionamos el elemento del DOM donde se visualizara la hora 
const  clock=document.getElementById('clock');
// Paso 2: Crearemos una funcion que se actualice 'La hora'
function updateClock(){
    // Debemos obtener la hora actual del sistema
    const now=new Date();

    // Extraer la hora,minutos,segundos
    let hora=now.getHours();
    let minuto=now.getMinutes();
    let segundos=now.getSeconds();
    // Asegurarnos que los valores poseen dos digitos ejm(09 en ves de 9)
    hora=String(hora).padStart(2,'0');
    minuto=String(minuto).padStart(2,'0');
    segundos=String(segundos).padStart(2,'0');
    
    // Vamos a contruir el string con formato HH:MM:SS
    const tiempoString=`${hora}:${minuto}:${segundos}`;

    // Insertamos la hora en el elemento HTML 
    clock.textContent=tiempoString;

}
// Paso 3: se ejectura la funcion cada segundo, usando el setinterval 
setInterval(updateClock, 1000);

// Paso 4: llamar a la funcion para visualizar la hora
updateClock();
