"use strict";

const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const request = new XMLHttpRequest();
request.open("GET", url);
request.send();
request.addEventListener("load", function () {
  const { abilities } = JSON.parse(this.responseText);
  const url = abilities[0].ability.url;
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.send();
  request.addEventListener("load", function () {
    const { effect_entries } = JSON.parse(this.responseText);
    const effectEn = effect_entries.filter((item) => item.language.name === 'en');
    console.log(effectEn[0].effect);
  });
});
