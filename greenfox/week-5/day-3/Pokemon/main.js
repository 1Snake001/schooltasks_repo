import { Pokemon } from "./Pokemon.js";

let pokemonOfAsh = initializePokemon();

// Minden Pokemonnak van egy neve és egy típusa.
// Bizonyos típusok hatékonyak mások ellen, pl. a víz hatékony a tűz ellen.
// Ash-nek van pár Pokemonja.
// Egy vad Pokemon tűnik fel!

let wildPokemon = new Pokemon("Oddish", "grass", "water");

// Melyik Pokemont használja Ash?
// Implementáld az alábbi `chooseEffective` függvényt, hogy Ash a hatékony pokémont válassza.

function initializePokemon() {
  return [
    new Pokemon("Balbasaur", "grass", "water"),
    new Pokemon("Pikatchu", "electric", "water"),
    new Pokemon("Charizard", "fire", "grass"),
    new Pokemon("Pidgeot", "flying", "fighting"),
    new Pokemon("Kingler", "water", "fire"),
  ];
}

let chooseEffective = () => {
  for (let pokemon of pokemonOfAsh) {
    if (pokemon.isEffectiveAgainst(wildPokemon)) {
      return pokemon.name;
    }
  }
};

console.log(
  `${chooseEffective(pokemonOfAsh, wildPokemon)}, teged valasztalak!`
);
