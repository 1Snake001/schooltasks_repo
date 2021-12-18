'use strict';
// Hozz létre egy `numbers` változót az alábbi tartalommal: `[3, 4, 5, 6, 7]`
// Logold ki az elemek összegét a konzolra!

let numbers = [3, 4, 5, 6, 7];

let amountNumber = numbers.reduce((number, nextNumber) => number + nextNumber);

console.log(amountNumber);