"use strict";

const url = "https://pokeapi.co/api/v2/pokemon/ditto";

function getData(url, errorMessage) {
  return fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`${errorMessage}: ${response.status}`)
    }
    return response.json()
  }
  )
}

getData(url, "Can not abilities")
  .then(response => {
    const {abilities} = response;
    const abilityUrl = abilities[0].ability.url;
    return getData(abilityUrl, "Can not ability");
  })
  .then(ability => {
    const { effect_entries } = ability;
    const effectEn = effect_entries.filter((item) => item.language.name === "en");
    console.log(effectEn[0].effect);
  })
  .catch(error => console.log(error));



