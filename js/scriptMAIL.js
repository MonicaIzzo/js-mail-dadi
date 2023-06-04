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

- **0**
  - Recupero l'elemento dal DOM
  - **1**
  - Prepararo l'arrey che contiente tutti gli indirizzi verificati.
- **2**
  - Setto il button email utente.
  
- **3**
  - Eseguo un ciclo "IF" per capire se il nominativo è in lista.
- **4**  
  **SE SI**
  - Gli do il benvenuto in pagina.
  **SE NO**
  - Gli do il messaggio che il login è stato negato sempre in pagina.
**FINE**  
*/ 



/*---------------------------------------
        OPERAZIONI PRELIMINARI
---------------------------------------*/

// # 0 Recupero l'ememento dal DOM
const emailImput = document.getElementById('email');
const button = document.getElementById('button');
const message = document.getElementById('message');

// # 1 Prepararo l'arrey
const allowedEmails = ['cristina@verderamina.it', 'info@monicaizzo.net', 'ciroserver@libero.it', 'monicaizzo.adv@gmail.com', 'info@tattikats.com', 'info@degustibus.re.it']

// # 2 Setto il button email utente.
button.addEventListener('click', function (){
let result = 'Non sei autorizzato'
const userEmail = emailImput.value.trim();
console.log('userEmail');


/*---------------------------------------
        PROGRAMMA
---------------------------------------*/

// # 3 Creo il ciclo "for"
for (let i = 0; i < allowedEmails.length; i++) {
  const email = allowedEmails [i]

// # 2 Creo il ciclo "if"

  if (email === userEmail) {
    result = 'Sei autorizzato';
  }
}

// # 4 Stampo il risultato in pagina
message.innerText = result;
});
