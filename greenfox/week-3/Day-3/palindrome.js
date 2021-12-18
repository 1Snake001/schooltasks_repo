/* Készíts egy createPalindrome nevű függvényt,
 kövesd az eddig használt nyelvi stílus útmutatót.
A függvények bemeneten fogad egy stringet,
 készít belőle egy palindrómát és visszaadja azt.
*/

let createPalindrome =(str)=>{
    let reverseStr = str.split('').reverse().join('');
    let palnidrome = str + reverseStr;
    return palnidrome;
};

console.log(createPalindrome('green'));