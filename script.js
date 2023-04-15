"use strict";

import Player from "./players/Player.js";

import Decay from "./models/Decay.js";
import Block from "./models/Block.js";
import Attack from "./models/Attack.js";
import Fortify from "./models/Fortify.js";
import Regeneration from "./models/Regeneration.js";
import Lifesteal from "./models/Lifesteal.js";

const p1 = new Player("player1", 100, 10, 0, 1);
const p2 = new Player("player2", 100, 10, 0, 2);

const decay = new Decay(1);
const block = new Block(2);
const attack = new Attack(3);
const fortify = new Fortify(4);
const regen = new Regeneration(5);
const lifesteal = new Lifesteal(6);

const player1El = document.querySelector(".player-1");
const player2El = document.querySelector(".player-2");

const currentCard = document.querySelector(".used-cards");
const parent = document.querySelector(".parent");
const dice = document.querySelector(".dice-color");
const diceRoll = document.querySelector(".dice-roll");
const card = document.querySelector(".card");
const activeCurrent = document.querySelector(".active-current");
const profile1 = document.querySelector(".p1");
const profile2 = document.querySelector(".p2");

let currPlayer = player1El;
let actCur = 1;
let curObj = p1;
let curOpponent = p2;
let profileCur = profile1;
let childEl = 0;

const switchPlayer = () => {
  currPlayer = currPlayer == player1El ? player2El : player1El;
  actCur = actCur == 1 ? 2 : 1;
  curObj = curObj == p1 ? p2 : p1;
  curOpponent = curOpponent == p2 ? p1 : p2;
  profileCur = profileCur == profile1 ? profile2 : profile1;
};

const randomRoll = () => Math.trunc(Math.random() * 6) + 1;

const switchRoll = (dice) => {
  switch (dice) {
    case 1:
      return decay;
      break;
    case 2:
      return block;
      break;
    case 3:
      return attack;
      break;
    case 4:
      return fortify;
      break;
    case 5:
      return regen;
      break;
    case 6:
      return lifesteal;
      break;
  }
};

let curDiceN = 1;
const mod = document.querySelector(".mod");

diceRoll.addEventListener("click", (e) => {
  p1.health = p1.health >= 100 ? 100 : p1.health;
  p2.health = p2.health >= 100 ? 100 : p2.health;

  p1.shield = p1.shield <= 0 ? 0 : p1.shield;
  p2.shield = p2.shield <= 0 ? 0 : p2.shield;

  profileCur.classList.remove("active");
  if (p1.health == 0 || p1.health < 0) {
    p2.health.innerHTML = 0;
    alert(`Real Nigga: Player 2`);
  } else if (p2.health == 0 || p2.health < 0) {
    p1.health.innerHTML = 0;
    alert(`Real Nigga: Player 1`);
  } else {
    card.classList.remove("hidden");
    dice.classList.remove("hidden");

    curDiceN = randomRoll();
    let switchR = switchRoll(curDiceN);
    card.src = switchR._randomCard();

    if (currPlayer.childElementCount == 9) {
      currPlayer.removeChild(currPlayer.children[1]);
    }

    currPlayer.insertAdjacentHTML("beforeend", switchR._htmlString());
    dice.src = `/diceIMG/dice-${curDiceN}.svg`;

    switchR._cardTurn(curObj, curOpponent);

    if (switchR.descString == `Block Opponent's Turn`) switchPlayer();

    switchPlayer();
    profileCur.classList.add("active");
    activeCurrent.innerHTML = `Player ${actCur}`;
  }
});
