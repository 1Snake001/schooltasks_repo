'use strict';



// Írj egy programot, ami rajzol
// egy ilyen négyzetet:
//
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// A négyzetnek annyi sora legyen, mint a lineCount értéke

const lineCount = 5;

let char = '%';
let space = ' ';
let betwendCount = lineCount - 2;

for(let i = 0; i < lineCount ;i++ ){
    if(i == 0 ){
     console.log(char.repeat(lineCount))
   }else if (i == lineCount -1){
    console.log(char.repeat(lineCount))  
   }else{console.log(char + space.repeat(betwendCount)+ char)}
};

