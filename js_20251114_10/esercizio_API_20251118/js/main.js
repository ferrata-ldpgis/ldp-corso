
const containerElements = document.getElementById("container");

const urlAPI = "https://boolean-teachers.github.io/mock/api/members";

axios.get(`${urlAPI}`)
  .then(response => {
    console.log("response: ", response);
    console.log('Dati ricevuti:', response.data);

    //throw new Error("Errore di prova per testare il catch");

    const risultati = response.data;
    let htmlResults='';

    risultati.forEach(risultato => {
      console.log('risultato:', risultato);
      const risultatoCard = `
        <div class="risultato-card">
          <img src="${risultato.img}" alt="foto casuale"> 
          <h3>${risultato.name}</h3>
          <p>Ruolo: ${risultato.role}</p>
          <p>Email: ${risultato.email}</p>
        </div>
      `;

      //containerElements.innerHTML += risultatoCard;
        htmlResults += risultatoCard;
    });

    containerElements.innerHTML = htmlResults;
  })
  .catch(error => {
    console.error('Errore nella richiesta:', error);
    resultElements.innerHTML = `<p class="error">Si è verificato un errore nella richiesta. Riprova più tardi.${error.message}</p>`;
    // if(error.response){
    //     resultElements.innerHTML = `<p class="error">Si è verificato un errore nella richiesta. Riprova più tardi.${error.message}</p>`;
    // } else {
    //     resultElements.innerHTML = `<p class="error">Si è verificato un errore nella richiesta. Riprova più tardi.${error.message}</p>`;
    // }
  });