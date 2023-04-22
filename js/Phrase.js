/************************************************
Treehouse FSJS Techdegree:
Project 4 - Phrase Hunter Game
************************************************/
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  //displays letter placeholders to the display
  addPhraseToDisplay() {
    const ul = document.querySelector("#phrase ul");
    const phrase = this.phrase
      .trim()
      .split("")
      .map((letter) => {
        if (letter === " ") return `<li class="hide space">${letter}</li>`;
        if (letter !== "") return `<li class="hide letter">${letter.toLowerCase()}</li>`;
      });
    ul.innerHTML = phrase.join(" ");
  }  

  showMatchedLetter(letter){
    const ul = document.querySelector("#phrase ul");
    const listItems = [...ul.children];
    console.log(letter)
    listItems.forEach((li) => {
      if(li.textContent === letter){
        li.classList.add('show');
        li.classList.remove('hide'); 
      }
    })
  }

  checkLetter(letter) {
    if(this.phrase.toLowerCase().includes(letter.toLowerCase())){
      this.showMatchedLetter(letter); 
    }
  }
}
