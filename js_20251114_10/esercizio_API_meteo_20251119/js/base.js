const input = document.getElementById("citta");
const output = document.getElementById("output");
const btnCerca = document.getElementById("btnCerca");

let lat='';
let lon='';

const urlCoord = "https://geocoding-api.open-meteo.com/v1/search?name=NOME";
const urlMeteo = "https://api.open-meteo.com/v1/forecast?latitude=LAT&longitude=LON&current=temperature_2m";

//const citta=prompt("Inserisci il nome della città per conoscere il meteo:");
//console.log("citta: ", citta);
//console.log(`${urlCoord.replace('NOME',citta)}`);

btnCerca.addEventListener("click", () => {
 
  const citta = input.value.trim();

    if (citta === "") {
        output.innerHTML = `<p style="color:red;">Inserisci una città.</p>`;
        return;
    }

    output.innerHTML = "<p>Caricamento...</p>";
    btnCerca.disabled = true; // Previene click multipli

    //console.log("citta: ", encodeURIComponent(citta))
    axios.get(`${urlCoord.replace('NOME',encodeURIComponent(citta))}`)
      .then(response => {
        //console.log("response: ", response);
        console.log('Dati ricevuti:', response.data);

        const risultati = response.data.results; 

        if (!risultati || risultati.length === 0) {
          console.error("Nessun risultato trovato");
          output.innerHTML = `<p class="error">Nessun risultato trovato</p>`;
          btnCerca.disabled = false; // Riabilito il bottone
          return;
        }

        const primo = risultati[0];  //solo il primo risultato
        console.log("Primo risultato:", primo);

        // esempio: ottenere latitudine e longitudine
        lat = primo.latitude;
        lon = primo.longitude;
        console.log("Lat:", lat, "Lon:", lon);

        if(lat !== '' && lon !== '') {
          axios.get(`${urlMeteo.replace('LAT',lat).replace('LON',lon)}`)
          .then(response => {
            //console.log("response meteo: ", response);
            //console.log('Dati ricevuti meteo:', response.data);
            console.log('Dati ricevuti meteo dettaglio:', response.data.current);
            
            if (!response.data.current) new Error("Errore risposta meteo"); // evita errori se la seconda chiamata fallisce

            const temperatura = response.data.current.temperature_2m;

            output.innerHTML = `
                <p><strong>${citta}</strong> -  Temperatura attuale: ${temperatura}°C</p>
            `;
            btnCerca.disabled = false; // Riabilito il bottone
          })
          .catch(error => {
            console.error('Errore nella richiesta:', error);
            output.innerHTML = `<p class="error">Si è verificato un errore nella richiesta. Riprova più tardi.${error.message}</p>`;
            btnCerca.disabled = false; // Riabilito il bottone
          });
        }

      })
      .catch(error => {
        console.error('Errore nella richiesta:', error);
        output.innerHTML = `<p class="error">Si è verificato un errore nella richiesta. Riprova più tardi.${error.message}</p>`;
        btnCerca.disabled = false; // Riabilito il bottone
      })

  });
