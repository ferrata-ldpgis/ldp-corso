const students = [ "Michele", "Fabio", "Roberto" ];

for (const student of students) {
	console.log(student);
}



const numbers = [ 22, 31, 17, 44, 89, 12 ];

for (const number of numbers) {
	
	// debugger;

	if( number%2 == 0) {
		console.log(number);
	}

}



const bases = [ 1, 2, 3, 4, 5 ];

for (let base of bases) {
	
	console.log(`${base} x ${base} = ${base*base}`);

	//provo a mutare l'elemento in array per ottenere un array di quadrati
	//NON FUNZIONA!!
	base = base * base;

}

console.log(bases);