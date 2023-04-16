"use strict";

class Player {
  pAttack;
  pShield;
  pHealth;

  constructor(name, health, attack, shield, number) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.shield = shield;
    this.number = number;

    this.pAttack = document.querySelector(`.p${this.number}-a`);
    this.pShield = document.querySelector(`.p${this.number}-s`);
    this.pHealth = document.querySelector(`.p${this.number}-h`);

    this._healthLimit();
    this._shieldLimit();
  }

  _healthLimit() {
    if (this.health > 100) {
      this.health = 100;
    } else {
      return this.health;
    }
  }

  _shieldLimit() {
    if (this.shield <= 0) {
      this.shield = 0;
    } else {
      return this.shield;
    }
  }
}

export default Player;
