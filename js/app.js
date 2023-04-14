/************************************************
Treehouse FSJS Techdegree:
Project 4 - Phrase Hunter Game
************************************************/
const game = new Game(); 
const randomPhrase = game.getRandomPhrase()
const phrase = new Phrase(randomPhrase.phrase)
phrase.addPhraseToDisplay(); 

const overlay = document.querySelector("#overlay");
const btnReset = document.querySelector('#btn__reset'); 
overlay.style.display = 'none';
// btnReset.addEventListener('click', () => {
  
// }); 

//step 7 pg 10