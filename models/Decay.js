"use strict";

class Decay {
  card = document.querySelector(".card");
  curDiceN = 0;
  attack = 0;
  shield = 0;
  cardName = " ";
  attr = `D`;

  constructor(number) {
    this.number = number;
  }

  _randomN() {
    return Math.trunc(Math.random() * 5) + 1;
  }

  _switchRandomN(diceRoll) {
    switch (diceRoll) {
      case 1:
        this.cardName = `Crying Johnny `;
        this.attack = 6;
        this.shield = 1;
        return 6;
        break;
      case 2:
        this.cardName = `The Crydalorian `;
        this.attack = 7;
        this.shield = 2;
        return 7;
        break;
      case 3:
        this.cardName = `Aging Matt `;
        this.attack = 8;
        this.shield = 3;
        return 8;
        break;
      case 4:
        this.cardName = `Dusty Peter `;
        this.attack = 9;
        this.shield = 4;
        return 9;
        break;
      case 5:
        this.cardName = `Dying Inside `;
        this.attack = 10;
        this.shield = 5;
        return 10;
        break;
    }
  }

  _cardTurn(player, opponent = null) {
    player.attack -= this.attack;
    player.shield -= this.shield;
    player.pAttack.innerHTML = player.attack;
    player.pShield.innerHTML = player.shield <= 0 ? 0 : player.shield;
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
        <div class="card-container mod ">
        <div class="card-ui">
        <label for="" class="title">${this.cardName} </label>
          <div class="r-UI">
            <p class="model dec">Decay</p>
            <img
                class="player-icon"
                src="/attrIMG/a-${this.attr}.png"
                alt="attr"
                width="20"
                height="20"
              />
          </div>
        </div>
        <p class="description"><i> Lose ${this.attack} attack and ${this.shield} shield</i></p>
        
        </div>
  </section>
  `;
  }
}

export default Decay;
