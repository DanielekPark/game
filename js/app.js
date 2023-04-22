/************************************************
Treehouse FSJS Techdegree:
Project 4 - Phrase Hunter Game
************************************************/
const btnReset = document.querySelector("#btn__reset");
btnReset.addEventListener("click", () => {
  const game = new Game();
  game.startGame();
});
// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase.phrase);
