/* Készíts egy isAnagram nevű függvényt, kövesd az eddig használt nyelvi stílus útmutatót.
A függvények bemeneten fogadnia a kell két stringet
 és visszaadni egy logikai (boolean) értéket attól függően,
hogy a két string egymás anagrammája vagy sem.
 */

function isAnagram(str1,str2){
    let result
    if(str1 == str2.split('').reverse().join('') ){
       result = true;
    }else{
        result = false;
    };
    return result;
};

console.log(isAnagram("dog","god"));
console.log(isAnagram("green","fox"));