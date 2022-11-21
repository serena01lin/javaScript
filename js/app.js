

let respuesta = confirm("Quieres jugar?"); //Preguntar si quiere jugar
if (respuesta === false) {//si no quiere jugar==========
    alert("Hasta la proxima") //2. Despedirlo
}
let vidas = 3; //3.generar las 3 vidas
let num_aleatorio = Math.floor(Math.random() * (10 - 1)) + 1; //4. Generar el numero aleatorio
let num_usuario = parseInt(prompt('El juego consiste en adivinar un numero del 1 al 10. Cuentas con tres intentos para adivinarlo, si no pierdes. Ingrese un numero del 1 al 10')); //2. Explicarle las reglas del juego, decirle que tiene 3 vidas ， 5. Decirle que ingrese un numero


if(respuesta === true) { //si quiere jugar
    while (num_usuario !== num_aleatorio && vidas > 1 ) {
        num_usuario > num_aleatorio ? alert("Incorrecto! Pista: el numero es menor") : alert("Incorrecto! Pista: el numero es mayor"); //si no acerto=============== 6. Darle pistas y
        vidas--;//restarle una vida
        alert("Te quedan " + vidas + " vidas.") //8. Decirle cuantas vidas tiene y 
        num_usuario = parseInt(prompt("Vuelve a ingresar un numero")); //que ingrese un nuevo numero
    } 
    if(vidas === 0) {
        alert("Perdiste! El numero era " + num_aleatorio)
    }
    if (num_usuario === num_aleatorio) { //si acerto
        alert("Felicidades! Subiste de nivel! Aumenta la dificultad: ahora tienes que adivinar un numero del 1 al 15 y tienes 5 vidas") //subir de nivel. numeros del 1 al 15
        let vidas_2 = 5; //sumarle vidas (5)
        let num_aleatorio_2 = Math.floor(Math.random() * (15 - 1)) + 1; //generar el numero aleatorio
        let num_usuario_2 = parseInt(prompt("Ingresa un numero del 1 al 15")) //decirle que ingrese el numero
        while (num_usuario_2 !== num_aleatorio_2 && vidas_2 > 1 ) {
            num_usuario_2 > num_aleatorio_2 ? alert("Incorrecto! Pista: el numero es menor") : alert("Incorrecto! Pista: el numero es mayor");  //si no acerto, darle pistas
            vidas_2--; //descontar una vida
            alert("Te quedan " + vidas_2 + " vidas.") //decirle cuantas vidas le queda
            num_usuario_2 = parseInt(prompt("Vuelve a ingresar un numero")); //decirle que ingrese el numero de nuevo
        } 
        if (num_usuario_2 === num_aleatorio_2) { //si acerto
            alert("Felicidades! Subiste de nivel! Aumenta la dificultad: ahora tienes que adivinar un numero del 1 al 20 y tienes 8 vidas") //subir de nivel, numeros del 1 al 20
            let vidas_3 = 8; //sumarle vidas. 8
            let num_aleatorio_3 = Math.floor(Math.random() * (20 - 1)) + 1; //generar el numero aleatorio
            let num_usuario_3 = parseInt(prompt("Ingresa un numero del 1 al 20")) //decirle que ingrese el numero
            while (num_usuario_3 !== num_aleatorio_3 && vidas_3 > 1 ) { 
                num_usuario_3 > num_aleatorio_3 ? alert("Incorrecto! Pista: el numero es menor") : alert("Incorrecto! Pista: el numero es mayor"); //si no acerto, darle pistas
                vidas_3--; //restar una vida
                alert("Te quedan " + vidas_3 + " vidas.") //decirle cuantas vidas le queda
                num_usuario_3 = parseInt(prompt("Vuelve a ingresar un numero")); //decirle que vuelva a ingresar un numero
            }
            if (num_usuario_3 === num_aleatorio_3) //si acerto
            alert("Felicidades! El juego ha terminado") //decirle que termino el juego
        }
    }    
} 





