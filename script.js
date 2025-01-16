// scripts.js

// Array di frasi (versione ridotta per esempio; incolla qui la tua lista completa)
const phrases = [
  "SE IO PESASSI 80 KG MORDEREI IL FERRO...",
  "LA MIA URINA È MIRACOLOSA FA CRESCERE LE PIANTE",
  "CON LE DONNE BISOGNA USARE LA LEGGE DELLA CAROTA E DEL BASTONE",
  "IO I COMUNISTI NON LI AGGIUNGO SU FACEBOOK... MI VENGONO I VIRUS!!!",
  "LE SUE IRE SONO PEGGIO DELLE IRE DEL SIGNORE!",
  "CHI È LA FORTUNATA?!",
  "DONNE VENITE È GRATIS",
  "HO TALMENTE FAME CHE MI MANGEREI IL CAZZO... PER FORTUNA HO TUTTEL LE COSTOLE!!!",
  "IO ORMAI 'H'AI NARCOS COLOMBIANI DO DEL TU!",
  "LA CERES V MEGLIO DELLA BAMBA",
  // ... (INCOLLA TUTTE LE FRASI FINO ALLA NUMERO 100+)
  "LA BIRRA MI RIEMPIE .. LO SBAGLIATO MI FINISCE... TIRIAMO IL DADO"
];

// Selettori
const phraseContainer = document.getElementById('random-phrase');
const generateBtn = document.getElementById('generate-btn');

// Funzione per generare una frase casuale
function generateRandomPhrase() {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  const randomPhrase = phrases[randomIndex];
  phraseContainer.textContent = randomPhrase;
}

// Aggiunta dell'evento click al bottone
generateBtn.addEventListener('click', generateRandomPhrase);
