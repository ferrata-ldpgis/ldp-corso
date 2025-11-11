// If: esempio 1 su stringhe
// const stringaUno = prompt("Inserisci la prima stringa");
// const stringaDue = prompt("Inserisci la seconda stringa");

// if( stringaUno.length > stringaDue.length ){

// 	console.log(`${stringaUno} (${stringaUno.length}) è più lunga di ${stringaDue} (${stringaDue.length})`);

// } else if (stringaUno.length < stringaDue.length) {

// 	console.log(`${stringaDue} (${stringaDue.length}) è più lunga di ${stringaUno} (${stringaUno.length})`);

// } else {

// 	console.log(`${stringaUno} (${stringaUno.length}) è lunga quanto ${stringaDue} (${stringaDue.length})`);

// }


/****************************************************************************/

// If: esempio 2 su interi
const etaUno = parseInt( prompt("Inserisci l'età di Mario") );
const etaDue = parseInt( prompt("Inserisci l'età di Davide") );
let risultato = null;

if (etaDue > etaUno) {

	risultato = `Davide (${etaDue}) è più vecchio di Mario (${etaUno})`;

} else if (etaDue < etaUno) {

	risultato = `Mario (${etaUno}) è più vecchio di Davide (${etaDue})`;

} else if (etaDue == etaUno) {

	risultato = `Mario (${etaUno}) e Davide (${etaDue}) sono coetanei`;

} else {

	risultato = "Casistica non prevista, verifica i dati inseriti";

}

console.log(risultato);