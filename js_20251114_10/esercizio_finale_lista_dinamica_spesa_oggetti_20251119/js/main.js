// Definizioni array iniziali
let tasks = [
    {alimento:"latte", done:false},
    {alimento:"uova", done:false},
    {alimento:"pane", done:false},   
    {alimento:"burro", done:false},
    {alimento:"formaggio", done:false},
    {alimento:"frutta", done:false},
    {alimento:"verdura", done:false},   
    {alimento:"caffè", done:false}
];


// Recupero del form
const form = document.querySelector('#lista_dinamica');
console.log("form", form);

// Recupero del campo di input
const input = document.querySelector('#taskInput');
console.log("input", input);

// Recupero della lista UL degli elementi
const ul = document.querySelector('#lista');
console.log("ul", ul);


// Recupero del pulsante "Cancella lista"
const clearBtn = document.querySelector('#clearBtn');
console.log("clearBtn", clearBtn);

const exportBtn = document.querySelector('#exportCSV');
console.log("exportBtn", exportBtn);

//Funzione che aggiorna la lista in pagina
function renderTasks() {
    console.log("inizio renderTasks");
    ul.innerHTML = "";
    console.log("tasks renderTasks:", tasks);

    for (let i = 0; i < tasks.length; i++) {
        const li = document.createElement("li");
        li.style.marginBottom = "8px";
        const { alimento, done } = tasks[i];
        
        // Span che contiene il testo dell'elemento
        const span = document.createElement("span");
        span.textContent = alimento;
        span.style.marginRight = "10px";
        if (done) { span.style.textDecoration = "line-through"; }

        // Bottone CHECK
        const checkBtn = document.createElement("button");
        checkBtn.textContent = "✔";
        checkBtn.className = "checkBtn";
        checkBtn.style.marginInline = "5px";
        checkBtn.type = "button";
        checkBtn.dataset.action = "toggle";
		checkBtn.dataset.index = i;

        
        // Bottone DELETE 
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "✖";
        deleteBtn.className = "deleteBtn";
        deleteBtn.style.marginInline = "5px";
        deleteBtn.type = "button";
        deleteBtn.dataset.action = "remove";
		deleteBtn.dataset.index = i;

        //appendo gli elemnti al li
        li.appendChild(span);
        li.appendChild(checkBtn);
        li.appendChild(deleteBtn);
        ul.appendChild(li);
      
    }
}


// Event delegation: ascolto i click su tutta la UL
ul.addEventListener('click', function (event) {
    const action = event.target.dataset.action;
	const index = event.target.dataset.index;

    console.log(`ul.clicked.${action}`, index);

    if (!action) return;

        if (action === "toggle") {
            tasks[index].done = !tasks[index].done;
        }

        if (action === "remove") {
            tasks.splice(index, 1);
        }

        renderTasks();
});


// Gestione submit form (aggiunta nuova task con validazione)
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const alimento = input.value.trim();
    if (alimento < 3) {
        alert("Il testo deve contenere almeno 3 caratteri.");
        return;
    }

    const newElemento = {
		alimento,
		done: false
	};

    // Aggiungo task e done (nuove task: false => grigio/barrato)
    tasks.push(newElemento);
    console.log("tasks: ", tasks);
    input.value = "";

    // Chiamo renderTasks con ritardo di 500ms
    setTimeout(() => {
        renderTasks();
    }, 500); // 500ms di ritardo
});


// Pulsante "Cancella lista"
clearBtn.addEventListener('click', function () {
    tasks = [];
    done = [];
    renderTasks();
});

exportBtn.addEventListener('click', function () {
    if (tasks.length === 0) {
        alert("La lista è vuota!");
        return;
    }

    // Genera contenuto CSV
    let csvContent = "alimento,preso\n"; // intestazione
    for (let i = 0; i < tasks.length; i++) {
        let stato = tasks[i].done ? "preso" : "non preso";
        csvContent += `${tasks[i].alimento},${stato}\n`;
    }

    // Stampa in console
    console.log(csvContent);

    // Opzione per far scaricare il CSV come file
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "lista.csv");
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});



// Chiamata iniziale per riempire la lista
renderTasks();


