console.log("JS OK");

/* 
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampare (in console)
<br>
<br>

- **0** Mi prepraro le variabili che contengono i 2 risultati.
- **1** Genero tramite la funzion RANDOM un numero da 0 a 6 da assegnare all'utente.
- **2** Genero tramite la funzion RANDOM un numero da 0 a 6 da assegnare al computer.
- **3** Eseguo un ciclo "IF" per capire chi tra l'utente o il pc ha ottenuto il punteggio più alto.
  **SE HA VINTO L'utente**
  - Gli do in console il messaggio "bravo hai vinto"
  **SE HA VINTO il computer**
  - Gli do in console il messaggio "Peccato non hai vinto"
  **4** Inserisco l'elemento in pagina
**FINE**  
*/

/*---------------------------------------
        OPERAZIONI PRELIMINARI
---------------------------------------*/

// # 0 Recupero l'elemento dal DOM
const resultElement = document.getElementById("result");

// # 1 Setto le varibili e trovo i numeri random
let PCresult = Math.floor(Math.random() * 6) + 1;
let USERresult = Math.floor(Math.random() * 6) + 1;

console.log(PCresult);
console.log(USERresult);

let result = "Pareggio!";

function casuale() {
  num = Math.round(Math.random() * 100);
  document.getElementById("casuale").innerHTML = "Risultato uscito " + num;
}

/*---------------------------------------
        PROGRAMMA
---------------------------------------*/

// # 2 Controllo chi ha vinto.
if (USERresult > PCresult) {
  result = "Ha vinto il giocatore";
} else if (USERresult < PCresult) {
  result = "Ha vinto il computer";
}

// # 3 Inserisco il risultato in pagina
resultElement.innerHTML = `
<p>Tiro Giocatore: ${USERresult}</p>
<p>Tiro Computer: ${PCresult}</p>
<p><strong>${result}</strong></p>
`;
