// Creo 6 array con 1 oggetto ciascuno

const obj1 = { nome: "Mario Rossi", ruolo: "Sviluppatore", email: "mario@example.com" };
const obj2 = { nome: "Luca Bianchi", ruolo: "Designer", email: "luca@example.com" };
const obj3 = { nome: "Anna Verdi", ruolo: "Project Manager", email: "anna@example.com" };
const obj4 = { nome: "Giulia Neri", ruolo: "Tester", email: "giulia@example.com" };
const obj5 = { nome: "Marco Blu", ruolo: "DevOps", email: "marco@example.com" };
const obj6 = { nome: "Sara Rosa", ruolo: "UX Researcher", email: "sara@example.com" };


// Raggruppo tutti gli array in un array di array
const objArray = [obj1, obj2, obj3, obj4, obj5, obj6];

console.log("objArray:", objArray);

const container = document.getElementById("container");

// Ciclo tutti i 6 array
objArray.forEach(obj => {
    console.log("Oggetto:", obj);
    
    // Creo la card
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="https://picsum.photos/200?random=${Math.random()}" alt="foto casuale">
        <h3>${obj.nome}</h3>
        <p><strong>Ruolo:</strong> ${obj.ruolo}</p>
        <p><strong>Email:</strong> ${obj.email}</p>
    `;

    container.appendChild(card);
});
