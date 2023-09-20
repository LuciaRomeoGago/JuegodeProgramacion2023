const palabra = "promocionar";
let intentos = 3;
let adivinar = []

while (intentos > 0 && adivinar !== palabra) {
pregunta = prompt ("Ingrese una letra para adivinar la palabra: ");

if (palabra.indexOf(pregunta) != -1) {
        for (let i=0;i<palabra.length; i++){
            if(palabra[i]==pregunta) 
            console.log ("Esta la letra: " + pregunta +  "en la posición: " + i) // Tambien avisa si hay mas de una de esas letras
        adivinar.push(pregunta) 
        //Deberia avisar y sustituir, DEBERIA!!
        } 
    } else { 
        intentos -= 1
        pregunta += 1 
        console.log("No se encuentra esa letra, se le resta un intento, le quedan: " + intentos)
    }
}
if (adivinar === palabra) {
    console.log("Felicitaciones, ha ganado, la palabra era: "+palabra);
} else {
    console.log ("Lo siento, perdió. La palabra era: " + palabra)
}


    /* Todo deberia estar adentro de un for o while??, para que re reitere hasta
    completar la palabra o se queden sin intentos.
    Ademas de mostrar de alguna manera como se van completando las casillas
    
    Hay que usar return ya sé

}
    

const palabras = ["aprobar", "promocionar", "cursar", "rendir"];
const palabra = palabras[Math.floor(Math.random() * palabras.length)];
let palabraoculta = "_".repeat(palabra.length);
let intentos = 6;

while (intentos > 0 && palabraoculta.includes("_")) {
  console.log("Palabra: " + palabraoculta);
  console.log("Le quedan: " + intentos + " intentos");

  const letra = prompt("Ingrese una letra: ");
  if (!/^[a-zA-Z]+$/.test(letra)) { // desde la a miniscula hasta la Z mayuscula, sino es un simbolo y se toma como falso
    console.log(letra + " no es una letra, por favor ingrese una: ");
  }
  
  else if (palabra.includes(letra)) { // mas facil un includes que el indexOf 
    for (let i = 0; i < palabra.length; i++) {
      if (palabra[i] === letra) {
        palabraoculta = palabraoculta.substring(0, i) + letra + palabraoculta.substring(i + 1); 
      }
    }
  }
  
  else {
    console.log ("Ha ingresado la letra: " + letra + ", la cual no se encuentra en la palabra")
    intentos--;
  }
}


if (palabraoculta === palabra) {
  console.log("Felicitaciones, la palabra era: " + palabra + "!");
} else {
  console.log("Lo siento, ha perdido, la palabra era: " + palabra+".");
}
*/