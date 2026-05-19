
   alert("Bienvenidos a mi web pulsa ok para descubrirla")  /*Muestra una alerta en pantaña*/

setTimeout(function() { /*Declara una función en la cual hay que esperar a que salte*/
    let edadTexto = prompt("Por favor ingrese su edad"); /*Genera un cuadro el cual pregunta la edad*/ 
    let edad = parseInt(edadTexto);   /*Puede ser escrito o por numero*/ 
    
    if (edad >= 18) {  /* Si la edad es mayor o igual a 18*/
        document.body.style.backgroundColor= "blue" ; /*Cambia color de la web a azul (Ya esta en azul por lo cual no hay cambios*/ 
        alert("Puedes Entrar a la web"); /*Una alerta en la cual no hay qye escribir que te dice si puedes entrar a la web*/
        console.log("Puedes entrar en la web chavalin") /*Muestra en la terminal el mensaje escrito */
  
    

    } else {
        document.body.style.backgroundColor = "red" ; /*Color de fondo rojo si lo clickas mal*/ 
        alert("No Puedes Entrar a la web"); /*Pone una alerta*/
        console.log("No puedes entrar en la web chaval") /*Imprime un mensaje en la terminal segu*/ 
         window.location.href = "https://www.google.com"; /*Se va de mi web a google*/ 
 

    }
}, 500);   /*600 milesegundos de espera*/ 
3
setTimeout(function() { /*Declara una función en la cual hay que esperar a que salte*/
    let nombreyapellidos = prompt("Por favor, dígame su nombre y apellidos");  /*Genera un cuadro el cual pregunta la edad*/ 

    // Verificamos si el usuario escribió algo
     document.body.style.backgroundColor="Blue" /*Cambia color de la web a azul (Ya esta en azul por lo cual no hay cambios*/ 
    if (nombreyapellidos && nombreyapellidos.trim() !== "") {
        alert("¡Ya estás en la web!"); /*Pone una alerta en pantalla de que estamos en la web*/ 
    } else {
            document.body.style.backgroundColor="Red" /*Cambia la web a color rojo */
        alert("No especificaste tu nombre, te bloqueamos el acceso"); /*Aleta en pantalla*/ 
        window.location.href = "https://www.google.com"; /*Te manda a la pagina de google*/
    }
}, 500); /*Espera 500 milesegundos*/ 
