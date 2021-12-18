/*
A Szaturnusz hiányzik a bolygók listájából, rakd be a megfelelő helyre!
Készíts egy putSaturn() függvényt, mely bemeneti paraméterként egy listát vár, visszatérési értéke pedig a helyes lista.
Bónuszpont, ha beépített metódust használsz.
const planetList = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];
// Várt eredmény: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"
console.log(putSaturn(planetList)); 
*/

const planetList = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];

function putSaturn(planetList){
    planetList.splice(5,0,"Saturn");
    return planetList
};

console.log(putSaturn(planetList)); 