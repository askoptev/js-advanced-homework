"use strict";

class Personage {
  constructor(name, race, language) {
    this.name = name;
    this.race = race;
    this.language = language;
  }
  toSpeak() {
    console.log(`Моё имя: ${this.name} и язык: ${this.language}`);
  }
}

class Ork extends Personage {
  constructor(name, race, language, guns) {
    super(name, race, language);
    this.guns = Array.isArray(guns) ? [...guns] : [];
  }
  toSpeak() {
    console.log(`Моё имя: ${this.name}`);
  }
  toHit(gunId) {
    const gun = this.guns[gunId];
    console.log(`Удар оружием: ${gun ? gun : "кулак"}`);
  }
}

class Elf extends Personage {
  constructor(name, race, language, spells) {
    super(name, race, language);
    this.spells = Array.isArray(spells) ? [...spells] : [];
  }
  toSpeak() {
    console.log(`Моё имя: ${this.name}`);
  }
  toSpell = function (spellId) {
    const spell = this.spells[spellId];
    console.log(`Применено заклинание: ${spell ? spell : "another"}`);
  };
}

const ork = new Ork("Valera", "ork", "english", ["Дубинка"]);
const elf = new Elf("Alesha", "elf", "russian", ["Алохомора"]);

ork.toSpeak(1);
ork.toHit(0);
elf.toSpeak(1);
elf.toSpell(0);
