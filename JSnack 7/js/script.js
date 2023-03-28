/*
Stampa le potenze di 2 fino a 1000.
Questo snack cela un trabocchetto:  1000 non è una potenza di 2 perciò per fermarsi prima di 1000 bisogna stampare la potenza prima di incrementarla perché altrimenti il controllo viene fatto dopo e si sfora.
*/

let counter = 1;
let risultato = '';

while((Math.pow(2, [counter])) < 1000){
  
  risultato = (Math.pow(2, [counter]));
  counter++;

  console.log(risultato);
}

//Soluzione di Stefano

const limiteRisultato = 1000;
let potenza = 1;

while(potenza < limiteRisultato){
  console.log(limiteRisultato);
  potenza ** 2;
}