'use strict'

const Personage = function(name, race, language) {
  this.name = name;
  this.race = race;
  this.language = language;
}
Personage.prototype.toSpeak = function() {
  console.log(`Моё имя: ${this.name} и язык: ${this.language}`);
}

const ork = new Personage('Valera', 'ork', 'english');
ork.guns = ['дубинка'];
ork.toHit = function(gunId) {
  const gun = this.guns[gunId];
  console.log(`Удар оружием: ${gun ? gun : 'кулак'}`);  
}

const elf = new Personage("Alesha", "elf", "russian");
elf.spells = ["any"];
elf.toSpell = function (spellId) {
  const spell = this.spells[spellId];
  console.log(`Применено заклинание: ${spell ? spell : "another"}`);
};

ork.toSpeak(1);
ork.toHit(0);
elf.toSpeak(1);
elf.toSpell(0);
