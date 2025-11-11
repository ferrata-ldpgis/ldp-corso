const teachers = [
	'Nathan',
	'Ed',
	'Fabio',
	'Phil',
	'Carlo',
	'Lewis',
	'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

console.log("Array originale: ", teachers);

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [];

for (let i = teachers.length-1; i >= 0; i--) {
  const teacher = teachers[i];
  reversedTeachers.push(teacher);
}

// OPPURE:
// const reversedTeachers = teachers.reverse();
console.log("Reserved Teachers: ", reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
const arrayLength = teachers.length;

for (let i = 0; i < arrayLength; i++) {
	const teacher = teachers[i];

	if(teacher.length >= 5) {
		longNames.push(teacher);
	}

}
console.log("Long Names:", longNames);

// 3. Rimuovi 'Ed' dall'array teachers
const indiceDiEd = teachers.indexOf("Ed");

if(indiceDiEd !== -1) {
	teachers.splice(indiceDiEd, 1);
}

console.log(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
let found = false;

for (let i = 0; i < teachers.length; i++) {
  const teacher = teachers[i];
  console.log("Cerco fabio per indice: ", i);
  if(teacher=="Fabio") {
    found=true;
    break;
  }
}

const isFabioPresent = found;
//OPPURE:
// const isFabioPresent = ( teachers.indexOf("Fabio") != -1 );
// const isFabioPresent = teachers.includes("Fabio");
console.log(isFabioPresent);



// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
let stringone = "";

for (let i = 0; i < teachers.length; i++) {
  const element = teachers[i];

  if(i == teachers.length - 1) {
    stringone += element;
  } else {
    stringone += element + ", ";
  }
}

const teachersString = stringone;
//OPPURE:
// const teachersString = teachers.join(", ");
console.log(teachersString);