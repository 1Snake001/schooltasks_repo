'use strict';


// Írj egy programot, ami rajzol
// egy ilyen háromszöget:
//
// *
// **
// ***
// ****
//
// A háromszögnek annyi sora legyen, mint amennyi a lineCount értéke.

const lineCount = 11;

let char = '*';
for(let i = 0; i < lineCount; i++){
 
 console.log(char);
 char += '*'; 
};