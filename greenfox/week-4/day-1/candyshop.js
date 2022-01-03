/*
Véletlenül hozzáadtunk a listához egy "2"-t és egy "false"-ot.
Kérlek javítsd a hibákat!
Javítsd át a "2"-t "Croissant"-ra!
Javítsd át a "false"-ot "Ice cream"-re!
Készíts egy függvényt "sweets()" névvel, ami bemeneti paraméterként egy listát vár, és elvégzi a fenti műveleteket!
Várt eredmény: "Cupcake", "Croissant", "Brownie", "Ice cream"
const candies = ["Cupcake", 2, "Brownie", false]; 
*/

/* 'use strict';

const candies = ["Cupcake", 2, "Brownie", false];

function sweets(candies) {

    const searchValues = [
        [2, "Croissant"],
        [false, "Ice cream"]
    ];

    for (let i = 0; i < searchValues.length; i++) {
        let numIndex = candies.indexOf(searchValues[i][0]);
        candies[numIndex] = searchValues[i][1];
    }

    return candies;
}

console.log(sweets(candies)); */

const candies = ["Cupcake", 2, "Brownie", false];
console.log(candies)

function sweets(arr){
for(let k of arr){
    if(k == 2){ 
       arr.splice(k-1, 1, "Croissant")
     }else if(k == false){
       arr.splice(k-1, 1, "Ice cream")
     }
   } return arr;
};
console.log(sweets(candies));

