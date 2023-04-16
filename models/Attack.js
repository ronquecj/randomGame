"use strict";

class Attack {
  card = document.querySelector(".card");
  curDiceN = 0;
  descString = " ";
  attack = 0;
  cardName = " ";
  attr = `A`;

  constructor(number) {
    this.number = number;
  }

  _randomN() {
    return Math.trunc(Math.random() * 2) + 1;
  }

  _switchRandomN(diceRoll) {
    switch (diceRoll) {
      case 1:
        this.descString = `Attack 1 times`;
        this.cardName = `Death Punch`;
        this.attack = 1;
        return 1;
        break;
      case 2:
        this.descString = `Attack 2 times`;
        this.cardName = `Wuju Style`;
        this.attack = 2;
        return 2;
        break;
    }
  }

  _cardTurn(player, opponent) {
    player.attack = player.attack * this.attack;
    opponent.health -=
      opponent.shield > player.attack ? 0 : player.attack - opponent.shield;
    opponent.pHealth.innerHTML = opponent.health;
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
            <p class="model atta">Attack</p>
            <img
                class="player-icon"
                src="attrIMG/a-${this.attr}.png"
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

export default Attack;
