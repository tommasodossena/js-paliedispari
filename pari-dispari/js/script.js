/*
ESERCIZIO PARI O DISPARI
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// FUNZIONI
function randomNumber(min , max) {
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
}

function evenOdd(num1, num2) {
    var sum = num1 + num2;
    if (sum % 2 == 0) {
        return "pari";
    }
    return "dispari";
}

// 1 - Chiedere all'utente di scegliere tra pari o dispari
var scelta = prompt("Pari o dispari");

while ( scelta != "pari" && scelta != "dispari" ) {
    scelta = prompt("Scrivi \"pari\" per scegliere pari o scrivi \"dispari\" per scegliere dispari");
}

console.log("L'utente ha scelto " + scelta);

// 2 - Chiedere all'utente di scegliere un numero tra 1 e 5
var numero = parseInt(prompt("Inserisci un numero da 1 e 5"));

while (numero < 1 || numero > 5 || isNaN(numero) ) {
    var numero = parseInt(prompt("Valore non riconosciuto! digita un numero da 1 e 5"));
}

console.log("L'utente ha scelto il numero " + numero);

// 3 - Richiamare funzione numero random computer e somma numeri
var numeroCpu = randomNumber(1, 5);
console.log("La CPU ha scelto casualmente il numero " + numeroCpu);

var esito = evenOdd (numero, numeroCpu);

// 4 - Stampare l'esito del gioco
if (esito == scelta) {
    alert("Bim, bum, bam! Congratulazioni, hai vinto.");
    console.log ("Vittoria utente :)");
} else {
    alert("Bim, bum, bam! Riprova, hai perso.");
    console.log ("Vittoria cpu :(");
}