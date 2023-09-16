const palabra = "APROBAR"
const adivinar = " "
let intentos = 3;
const letra = "ABCDEFGHIJKLMNÑOPQRSTIVWXYZ"
let pregunta = 0

while (intentos > 0 && adivinar !== palabra) {
pregunta = prompt ("Ingrese una letra para adivinar la palabra: ");

if (palabra.indexOf(pregunta) != -1) {
        for (let i=0;i<palabra.length; i++){
            if(palabra[i]==pregunta) 
            console.log ("Esta la letra: " + pregunta) // Tambien avisa si hay mas de una de esas letras
        //Deberia avisar y sustituir, DEBERIA!!
        } 
    } else { 
        intentos -= 1
        pregunta += 1 
        console.log("No se encuentra esa letra, se le resta un intento, le quedan: " + intentos)
    }
}


    /* Todo deberia estar adentro de un for o while??, para que re reitere hasta
    completar la palabra o se queden sin intentos.
    Ademas de mostrar de alguna manera como se van completando las casillas
    
    Hay que usar return ya sé*/
