console.log('JS OK')

/* 
# Verifica EMAIL.

- Inventiamo una lista di email a nostro piacimento
- Chiediamo all'utente una mail (con un prompt)
- controlliamo che la mail inserita sia presente nella lista
- se è presente, gli diamo il benvenuto. (in console)
- altrimenti gli diciamo che non può accedere (in console)

:avviso:non potete usare il metodo .includes())!!!

<br>
<br>

- **1**
  - Prepararo l'arrey che contiente tutti gli indirizzi.
- **2**
  - Setto il pront di richiesta email utente
  
- **3**
  - Eseguo un ciclo "IF" per capire se il nominativo è in lista.
  **SE NO**
  - Gli do il benvenuto in console.
  **SE SI**
  - Gli do il messaggio che il login è stato negato sempre in console.
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
