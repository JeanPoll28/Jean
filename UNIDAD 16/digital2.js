 const clock=document.getElementById('clock');

 function updateClock(){
    const fecha=new Date();

    let hora=fecha.getHours();
    let minuto=fecha.getMinutes();
    let segundo=fecha.getSeconds();

    // Determinar si es AM O PM 
    const ampm=hora>=12 ? 'PM':'AM';

    // convertir a formato de 12 horas (1 a 12)
    hora=hora%12;
    hora=hora === 0 ? 12:hora; // SI LA HORA ES 0 (medianoche) la convertimos en 12
    
    // Asegurar los dos digitos
    hora=String(hora).padStart(2,'0');
    minuto=String(minuto).padStart(2,'0');
    segundo=String(segundo).padStart(2,'0');
    
    // Unir todo en un solo String
    const tiempoString=`${hora}:${minuto}:${segundo} ${ampm}`;
    
    // mostrar la hora en pantalla
    clock.textContent=tiempoString;
 }
 setInterval(updateClock, 1000);

 updateClock()