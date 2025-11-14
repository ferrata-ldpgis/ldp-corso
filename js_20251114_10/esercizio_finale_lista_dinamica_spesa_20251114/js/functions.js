
/**
 * Genera numeri casuali compresi tra min e max
 * 
 * @param {array}   
 * @returns 
 */
 function renderTasks(array) {
    ul.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        const li = document.createElement("li");
        li.textContent = tasks[i];
        ul.appendChild(li);
    }
}