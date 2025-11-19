const input = document.getElementById("citta");
const output = document.getElementById("output");
const btnCerca = document.getElementById("btnCerca");

const urlCoord = "https://geocoding-api.open-meteo.com/v1/search?name=NOME";
const urlMeteo = "https://api.open-meteo.com/v1/forecast?latitude=LAT&longitude=LON&current=temperature_2m";


/**
 * Stampa la temperatura meteo nell'elemento container
 * 
 * @param {string} citta - Il nome della città da cercare.
 * @param {temperatura}  temperatura - La temperatura attuale della città.
 * @returns {output} - Restituisce l'HTML formattato con il meteo della città.
 * @throws {Error} - Se i parametri non sono validi.
 */
function stampaMeteo(citta,temperatura) {
  console.log("Stampa meteo:", citta, temperatura);
  // Validazione citta
	if (citta === undefined || citta === null) {
		throw new Error("Città non valida");
	}

  // Validazione temperatura
	if (temperatura === undefined || temperatura === null) {
		throw new Error("Temperatura non valida");
	}
    
    const result = `
        <p><strong>${citta}</strong> -  Temperatura attuale: ${temperatura}°C</p>
    `;
   
    return result;
}

/**
 * Cerca le coordinate di una città usando l'API di Open-Meteo.
 * @param {string} citta - Il nome della città da cercare.
 * @returns {Object} - Restituisce l'oggetto con le info sulla città.
 * @throws {Error} - Se la città non viene trovata o c'è un errore di rete o i parametri non sono validi.
 */
function cercaCoordinate(citta) {

  // Validazione citta
	if (citta === undefined || citta === null) {
		throw new Error("Città non valida");
	}

	const chiamata = axios.get(`${urlCoord.replace('NOME',encodeURIComponent(citta))}`).then(response => {

    const risultati = response.data.results; 

    if (!risultati || risultati.length === 0) {
      throw new Error("Città non trovata");
    }

    const primo = risultati[0];  //solo il primo risultato
    console.log("Primo risultato:", primo);

    // Restituisce il primo risultato
    return primo;
	});

	return chiamata;

}

/**
 * Recupera il meteo corrente da Open-Meteo.
 * @param {number} lat - Latitudine della città.
 * @param {number} lon - Longitudine della città.
 * @returns {Object} - Restituisce L'oggetto meteo.
 * @throws {Error} - Se ci sono errori di rete o coordinate non valide.
 */
function ottieniMeteo(lat, lon) {
	// Validazione coordinate
	if (!lat || !lon) {
		throw new Error("Coordinate non valide");
	}

	const chiamata = axios.get(`${urlMeteo.replace('LAT',lat).replace('LON',lon)}`).then(response => {
		// Verifica che i dati meteo siano presenti
		//console.log("response meteo: ", response);
    console.log('Dati ricevuti meteo dettaglio:', response.data.current);
            
    if (!response.data.current) new Error("Errore risposta meteo");

    const meteo = response.data.current;
    return meteo;
	});

	return chiamata;
}

btnCerca.addEventListener("click", () => {
 
  const citta = input.value.trim();

   if (citta === "") {
        output.innerHTML = `<p style="color:red;">Inserisci una città.</p>`;
        btnCerca.disabled = false;
        return;
    }

    output.innerHTML = "<p>Caricamento...</p>";
    btnCerca.disabled = true; // Previene click multipli
  
   //console.log("citta: ", encodeURIComponent(citta)) 
   cercaCoordinate(citta)
		.then(coord => {
			// Chiamata meteo con le coordinate ottenute
			ottieniMeteo(coord.latitude, coord.longitude)
				.then(meteo => {
          output.innerHTML = stampaMeteo(coord.name, meteo.temperature_2m);
					btnCerca.disabled = false;// Riabilito il bottone
				})
				.catch(error => {
					// Catch specifico per errori di ottieniMeteo e mostraMeteo
					console.error('Errore nella richiesta:', error);
          output.innerHTML = `<p class="error">Si è verificato un errore nella richiesta, ${error.message}</p>`;
          btnCerca.disabled = false; // Riabilito il bottone
				});
		})
		.catch(error => {
        // Catch specifico per errori di cercaCoordinate
        console.error('Errore nella richiesta:', error);
        output.innerHTML = `<p class="error">Si è verificato un errore nella richiesta, ${error.message}</p>`;
        btnCerca.disabled = false; // Riabilito il bottone
      })


  });

