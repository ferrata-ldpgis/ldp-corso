

for (let i = 1; i <= 100; i++) {
 let risultato = null;
  console.log(`Stampa i numeri ${i}`)
  if (i % 3 === 0 && i % 5 === 0) {
    risultato = `Stampa i numeri ${i} - FizzBuzz`;
  } else if (i % 3 === 0) {
    risultato = `Stampa i numeri ${i} - Fizz`;
  } else if (i % 5 === 0 ) {
    risultato = `Stampa i numeri ${i} - Buzz`;
  } else {
    risultato = `Stampa i numeri ${i}`;
  }

  console.log(risultato);
}