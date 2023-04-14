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
    return this.activePhrase;
  }

  // Begins game selects a random phrase & displaying it to user
  startGame() { }

  /* LISTEN FOR ON SCREEN KEYBOARD BUTTONS */
  checkLetter() {
    const ul = document.querySelector("#phrase ul");
    const images = document.querySelectorAll('img'); 
    const listItems = [...ul.children];
    const keyRows = document.querySelectorAll('.keyrow');
    // listItems.forEach((li) => console.log(li.textContent)); 
    //EVENT LISTENERS BUTTON CLICKS
    keyRows.forEach((keyRow) => {
      keyRow.addEventListener('click', (e) => {
        const button = e.target;
        if(button.tagName === 'BUTTON'){
          if(!this.activePhrase.includes(button.textContent)){
            this.removeLife(); 
          }else{

          }

          button.disabled = true; 
        }
      })
    })
  }

  checkForWin (){

  }

  removeLife (){
    this.missed++; 
    if(this.missed > 5) return;
    for(let i = 0; i < this.missed; i++){
      images[i].src = 'images/lostHeart.png';
    }
  }

  gameOver(){}

}
