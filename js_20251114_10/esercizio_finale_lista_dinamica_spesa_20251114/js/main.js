// Definizioni array iniziali
let tasks = [
    "latte",
    "uova",
    "pane",
    "burro",
    "formaggio",
    "frutta",
    "verdura",
    "caffè"
];
let done = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
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

// funzione helper per applicare stile allo span in base a done booleano
function applyStyleToSpan(span, isDone) {
    if (isDone) {
        span.style.color = "#aaa";
        span.style.textDecoration = "line-through";
    } else {
        span.style.color = "white"; 
        span.style.textDecoration = "none";
    }
}


//Funzione che aggiorna la lista in pagina
function renderTasks() {
    console.log("inizio renderTasks");
    ul.innerHTML = "";
    console.log("tasks renderTasks:", tasks);
    console.log("done renderTasks:", done);
    for (let i = 0; i < tasks.length; i++) {
        const li = document.createElement("li");
        li.style.marginBottom = "8px";
        li.dataset.index = i; // utile per trovare l'indice se serve
        
        // Span che contiene il testo dell'elemento
        const span = document.createElement("span");
        span.textContent = tasks[i];
        span.style.marginRight = "10px";

        // Applica lo stile iniziale in base a done[i]
        applyStyleToSpan(span, done[i]);


        // Bottone CHECK
        const checkBtn = document.createElement("button");
        checkBtn.textContent = "v";
        checkBtn.className = "checkBtn";
        checkBtn.style.marginInline = "5px";
        checkBtn.type = "button";

        
        // Bottone DELETE 
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "x";
        deleteBtn.className = "deleteBtn";
        deleteBtn.style.marginInline = "5px";
        deleteBtn.type = "button";

        //appendo gli elemnti al li
        li.appendChild(span);
        li.appendChild(checkBtn);
        li.appendChild(deleteBtn);
        ul.appendChild(li);
      
    }
}


// Event delegation: ascolto i click su tutta la UL
ul.addEventListener('click', function (event) {
    const target = event.target;
    console.log("target", target);

    // Se è stato cliccato il bottone CHECK
    if (target.matches('button.checkBtn')) {
        const li = target.closest('li');  //Cerca il primo elemento <li> che contiene quel bottone
        if (!li) return;  //Se per qualche motivo non lo trova esce dalla funzione
        const index = Array.prototype.indexOf.call(ul.children, li);  //Ottiene la posizione dell'elemnto <li> all’interno della lista ul
        if (index === -1) return;  //Se l’elemento non è stato trovato tra i figli esce dalla funzione

        // aggiorno lo stato nell'array done
        done[index] = true;

        // Applico immediate style allo span relativo (SENZA chiamare renderTasks)
        const span = li.querySelector('span');
        if (span) applyStyleToSpan(span, true);
        return;
    }

    // Se è stato cliccato il bottone X (mark as deleted)
    if (target.matches('button.deleteBtn')) {
        const li = target.closest('li');  //Cerca il primo elemento <li> che contiene quel bottone
        if (!li) return;  //Se per qualche motivo non lo trova esce dalla funzione.
        const index = Array.prototype.indexOf.call(ul.children, li);  //Ottiene la posizione dell'elemnto <li> all’interno della lista ul
        if (index === -1) return; ////Se l’elemento non è stato trovato tra i figli esce dalla funzione

        // aggiorno lo stato nell'array done
        done[index] = false;

        // Applico immediate style allo span relativo (SENZA chiamare renderTasks)
        const span = li.querySelector('span');
        if (span) applyStyleToSpan(span, false);
        return;
    }
});


// Gestione submit form (aggiunta nuova task con validazione)
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const newTask = input.value.trim();
    if (newTask.length < 3) {
        alert("Il testo deve contenere almeno 3 caratteri.");
        return;
    }

    // Aggiungo task e done (nuove task: false => grigio/barrato)
    tasks.push(newTask);
    done.push(false);
    console.log("tasks: ", tasks);
    console.log("done: ", done);
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
        csvContent += `${tasks[i]},${done[i]}\n`;
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


