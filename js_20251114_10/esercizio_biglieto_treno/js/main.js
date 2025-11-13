const eta_inserita= document.getElementById("categoria");
const km_inseriti= document.getElementById("percorso");
const costo = document.getElementById("costo");
const prezzo_km = 0.21;
let risultato;

//controllo se cambia la categoria dell'età
eta_inserita.addEventListener("change", function() {
    const eta = eta_inserita.value;
    console.log("eta:", eta);

    // Se c'è già un risultato visibile → reset e alert
    if (costo.value !== "" || results.innerHTML !== "") {
        costo.value = "";
        results.innerHTML = "";
        alert("È necessario ricalcolare il costo perché è cambiata la categoria.");
    }
});

//controllo se cambiano i km inseriti
km_inseriti.addEventListener("change", function() {
    //const km= km_inseriti.value;
    const km=parseFloat(km_inseriti.value);
    console.log("km:", km);

    // Se c'è già un risultato visibile → reset e alert
    if (costo.value !== "" || results.innerHTML !== "") {
        costo.value = "";
        results.innerHTML = "";
        alert("È necessario ricalcolare il costo perché è cambiato il percorso.");
    }
});

invia.addEventListener("click",  function() {

    //validazione
    if(isNaN(km_inseriti.value) || km_inseriti.value <= 0){
        alert("Inserisci un numero valido di chilometri.");
        return
    }

    if(eta_inserita.value === ""){
        alert("Seleziona una categoria valida.");
        return
    }

    risultato = calcolaPrezzo(km_inseriti.value, eta_inserita.value, prezzo_km);
    console.log("risultato:", risultato);
    
    costo.value = `${risultato.prezzoFinale} €`; 

    // Messaggio visivo
    results.innerHTML = `
        Il costo del biglietto è <strong>${risultato.prezzoFinale}</strong>.<br>
        Sconto applicato: <strong>${risultato.scontoPercentuale}%</strong>.
    `;
});