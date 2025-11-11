const students = [ "Michele", "Fabio", "Roberto" ];

for (let i = 0; i < students.length; i++) {

	const student = students[i];

	console.log(i, student);
	
}

const numbers = [ 22, 31, 17, 44, 89, 12 ];

for (let i = 0; i < numbers.length; i++) {

	const number = numbers[i];
	
	// debugger;

	if( number%2 == 0) {
		console.log(number);
	}
	
}


const bases = [ 1, 2, 3, 4, 5 ];

for (let i = 0; i < bases.length; i++) {
	let base = bases[i];
	
	console.log(`${base} x ${base} = ${base*base}`);

	//provo a mutare l'elemento in array per ottenere un array di quadrati
	//NON FUNZIONA !!
	// base = base * base;

	//FUNZIONA!!
	bases[i] = bases[i] * bases[i];
}

console.log(bases);