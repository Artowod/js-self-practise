"use strict";

const config = {
  baseExp: 10,
  baseLevelExp: 100,
  statsLevelUp: 0.1,
};

class Attack {
  constructor(dmg, manaCost) {
    this.dmg = dmg;
    this.manaCost = manaCost;
  }
}

class Hero {
  #baseHP;
  #baseMP;
  #HP;
  #MP;
  #level = 1;
  #exp = 0;
  #name;
  deathCount = 0;

  constructor(name, HP, MP, attack) {
    this.#HP = HP;
    this.#MP = MP;
    this.#baseHP = HP;
    this.#baseMP = MP;
    this.attack = attack;
    this.#name = name;
  }

  get HP() {
    return this.#HP;
  }

  get MP() {
    return this.#MP;
  }

  /*   get baseHP() {
    return this.#baseHP;
  }

  get baseMP() {
    return this.#baseMP;
  }

  set baseHP(hp) {
    this.#baseHP = hp;
  }

  set baseMP(mp) {
    this.#baseMP = mp;
  }
 */
  get level() {
    return this.#level;
  }

  get exp() {
    return this.#exp;
  }

  get name() {
    return this.#name;
  }

  makeAttack(hero, leftOrRightHero) {
    if (!(hero instanceof Hero)) return 0;

    if (this === hero) return 0;

    if (this.#MP < this.attack.manaCost) return 0;

    this.#MP -= this.attack.manaCost;
    this.#exp += config.baseExp;
    this.levelUp();

    this.updateManaLine(leftOrRightHero);
    this.updateLifeLine(leftOrRightHero);

    // return this.attack.dmg;

    hero.getDmg(this.attack.dmg, leftOrRightHero);
  }

  updateLifeLine(leftOrRightHero) {
    const currHpInPercent = (this.#HP * 100) / this.#baseHP;
    /*     console.log(leftOrRightHero, ": ", this.#MP, "<>", this.#baseMP); */
    if (leftOrRightHero === "left") {
      document.querySelector(
        ".left-warrior__lifeLine"
      ).style.background = `linear-gradient(to right, rgba(204,40,40,1) 0%,rgba(204,40,40,1)
        ${currHpInPercent}%,rgba(255,252,252,1) 
        ${currHpInPercent + 3}%,rgba(255,255,255,1) 100%)`;
    } else {
      document.querySelector(
        ".right-warrior__lifeLine"
      ).style.background = `linear-gradient(to right, rgba(204,40,40,1) 0%,rgba(204,40,40,1)
      ${currHpInPercent}%,rgba(255,252,252,1) 
      ${currHpInPercent + 3}%,rgba(255,255,255,1) 100%)`;
    }
  }

  updateManaLine(leftOrRightHero) {
    const currMpInPercent = (this.#MP * 100) / this.#baseMP;
/*     console.log(leftOrRightHero, ": ", this.#MP, "<>", this.#baseMP); */
    if (leftOrRightHero === "left") {
      document.querySelector(
        ".left-warrior__manaLine"
      ).style.background = `linear-gradient(to right, rgba(25,30,170,1) 0%,rgba(25,30,170,1) 
        ${currMpInPercent}%,rgba(255,252,252,1) 
        ${currMpInPercent + 3}%,rgba(255,255,255,1) 100%)`;
    } else {
      document.querySelector(
        ".right-warrior__manaLine"
      ).style.background = `linear-gradient(to right, rgba(25,30,170,1) 0%,rgba(25,30,170,1) 
      ${currMpInPercent}%,rgba(255,252,252,1) 
      ${currMpInPercent + 3}%,rgba(255,255,255,1) 100%)`;
    }
  }

  levelUp() {
    if (this.#exp >= config.baseLevelExp * this.#level) {
      this.#level++;
      this.#baseHP += parseInt(this.#baseHP * config.statsLevelUp);
      this.#baseMP += parseInt(this.#baseMP * config.statsLevelUp);
      this.#HP = this.#baseHP;
      this.#MP = this.#baseMP;

      this.#exp === 0;
    }
  }

  getDmg(dmg, leftOrRightHero) {
    this.#HP -= dmg;

    if (this.#HP < 1) {
      this.#HP = this.#baseHP;
      this.#MP = this.#baseMP;
      this.#exp = parseInt(this.#exp / 2);
      this.deathCount += 1;
    }
    this.updateManaLine(leftOrRightHero === "left" ? "right" : "left");
    this.updateLifeLine(leftOrRightHero === "left" ? "right" : "left");
  }

  /*   updateManaLifeLines(leftWarrior, rightWarrior) {
  const hpInPercents = leftWarrior.HP + leftWarrior.in
  document.querySelector(".left-warrior__lifeLine")
    .style.background = `linear-gradient(to right, rgba(204,40,40,1) 0%,rgba(204,40,40,1) 100%,rgba(255,252,252,1) 100%,rgba(255,255,255,1) 100%);`;
};
 */
}

const getInitialStats = () => {
  const initialHP_leftWarrior = parseInt(document.querySelector(".left-warrior__initial-hp-text").value, 10);
  const initialMP_leftWarrior = parseInt(document.querySelector(".left-warrior__initial-mp-text").value, 10);
  const initialHP_rightWarrior = parseInt(document.querySelector(".right-warrior__initial-hp-text").value, 10);
  const initialMP_rightWarrior = parseInt(document.querySelector(".right-warrior__initial-mp-text").value, 10);

  console.log("->", typeof initialHP_leftWarrior, "<-");
  const checkList = [initialHP_leftWarrior, initialMP_leftWarrior, initialHP_rightWarrior, initialMP_rightWarrior];
  if (checkList.includes(0) || checkList.some((stat) => isNaN(stat))) return 0;
  return [initialHP_leftWarrior, initialMP_leftWarrior, initialHP_rightWarrior, initialMP_rightWarrior];
};

class Orc extends Hero {
  constructor(name, hp = 2500, mp = 1200) {
    super(name, hp, mp, new Attack(80, 50));
  }
}

class Elf extends Hero {
  constructor(name, hp = 1500, mp = 2500) {
    super(name, hp, mp, new Attack(120, 150));
  }
}

class Human extends Hero {
  constructor(name, hp = 1750, mp = 1750) {
    super(name, hp, mp, new Attack(75, 75));
  }
}

const getRandomNumber = (min, max) => parseInt(Math.random() * (max - min) + min);

const prepareTwoWarriors = function (arrOfHeroes) {
  let result = [...arrOfHeroes];
  const heroNumber = getRandomNumber(0, result.length);
  const leftHero = result[heroNumber];
  result.splice(heroNumber, 1);
  const rightHero = result[getRandomNumber(0, result.length)];
  return [leftHero, rightHero];
};

//=======================LISTENTER=======================

const startBtn = document.querySelector(".start-battle-btn");
startBtn.addEventListener("click", () => handleStartBtn());

const handleStartBtn = function () {
  //============AUTOBATTLE============
   
  const button = document.getElementById("autoBattleBTN");
  setInterval(function () {
    button.click();
  }, 100); // this will make it click again every 1000 miliseconds

 

  const initialStats = getInitialStats();

  if (initialStats === 0) {
    alert("Please set All initial parameters!");
  } else {
    setCurrentStats(initialStats);

    const arrOfHeroes = ["orc", "elf", "human"];
    let [leftHero, rightHero] = prepareTwoWarriors(arrOfHeroes);

    switch (leftHero) {
      case "orc":
        leftHero = new Orc("Rexar", initialStats[0], initialStats[1]);
        setWarriorPic("left", "orc");
        break;
      case "elf":
        leftHero = new Elf("Legolas", initialStats[0], initialStats[1]);
        setWarriorPic("left", "elf");
        break;
      case "human":
        leftHero = new Human("Aragorn", initialStats[0], initialStats[1]);
        setWarriorPic("left", "human");
        break;
    }

    switch (rightHero) {
      case "orc":
        rightHero = new Orc("Rexar", initialStats[2], initialStats[3]);
        setWarriorPic("right", "orc");
        break;
      case "elf":
        rightHero = new Elf("Legolas", initialStats[2], initialStats[3]);
        setWarriorPic("right", "elf");
        break;
      case "human":
        rightHero = new Human("Aragorn", initialStats[2], initialStats[3]);
        setWarriorPic("right", "human");
        break;
    }

    showInitialStats(leftHero, rightHero);

    const shootBtn = document.querySelector(".shoot-btn");
    shootBtn.addEventListener("click", handleShootClick);

    let round = 1;
    function handleShootClick() {
      round % 2 === 0 ? setAttackDirection("right") : setAttackDirection("left");
      document.querySelector(".winner-area").textContent = `Round: ${round++}`;
      round % 2 === 0 ? leftHero.makeAttack(rightHero, "left") : rightHero.makeAttack(leftHero, "right");
      showCurrentStats(leftHero, rightHero);
    }
  }
};

const setWarriorPic = function (leftRightSide, warriorRace) {
  const leftWarriorPic = document.querySelector(`.${leftRightSide}-warrior__img-link`);
  leftWarriorPic.src = `./images/${warriorRace}.jpg`;
};

const setAttackDirection = function (attackDirection) {
  const direction = document.querySelector(".shoot-arrow");
  direction.src = `./images/arrow-${attackDirection}.jpg`;
};

//=====================================================

const setCurrentStats = function (arr) {
  const [initialHP_leftWarrior, initialMP_leftWarrior, initialHP_rightWarrior, initialMP_rightWarrior] = arr;

  document.querySelector(".left-warrior__current-hp-text").textContent = initialHP_leftWarrior;
  document.querySelector(".left-warrior__current-mp-text").textContent = initialMP_leftWarrior;
  document.querySelector(".right-warrior__current-hp-text").textContent = initialHP_rightWarrior;
  document.querySelector(".right-warrior__current-mp-text").textContent = initialMP_rightWarrior;
  
};

const showInitialStats = function (leftWarrior, rightWarrior) {
  document.querySelector(".warrior-area__left-warrior-name").textContent =
    leftWarrior.name + ` (${leftWarrior.constructor.name})`;
  document.querySelector(".warrior-area__right-warrior-name").textContent =
    rightWarrior.name + ` (${rightWarrior.constructor.name})`;
};

const showCurrentStats = function (leftWarrior, rightWarrior) {
  document.querySelector(".left-warrior__current-hp-text").textContent = leftWarrior.HP;
  document.querySelector(".left-warrior__current-mp-text").textContent = leftWarrior.MP;
  document.querySelector(".left-warrior__current-level-text").textContent = leftWarrior.level;
  document.querySelector(".left-warrior__current-exp-text").textContent = leftWarrior.exp;
  document.querySelector(".left-warrior__death-count-text").textContent = leftWarrior.deathCount;

  document.querySelector(".right-warrior__current-hp-text").textContent = rightWarrior.HP;
  document.querySelector(".right-warrior__current-mp-text").textContent = rightWarrior.MP;
  document.querySelector(".right-warrior__current-level-text").textContent = rightWarrior.level;
  document.querySelector(".right-warrior__current-exp-text").textContent = rightWarrior.exp;
  document.querySelector(".right-warrior__death-count-text").textContent = rightWarrior.deathCount;
};

/* colorzilla.com */
