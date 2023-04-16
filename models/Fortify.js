"use strict";

class Fortify {
  card = document.querySelector(".card");
  curDiceN = 0;
  attack = 0;
  shield = 0;
  descString = " ";
  cardName = " ";
  attr = `F`;

  constructor(number) {
    this.number = number;
  }

  _randomN() {
    return Math.trunc(Math.random() * 6) + 1;
  }

  _switchRandomN(diceRoll) {
    switch (diceRoll) {
      case 1:
        this.cardName = "Greater Protection for Eternal Money ";
        this.attack = 5;
        this.shield = 10;
        return 5;
        break;
      case 2:
        this.cardName = "N-word Alistar ";
        this.attack = 6;
        this.shield = 9;
        return 6;
        break;
      case 3:
        this.cardName = "Creepy Stolen Armor ";
        this.attack = 7;
        this.shield = 8;
        return 7;
        break;
      case 4:
        this.cardName = "Guniplier ";
        this.attack = 8;
        this.shield = 7;
        return 8;
        break;
      case 5:
        this.cardName = "Post Nut Clarity ";
        this.attack = 9;
        this.shield = 6;
        return 9;
        break;
      case 6:
        this.cardName = "Let Me Solo U ";
        this.attack = 10;
        this.shield = 5;
        return 10;
        break;
    }
  }

  _cardTurn(player, opponent = null) {
    player.attack += this.attack;
    player.shield += this.shield;
    player.pAttack.innerHTML = player.attack;
    player.pShield.innerHTML = player.shield;
  }

  _randomCard() {
    this.curDiceN = this._randomN();

    return `cardsIMG/c-${this.attr}-${this.number}__${this._switchRandomN(
      this.curDiceN
    )}.png`;
  }

  _htmlString() {
    return `
  <section class="used-cards">
        <div class="card-container mod">
        <div class="card-ui">
        <label for="" class="title">${this.cardName} </label>
          <div class="r-UI">
            <p class="model for">Fortify</p>
            <img
                class="player-icon"
                src="attrIMG/a-${this.attr}.png"
                alt="attr"
                width="20"
                height="20"
              />
          </div>
        </div>
        <p class="description"><i> Gain ${this.attack} attack and ${this.shield} shield</i></p>
        
        </div>
  </section>
  `;
  }
}

export default Fortify;
