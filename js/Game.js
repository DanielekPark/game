/************************************************
Treehouse FSJS Techdegree:
Project 4 - Phrase Hunter Game
************************************************/
class Game {
  constructor() {
    (this.missed = 0),
      (this.phrases = this.createPhrases()),
      (this.activePhrase = null);
  }

  /**
   * Creates phrases for use in game
   * @return {array} An array of phrases that could be used in the game
   **/
  createPhrases() {
    return [
      new Phrase("Hakuna Matata"),
      new Phrase("Aspire to Inspire Before We Expire"),
      new Phrase("Let the Beauty of What You Love Be What You Do"),
      new Phrase("A Happy Soul is the Best Shield for a Cruel World"),
      new Phrase("Every Moment is a Fresh Beginning"),
    ];
  }
  /* Selects random phrase from phrases property
    @return {Object} Phrase object chosen to be used */
  getRandomPhrase() {
    const randomNum = Math.floor(Math.random() * this.phrases.length);
    this.activePhrase = this.phrases[randomNum];
    console.log(this.activePhrase.phrase.toLowerCase())
    return this.activePhrase.phrase.toLowerCase();
  }

  // Begins game selects a random phrase & displaying it to user
  startGame() {
    const overlay = document.querySelector("#overlay");
    overlay.style.display = "none";
    this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
    this.handleInteraction();
    // console.log(this.activePhrase)
  }

  handleInteraction() {
    const ul = document.querySelector("#phrase ul");
    const listItems = [...ul.children];
    const keyRows = document.querySelectorAll(".keyrow");

    //EVENTLISTENERS BUTTON CLICKS
    keyRows.forEach((keyRow) => {
      keyRow.addEventListener("click", (e) => {
        const button = e.target;
        if (button.tagName === "BUTTON") {
          const letter = button.textContent;
          console.log(letter)
          this.activePhrase.checkLetter(letter);
          //removes heart
          if (!this.activePhrase.phrase.includes(letter.toLowerCase())) this.removeLife();
          button.disabled = true;
          this.checkForWin(listItems);
          this.gameOver();
        }
      });
    });
  }

  checkForWin(listItems) {
    let counter = 0;
    const strngLen = this.activePhrase.phrase
      .split("")
      .filter((char) => char !== " ")
      .join("").length;
      console.log(strngLen)
    listItems.forEach((li) => {
      if(li.classList.contains("show")) counter++;
    });
    console.log(counter)
    if (counter === strngLen) {
      const overlay = document.querySelector('#overlay'); 
      const title = document.querySelector('.title');
      const btn = document.querySelector('#btn_reset');
      title.textContent = 'You Win!';
      overlay.style.display = 'flex'; 
      btn.textContent = 'Play again';
    }
  }

  //removes a heart if the guess incorrect
  removeLife() {
    if (this.missed > 4) return;
    this.missed++;
    const images = document.querySelectorAll("img");
    for (let i = 0; i < this.missed; i++) {
      images[i].src = "images/lostHeart.png";
    }
  }

  gameOver() {
    if (this.missed > 4) {
      const overlay = document.querySelector("#overlay");
      const gameMessage = document.querySelector("#game-over-message");
      overlay.style.display = "block";
      gameMessage.textContent = "You have no hearts remaining play again.";
    }
  }
}
