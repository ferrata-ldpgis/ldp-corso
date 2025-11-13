
/**
 * Genera numeri casuali compresi tra min e max
 * 
 * @param {km} km Numero di chilometri  
 * @param {categoria} Categoria dell'utente (Minorenne, Over65, etc.)
 * @param {km_prezzo}  Prezzo per chilometro
 * @param {sconto}  Sconto da applicare
 * @returns {prezzo} Prezzo calcolato del biglietto
 * @returns {sconto} Sconto applicato
 */
 function calcolaPrezzo(km, categoria, km_prezzo, sconto = 0) {

    //validazione
    if(isNaN(km) || km <= 0){
        alert("Inserisci un numero valido di chilometri.");
        return;
    }

    if(categoria === ""){
        alert("Seleziona una categoria valida.");
        return;
    }

    // Calcolo prezzo base
    let prezzo = parseFloat(km) * km_prezzo;
    let scontoPercentuale = sconto;
    console.log("prezzo base: ", prezzo);
    console.log("scontoPercentuale: ", scontoPercentuale);

    // Applica sconti
    if (categoria === "Minorenne") {
        prezzo -= prezzo * 0.2; // sconto 20%
        scontoPercentuale = 20;
    } else if (eta_inserita.value === "Over65") {
        prezzo -= prezzo * 0.3; // sconto 30%
        scontoPercentuale = 30;
    }

    // Mostra risultato
    const prezzoFinale = prezzo.toFixed(2);
    console.log("prezzo:", `Il costo del biglieto è: ${prezzoFinale} €`);

    return {
        prezzoFinale: `${prezzoFinale} €`,
        scontoPercentuale: scontoPercentuale
    };
};