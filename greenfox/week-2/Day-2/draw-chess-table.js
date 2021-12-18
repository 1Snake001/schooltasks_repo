'use strict';

// Írj egy programot, ami egy ilyen "sakktáblát" rajzol ki:
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %

let char = '% ';

let space = ' ';

let lineCount = 6;

let charCount = lineCount/2;

for( let i = 0; i < lineCount; i++ ){
    if(i % 2 == 0){
       console.log(char.repeat(charCount))
    }else{console.log(space+char.repeat(charCount))}
}; 
