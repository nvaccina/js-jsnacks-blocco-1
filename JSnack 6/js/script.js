/*
Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
*/

const numero = parseInt(prompt('Inserisci un numero'));

for (let i = 1; i <= numero; i++){
  const cubo = (Math.pow(i, 3));
  console.log(cubo);
}
