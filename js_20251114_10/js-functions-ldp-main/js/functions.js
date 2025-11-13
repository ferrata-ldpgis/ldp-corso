/**
 * Creo una funzione che per un numero mi restituisce "pari" o "dispari"
 * 
 * @param {number} number Il numero da verificare
 * @returns {string} Il risultato "pari" o "dispari"
 */
function pariOrDispari(number) {

	return (number%2 == 0) ? "pari" : "dispari";
}

/**
 * Genera numeri casuali compresi tra min e max
 * 
 * @param {number} min Numero minimo possibile
 * @param {number} max Numero massimo possibile
 * @returns {number} Numero casuale tra min e max
 */
function getRandomNumber(min = 0, max = 100) {

	// if(min===undefined) { min = 0; }
	// if(max===undefined) { max = 100; }

	return Math.floor(Math.random() * (max - min +1) + min);
}