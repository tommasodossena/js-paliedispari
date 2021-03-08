/*
ESERCIZIO PARI O DISPARI
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// 1 - Chiedere all'utente di scegliere tra pari o dispari
var evenOrOdd = prompt("Pari o dispari");

while ( evenOrOdd != "pari" && evenOrOdd != "dispari" ) {
    evenOrOdd = prompt("Scrivi \"pari\" per scegliere pari o scrivi \"dispari\" per scegliere dispari");
}

console.log("L'utente ha scelto " + evenOrOdd);

// 2 - Chiedere all'utente di scegliere un numero tra 1 e 5
var number = parseInt(prompt("Scegli un number da 1 e 5"));

while (number < 1 || number > 5 || isNaN(number) ) {
    var number = parseInt(prompt("Valore non riconosciuto! digita un number da 1 e 5"));
}

console.log("L'utente ha scelto il numero " + number);

// 3 - Richiamare funzione numero random computer e somma numeri
var arbitrary = randomNumber();
console.log("La CPU ha scelto casualmente il numero " + arbitrary);

var amount = sumNumbers (number, arbitrary);
if (amount) {
    var result = "pari";
    console.log("La somma del numero scelto dall'utente e quello scelto casualmente dalla cpu è " + result);
} else {
    var result = "dispari";
    console.log("La somma del numero scelto dall'utente e quello scelto casualmente dalla cpu è " + result);
}
// 4 - Stampare l'esito del gioco
if (evenOrOdd == result) {
    alert("Bim, bum, bam! Congratulazioni, hai vinto.");
    console.log ("Vittoria utente");
} else {
    alert("Bim, bum, bam! Riprova, hai perso.");
    console.log ("Vittoria cpu");
}

// FUNCTIONS
function randomNumber() {
    var random = Math.floor(Math.random() * 5) + 1;
    return random;
}

function sumNumbers(num1, num2) {
    var sum = num1 + num2;
    if (sum % 2 == 0) {
        return true;
    }
    return false;
}


