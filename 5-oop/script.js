'use strict'

const Personage = function(name, race, language) {
  this.name = name;
  this.race = race;
  this.language = language;
};
Personage.prototype.toSpeak = function() {
  console.log(`Моё имя: ${this.name} и язык: ${this.language}`);
};


const Ork = function(name, race, language, guns) {
  Personage.call(this, name, race, language);
  this.guns = Array.isArray(guns) ? [...guns] : [];
};
Ork.prototype = Object.create(Personage.prototype);
Ork.prototype.constructor = Ork;
Ork.prototype.toHit = function(gunId) {
    const gun = this.guns[gunId];
    console.log(`Удар оружием: ${gun ? gun : 'кулак'}`); 
};


const Elf = function(name, race, language, spells) {
  Personage.call(this, name, race, language);  
  this.spells = Array.isArray(spells) ? [...spells] : [];
};
Elf.prototype = Object.create(Personage.prototype);
Elf.prototype.constructor = Elf;
Elf.prototype.toSpell = function(spellId) {  
  const spell = this.spells[spellId];
  console.log(`Применено заклинание: ${spell ? spell : "another"}`);
};


const ork = new Ork('Valera', 'ork', 'english', ['Дубинка']);
const elf = new Elf("Alesha", "elf", "russian", ["Алохомора"]);


ork.toSpeak(1);
ork.toHit(0);
elf.toSpeak(1);
elf.toSpell(0);
