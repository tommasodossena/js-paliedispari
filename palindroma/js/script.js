/*
ESERCIZIO PAROLA PALINDROMA:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// 1 - Funzione per capire se la parola inserita è palindroma
function palindrome(str) {
    
    var strRev = "";
    for ( var i = str.length - 1; i >= 0; i-- ) { 
        strRev += str[i];
        if ( strRev == str ) {
            return true;
        }
    }
    return false;
}

// 2 - Chiedere all’utente di inserire una parola (+ piccola validazione)
var parola;

do {
    parola = prompt("Inserisci una parola");
} while ( !isNaN(parola) || parola == "" );

// 3 - Richiamare la funzione e stampare il risultato
if ( palindrome(parola) ) {
    console.log("La parola è palindroma");
} else {
    console.log("La parola non è palindroma");
}