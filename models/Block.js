"use strict";

class Block {
  card = document.querySelector(".card");
  curDiceN = 0;
  descString = " ";
  cardName = " ";
  attr = `B`;

  constructor(number) {
    this.number = number;
  }

  _randomN() {
    return Math.trunc(Math.random() * 2) + 1;
  }

  _switchRandomN(diceRoll) {
    switch (diceRoll) {
      case 1:
        this.cardName = "Arnold The Enforcer ";
        this.descString = `Block Opponent's Turn`;
        return 1;
        break;
      case 2:
        this.cardName = "It's Time to Stop ";
        this.descString = "Pass turn";
        return 2;
        break;
    }
  }

  _cardTurn(player, opponent) {
    return;
  }

  _randomCard() {
    this.curDiceN = this._randomN();

    return `/cardsIMG/c-${this.attr}-${this.number}__${this._switchRandomN(
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
            <p class="model blo">Block</p>
            <img
                class="player-icon"
                src="/attrIMG/a-${this.attr}.png"
                alt="attr"
                width="20"
                height="20"
              />
          </div>
        </div>
          <p class="description"><i> ${this.descString}</i></p>
        
        </div>
  </section>
  `;
  }
}

export default Block;
