"use strict";

class Lifesteal {
  card = document.querySelector(".card");
  curDiceN = 0;
  health = 0;
  damage = 0;
  descString = " ";
  cardName = " ";
  attr = `L`;

  constructor(number) {
    this.number = number;
  }

  _randomN() {
    return Math.trunc(Math.random() * 6) + 1;
  }

  _switchRandomN(diceRoll) {
    switch (diceRoll) {
      case 1:
        this.cardName = "ABC's of Vampiric Life ";
        this.damage = 5;
        this.health = 5;
        return 5;
        break;
      case 2:
        this.cardName = "Succ The Drac ";
        this.damage = 6;
        this.health = 6;
        return 6;
        break;
      case 3:
        this.cardName = "Succ Me Dry ";
        this.damage = 7;
        this.health = 7;
        return 7;
        break;
      case 4:
        this.cardName = "Lipton Kermit ";
        this.damage = 8;
        this.health = 8;
        return 8;
        break;
      case 5:
        this.cardName = "Lil Snotty ";
        this.damage = 9;
        this.health = 9;
        return 9;
        break;
      case 6:
        this.cardName = "Slurrrppp... Nice ";
        this.damage = 10;
        this.health = 10;
        return 10;
        break;
    }
  }

  _cardTurn(player, opponent = null) {
    player.health += this.health;
    opponent.health -=
      opponent.shield > this.damage ? 0 : this.damage - opponent.shield;

    player.pHealth.innerHTML = player.health >= 100 ? 100 : player.health;
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
            <p class="model lif">Lifesteal</p>
            <img
                class="player-icon"
                src="attrIMG/a-${this.attr}.png"
                alt="attr"
                width="20"
                height="20"
              />
          </div>
        </div>
        <p class="description"><i>Gain ${this.health} health and deal same amount</i></p>
        
        </div>
  </section>
  `;
  }
}

export default Lifesteal;
