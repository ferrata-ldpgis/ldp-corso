"use strict";

// for (let i = 0; i < 10; i++) {
// 	const numero = getRandomNumber(0, 100);
// 	let risultato = pariOrDispari(numero);
// 	console.log(`Il numero ${numero} è ${risultato}`);
// }

//Dichiarazione degli event listener
document.querySelector("#start").addEventListener("click", startTimer);
document.querySelector("#stop").addEventListener("click", stopTimer);
document.querySelector("#reset").addEventListener("click", resetTimer);
