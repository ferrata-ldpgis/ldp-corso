// Array vuoto che conterrà le attività
let tasks = [];
let done = [];

// Recupero del form
const form = document.querySelector('#lista_dinamica');
console.log("form", form);

// Recupero del campo di input
const input = document.querySelector('#taskInput');
console.log("input", input);

// Recupero della lista UL degli elementi
const ul = document.querySelector('ul');
console.log("ul", ul);


// Recupero del pulsante "Cancella lista"
const clearBtn = document.querySelector('#clearBtn');
console.log("clearBtn", clearBtn);

// Popolo tasks con gli elementi della lista iniziale
const initialItems = ul.querySelectorAll('li');
//initialItems.forEach(li => tasks.push(li.textContent));
initialItems.forEach((li, index) => {
    tasks.push(li.textContent);
    //done.push(index % 2 === 1); // gli indici dispari sono "done" inizialmente
    done.push(true); // gli indici dispari sono "done" inizialmente
});
console.log("tasks iniziali", tasks);
console.log("done", done);

// function renderTasks() {
//     // Svuoto la lista
//     ul.innerHTML = "";

//     // Ricostruisco ogni elemento <li> partendo dall'array tasks
//     for (let i = 0; i < tasks.length; i++) {
//         const li = document.createElement("li");
//         console.log("tasks", tasks[i]);
//         li.textContent = tasks[i];   // testo dell’attività
//         ul.appendChild(li);
//     }
// }

// Funzione per aggiornare la lista
function renderTasks() {
    ul.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        const li = document.createElement("li");

        // Creo un input per ogni task
        const taskInput = document.createElement("input");
        taskInput.type = "text";
        taskInput.value = tasks[i];

        // Colorazione in base al done[i]
        if (done[i]) {
            taskInput.style.color = "white";   // task iniziali
            taskInput.style.backgroundColor = "black";
        } else {
            taskInput.style.color = "green";   // nuove aggiunte
            taskInput.style.backgroundColor = "black";
        }

        li.appendChild(taskInput);
        ul.appendChild(li);
    }
}


// Gestione dell'aggiunta di una nuova task
form.addEventListener('submit', function (event) {
    event.preventDefault(); // evita il refresh della pagina

    const newTask = input.value.trim(); // leggo il valore dell'input

    if (newTask.length < 3) {
        alert("Il testo deve contenere almeno 3 caratteri.");
        return; // blocco l'inserimento
    }

    if (newTask === "") {
        alert("Il testo inserito non è valido.");
        return; // se è vuoto, non fare nulla
    }

    tasks.push(newTask); // aggiungo all'array
    done.push(false); // la nuova task non è "done"

    input.value = ""; // pulisco l'input

    renderTasks(); // aggiorno la lista
});


// Quando clicco cancella lista
clearBtn.addEventListener('click', function () {
    tasks = [];     // svuoto l'array
    done = [];      // svuoto l'array done
    renderTasks();  // aggiorno la lista sullo schermo
});