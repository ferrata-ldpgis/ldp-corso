//Cicolo 100-1 con controllo pari/dispari
for (let i = 100; i > 0; i--) {

	//Se il numero è dispari
	if (i % 2 != 0) {

		//Se il numero è multiplo di tre
		if (i % 3 == 0) {
			console.log(`Stampiamo il MULTIPLO di 3: ${i}`);
		} else {
			console.log(`Stampiamo il numero: ${i}`);

		}

	}

}

//Versione alternativa
for (let i = 100; i > 0; i--) {

	//Se il numero è dispari ed è divisibile per 3
	if (i%2 != 0 && i%3 == 0) {
		console.log(`Stampiamo il MULTIPLO di 3: ${i}`);
	} else if (i%2 != 0) {
		console.log(`Stampiamo il numero: ${i}`);
	}

}