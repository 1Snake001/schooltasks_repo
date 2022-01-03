/*
 Írj egy függvényt, amely ellenőrzi, hogy a lista tartalmazza-e a "7"-et
Ha igen, térjen vissza azzal, hogy "Hoorray", ha nem, akkor pedig azzal, hogy "Nooooo"!
Várt eredmény: "Noooooo"
Csináld meg mégegyszer más megoldással, más listát használva.
const numbers = [1, 2, 3, 4, 5, 6, 8];
console.log(containsSeven(numbers));
*/

const numbers = [1, 2, 3, 4, 5, 6, 8];
const newNumbers = [3, 5, 7, 9, 10, 21];

function containsSeven(numArr) {
  let value;
  if (numArr.includes(7) == true) {
    value = "Hoorray";
  } else {
    value = "Noooooo";
  }
  return value;
}

console.log(containsSeven(numbers));
console.log(containsSeven(newNumbers));
