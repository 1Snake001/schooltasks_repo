'use strict';



// Írj egy programot, ami rajzol egy
// olyan rombuszt, mint ez:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// A rombusznak annyi sora legyen, mint a lineCount értéke

const lineCount = 5;

let char = "*";
let space = " ";
let charShift = 1;
let spaceShift = lineCount/2;

for (let i = 1; i <= lineCount; i++) {
    if (i<lineCount/2) {
        console.log(space.repeat(spaceShift) + char.repeat(charShift));
        spaceShift--
        charShift += 2;
    } else {
        console.log(space.repeat(spaceShift) + char.repeat(charShift));
        spaceShift++
        charShift -= 2;      
    }
}