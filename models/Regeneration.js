"use strict";

class Regeneration {
  card = document.querySelector(".card");
  curDiceN = 0;
  heal = 0;
  descString = " ";
  cardName = " ";
  attr = `R`;

  constructor(number) {
    this.number = number;
  }

  _randomN() {
    return Math.trunc(Math.random() * 5) + 1;
  }

  _switchRandomN(diceRoll) {
    switch (diceRoll) {
      case 1:
        this.cardName = "Johnny The Priest ";
        this.heal = 1;
        return 1;
        break;
      case 2:
        this.cardName = "Priestly Racial Powers ";
        this.heal = 2;
        return 2;
        break;
      case 3:
        this.cardName = "Hannibal The Father ";
        this.heal = 3;
        return 3;
        break;
      case 4:
        this.cardName = "Greater Horny Heal ";
        this.heal = 4;
        return 4;
        break;
      case 5:
        this.cardName = "Swag of Almighty Healing ";
        this.heal = 5;
        return 5;
        break;
    }
  }

  _cardTurn(player, opponent = null) {
    player.health += this.heal;
    player.pHealth.innerHTML = player.health >= 100 ? 100 : player.health;
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
            <p class="model reg">Regeneration</p>
            <img
                class="player-icon"
                src="attrIMG/a-${this.attr}.png"
                alt="attr"
                width="20"
                height="20"
              />
          </div>
        </div>
        <p class="description"><i> Heal ${this.heal} health</i></p>
        
        </div>
  </section>
  `;
  }
}

export default Regeneration;
