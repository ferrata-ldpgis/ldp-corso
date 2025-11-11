const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

//metodo diretto senza ciclo:
////const reversedTeachers = teachers.slice().reverse();

//metodo con ciclo
const reversedTeachers = [];
for (let i = teachers.length - 1; i >= 0; i--) {
  //const teacher = teachers[i];
  //console.log("teacher at index", i, "is", teacher);
  reversedTeachers.push(teachers[i]);
} 

console.log("Reversed Teachers:", reversedTeachers);
console.log("Original Teachers:", teachers);


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

//metodo diretto senza ciclo:
////const longNames = teachers.filter(name => name.length >= 5);

//metodo con ciclo
const longNames = [];
const arrayLength = teachers.length;
for (let i = 0; i < arrayLength; i++) {
  //const teacher = teachers[i];
  //console.log("teacher at index", i, "is", teacher);
  if (teachers[i].length >= 5) {
    longNames.push(teachers[i]);
  }
}

console.log("Long Names:", longNames);

// 3. Rimuovi 'Ed' dall'array teachers
// e salva il risultato nell'array teachers senza 'Ed'
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] === 'Ed') {
    teachers.splice(i, 1);
    break; // interrompi il ciclo una volta trovata 'Ed'
  }
}
console.log("Teachers after removing Ed:", teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent

//metodo diretto senza ciclo:
//const isFabioPresent = null;
////const isFabioPresent = teachers.includes('Fabio');

//metodo con ciclo
let isFabioPresent = null;
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] === 'Fabio') {
    isFabioPresent = true;
    break; // interrompi il ciclo una volta trovata 'Ed'
  }
}
console.log("Is Fabio Present?", isFabioPresent);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
//const teachersString = null;

//metodo diretto senza ciclo:
//const teachersString = teachers.join(', ');
//console.log("Teachers String:", teachersString);


//metodo con ciclo
let teachersString = '';

for (let i = 0; i < teachers.length; i++) {
  teachersString += teachers[i];
  if (i < teachers.length - 1) {
    teachersString += ', '; // aggiunge la virgola solo se non è l'ultimo elemento
  }
}
console.log("Teachers String:", teachersString);
