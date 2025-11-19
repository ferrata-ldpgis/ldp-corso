let a, b;

//copio lo stesso oggetto: b referenzia a
//non funziona neanche con primitive
a = [ "luca", "mario", "marco" ];
b = a;

b[1] = "test";
b.push("altro");

console.log(a);
//ANCHE IN A: "mario" è diventato "test"
//ANCHE IN A: è stato pushato il valore
//A e B sono lo stesso oggetto con due nomi diversi

/********************************************/

//array di primitive, spread OK
//lo shallow copia correttamente valori primitive
a = [ "luca", "mario", "marco" ];
b = [...a];

b[1] = "test";

console.log( a[1] ); //nessuna modifica in array originale

/********************************************/

//array di oggetti, spread e assign: KO
a = [ {nome: "luca" }, {nome: "mario" } ];

//lo shallow copia solo referenze in caso di valori oggetto
b = [...a];
b[1].nome = "test";
console.log( a[1].nome ); //dato originale modificato nonostante spread

//stesso problema con Object.assign();
b = Object.assign({}, a);
b[1].nome = "test";
console.log( a[1].nome ); //dato originale modificato nonostante spread

/********************************************/

//array con dati complessi annidati, soluzioni possibili a seconda dei casi
a = [ {nome: "luca" }, {nome: "mario" } ];

//serializzazione/deserializzazione: molto spesso sufficiente
//gestisce solo dati compatibili con JSON: niente Map, Set, RegEx, Buffer di byte e simili
//anche dati undefined e funzioni vengono rimossi
//gGli oggetti Date vengono convertiti in una stringa
//lento su oggetti grandi
b = JSON.parse(JSON.stringify(a));
console.log("b JSON parse", b);

//gestisce casi più complessi. più performante. errori più chiari.
b = structuredClone(a);
console.log("b structuredClone", b);
