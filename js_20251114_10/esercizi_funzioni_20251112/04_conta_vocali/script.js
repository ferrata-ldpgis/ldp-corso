/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.
function contaVocali(stringa) {
  const vocali = ['a', 'e', 'i', 'o', 'u'];
  let trovate = [];

  for (let i = 0; i < stringa.length; i++) {
    const char = stringa[i].toLowerCase();
    if (vocali.includes(char)) {
      trovate.push(char);
    }
  }

  return {
    numero: trovate.length,
    vocali: trovate
  };
}


// Invoca la funzione qui e stampa il risultato in console
const numeroVocali = contaVocali(word);

console.log(`Numero di vocali: ${numeroVocali.numero}`);
console.log(`Vocali trovate: ${numeroVocali.vocali.join(', ')}`);

console.log(`Vocali trovate: ${numeroVocali.numero}  (${numeroVocali.vocali.join(', ')})`);

//console.log(numeroVocali);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)