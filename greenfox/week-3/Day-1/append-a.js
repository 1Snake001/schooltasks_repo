'use strict';
// Hozz létre egy `animals` változót az alábbi tartalommal:
// `['koal', 'pand', 'zebr']`
// Minden elemhez fűzz hozzá egy "a" betűt
// Próbálj meg beépített metódust használni ciklus helyett!

let stringOfArray = ['koal', 'pand', 'zebr'];

let animals = stringOfArray.map(animal => animal += 'a');

console.log(animals);