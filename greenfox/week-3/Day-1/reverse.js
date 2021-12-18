'use strict';
// Hozz létre egy `numbers` változót az alábbi tartalommal: `[3, 4, 5, 6, 7]`
// 2 féleképpen oldd meg a feladatot:
// 1. beéptett metódussal
// 2. egy átmeneti arrayt létrehozva, és egy ciklus segítségével
// Logold ki a konzolra a megfordított numbers tömb mindegyik elemét

let numbers = [3, 4, 5, 6, 7];
 console.log(numbers)

/* let reversNumbers = numbers.reverse(number => number)

console.log(reversNumbers); */

let reverseArray = [];

   let arrayLength = numbers.length

for(let i = 0; i < arrayLength; i++){
  
    reverseArray[i] = numbers.pop(i)
};
console.log(reverseArray); 
console.log(numbers);
/* function reverseArray (numbers) {
    let numArr = numbers.length;    
    let newArr = [];    
    for (let i = 0; i < numArr; i++) {      
        let inArr = numbers;
        newArr[i] = inArr.pop(i);       
    }
    return newArr;
}
console.log(numbers)

let reverseNumbers = reverseArray(numbers);

console.log(reverseNumbers)

console.log(numbers); */




