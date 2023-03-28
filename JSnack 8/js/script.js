/*
Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.
In questo caso possiamo sfruttare a nostro vantaggio il fatto che la funzione prompt restituisca una stringa anche se si è digitato un numero e recuperare una cifra alla volta usando il ciclo for per scorrere la stringa numerica
*/

const numeroInserito = prompt('Inserisci un numero di 4 cifre');
let somma = 0;

for (let i = 0; i < numeroInserito.length; i++){
  somma += parseInt(numeroInserito[i]);
}

const message = `
La somma dei numeri che compongono ${numeroInserito} è ${somma}.
`
document.getElementById('output').innerHTML = message;
