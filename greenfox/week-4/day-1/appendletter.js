/*
Készíts egy függvényt appendA() névvel ami hozzáad egy a betűt az animals lista összes eleméhez.
A listát a függvény paraméterként fogadja.
Várt eredmény: "boa", "anaconda", "koala", "panda", "zebra"
let animals = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

console.log(appendA(animals)); 
*/

let animals = ["bo", "anacond", "koal", "pand", "zebr"];

function appendA(animals) {
  let newanimals = animals.map((animal) => animal + "a");

  return newanimals;
}
console.log(appendA(animals));
