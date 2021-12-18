'use strict';



// Írj egy programot, ami
// ilyen piramist rajzol:
//
//
//    *
//   ***
//  *****
// *******
//
// A piramisnak annyi sora legyen, mint amennyi a lineCount értéke

const lineCount = 10;

let char = '*';
 
let space =' ';

let spaceCount = lineCount-1;


for(let i = 0; i < lineCount; i++){
console.log(space.repeat(spaceCount) + char);
/* console.log(space.repeat(spaceCount) + char); */
    --spaceCount;  
    char+='**';       
};
