/* 
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero se è dispari inseriscilo nell’array
*/

const dispari = [];

for(let i = 0; i < 6; i++){

  const numero = parseInt(prompt('Inserisci un numero'));

  if(numero % 2){
    dispari.push(numero);
  }
  console.log(dispari, numero);
}

