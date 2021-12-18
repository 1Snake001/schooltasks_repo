'use strict';



// Írj egy programot, ami rajzol
// egy olyan négyzetet, mint ez:
//
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// A négyzetnek annyi sora legyen, mint a lineCount értéke

const lineCount = 5;
let char = '%';
let space = ' ';
let rightSpaceCount= 0;
let leftSpaceCount = lineCount - 3;


for(let i = 0; i < lineCount; i++){
if(i == 0 || i == lineCount-1 ){
    console.log(char.repeat(lineCount));
   } else{
       console.log(char +space.repeat(rightSpaceCount)+char+space.repeat(leftSpaceCount) + char)
       rightSpaceCount++;
       leftSpaceCount--;
    }
};

