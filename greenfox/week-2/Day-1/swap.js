'use strict';

// cseréld meg a 2 változó értékét programozás útján.
// A numberToSwap1 értéke legyen az, ami a numberToSwap2 változóban van és fordítva.
let numberToSwap1 = 123;
let numberToSwap2 = 526;
 
let newValue = numberToSwap1;

numberToSwap1 = numberToSwap2;
numberToSwap2 = newValue; 

console.log(numberToSwap1);
console.log(numberToSwap2);