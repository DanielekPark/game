/************************************************
Treehouse FSJS Techdegree:
Project 4 - Phrase Hunter Game
************************************************/
class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
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
      // console.log(phrase)
    ul.innerHTML = phrase.join(" ");
  }  
//STEP 6 PART 2 
// when a player matches the letter, it should use the css letter class. The space class should be used for empty spaces
  showMatchedLetter(){}
}
