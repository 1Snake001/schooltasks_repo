/*
Nézd meg, hogy a lista tartalmazza-e a következő elemeket: 4, 8, 12, 16
Készíts egy függvényt, ami bemeneti paraméterként egy listát vár$
Térjen vissza "true"-val, ha tartalmazza a lista minden elemét, és "false"-al ha nem.
let listOfNumbers = [2, 4, 6, 8, 10, 12, 14, 16];
console.log(checkNums(listOfNumbers));
*/

let listOfNumbers = [2, 4, 6, 8, 10, 12, 14, 16];
let numbers = [4, 8, 12, 16];

function checkNums(listOfNumbers) {
  let value;
  let trueCount = [];
  for (let i = 0; i < numbers.length; i++) {
    if (listOfNumbers.includes(numbers[i]) == true) {
      trueCount.push(listOfNumbers.includes(numbers[i]));
    }
  }

  if (trueCount.length >= numbers.length) {
    value = true;
  } else {
    value = false;
  }
  return value;
};

console.log(checkNums(listOfNumbers))
