console.log('JS OK')

/* 
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampare (in console)
<br>
<br>

- **1**
  - Genero tramite la funzion RANDOM un numero da 0 a 6 da assegnare all'utente.
- **2**
  - Genero tramite la funzion RANDOM un numero da 0 a 6 da assegnare al computer.
- **3**
  - Eseguo un ciclo "IF" per capire chi tra l'utente o il pc ha ottenuto il punteggio più alto.
  **SE HA VINTO L'utente**
  - Gli do in console il messaggio "bravo hai vinto"
 **SE HA VINTO il computer**
  - Gli do in console il messaggio "Peccato non hai vinto"
**FINE**  
*/ 



/*---------------------------------------
        OPERAZIONI PRELIMINARI
---------------------------------------*/

// # 0 Recupero l'ememento dal DOM
const listElements = document.getElementById('numbers-list');

/*---------------------------------------
        PROGRAMMA
---------------------------------------*/

// # 1 Creo il ciclo "for"
for (let i = 1; i <= 100; i++) {

    let square = i;

  if (i % 3 === 0 && i % 5 === 0) {
    square = 'FizzBuzz';   
   
} else if (i % 3 === 0) { 
    square = 'Fizz';  

} else if (i % 5 === 0) { 
    square = 'Buzz';
}

 console.log (square);
 // stampo in pagina

 const myClass = `${square}`.toLowerCase();

 listElements.innerHTML += `<li class=${myClass}>${square}</li>`;
}
