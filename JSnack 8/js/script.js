/*
Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.
In questo caso possiamo sfruttare a nostro vantaggio il fatto che la funzione prompt restituisca una stringa anche se si è digitato un numero e recuperare una cifra alla volta usando il ciclo for per scorrere la stringa numerica
*/

let sommaWhile = 0;

for(let i = 0; i < 4; i++){
  const numeri = parseInt(prompt('Inserisci un numero di 4 cifre'));
  let risultato = somma(numeri);
  
  console.log(numeri);
}

const message2 = `
La somma dei numeri inseriti è ${sommaWhile}.
`
document.getElementById('output2').innerHTML = message2;