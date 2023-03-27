/*
Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
*/

const numero = prompt('Inserisci un numero');

const cubo = (Math.pow(numero, 3));

const message = `
Il cubo di ${numero} è ${cubo}
`
document.getElementById('output').innerHTML = message;