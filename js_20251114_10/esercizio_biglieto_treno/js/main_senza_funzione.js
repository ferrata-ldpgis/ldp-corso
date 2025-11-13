const eta_inserita= document.getElementById("categoria");
const km_inseriti= document.getElementById("percorso");
//const costo = document.getElementById("costo");
//const invia = document.getElementById("invia"); 
const prezzo_km = 0.21;
let prezzo;
let scontoPercentuale;

eta_inserita.addEventListener("change", function() {
    const eta = eta_inserita.value;
    console.log("eta:", eta);
});

km_inseriti.addEventListener("change", function() {
    //const km= km_inseriti.value;
    const km=parseFloat(km_inseriti.value);
    console.log("km:", km);
});

invia.addEventListener("click", function() {

    //validazione
    if(isNaN(km_inseriti.value) || km_inseriti.value <= 0){
        alert("Inserisci un numero valido di chilometri.");
        return;
    }

    if(eta_inserita.value === ""){
        alert("Seleziona una categoria valida.");
        return;
    }

    // Calcolo prezzo base
    prezzo = parseFloat(km_inseriti.value) * prezzo_km;
    scontoPercentuale = 0; 
    console.log("prezzo base: ", prezzo);
    console.log("scontoPercentuale: ", scontoPercentuale);

    // if(eta_inserita.value == "Minorenne"){
    //     //sconto del 20%
    //     prezzo = (parseInt(km_inseriti.value) * prezzo_km) - ((parseInt(km_inseriti.value) * prezzo_km) * 0.2);
    // } else if(eta_inserita.value == "Maggiorenne"){
    //     //prezzo pieno
    //     prezzo = (parseInt(km_inseriti.value) * prezzo_km);
    // } else if(eta_inserita.value == "Over65"){
    //     //sconto del 30%
    //     prezzo = (parseInt(km_inseriti.value) * prezzo_km) - ((parseInt(km_inseriti.value) * prezzo_km) * 0.3);
    // }

    // Applica sconti
    if (eta_inserita.value === "Minorenne") {
        prezzo -= prezzo * 0.2; // sconto 20%
        scontoPercentuale = 20;
    } else if (eta_inserita.value === "Over65") {
        prezzo -= prezzo * 0.3; // sconto 30%
        scontoPercentuale = 30;
    }

    // Mostra risultato
    const prezzoFinale = prezzo.toFixed(2);
    console.log("prezzo:", `Il costo del biglieto è: ${prezzoFinale} €`);

    costo.value = `${prezzoFinale} €`; 
    
    // Messaggio visivo
    risultato.innerHTML = `
        Il costo del biglietto è <strong>${prezzoFinale} €</strong>.<br>
        Sconto applicato: <strong>${scontoPercentuale}%</strong>.
    `;
});