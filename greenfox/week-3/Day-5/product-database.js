/*
A termék adatbázisunkat egy asszociatív tömbként(Map) fogjuk reprezentálni, ahol a termék nevek (kulcs) szövegek és azok árai (érték) pedig számok.

Készíts egy Map-et az alábbi kulcs-érték párokkal:

Termék név (kulcs)	Ár (érték)
Tojás	200
Tej	200
Hal	400
Alma 150
Kenyér 50
Csirke 550 
Készíts egy alkalmazást, mely megoldja az alábbi problémákat:

Mennyibe kerül a hal?
Melyik a legdrágább termék?
Mi a termékek átlag ára?
Hány termék ára van 300 alatt?
Van-e olyan termék, melyet pontosan 125Ft-ért tudunk megvenni?
Melyik a legolcsóbb termék? 
*/

let productDatabase = {
    'Tojás':200,
    'Tej':200,
    'Hal':400,
    'Alma':150,
    'Kenyér':50,
    'Csirke':550
};

console.log('A hal ára: ',productDatabase['Hal']);

let count = 0;
for(let i=0;i < Object.values(productDatabase).length;i++){
    if(count < Object.values(productDatabase)[i]){
        count =+ Object.values(productDatabase)[i]
    }

};

for(let k in productDatabase){
    if(productDatabase[k] == count){
         let product = k;
        console.log('A legdrágább termék a:',product) 
    }
};

let average = Object.values(productDatabase).reduce((number, nextNumber) => number + nextNumber)
 / Object.values(productDatabase).length;

console.log('A termékek átlag ára :',average);

let cheaperThanTH = Object.values(productDatabase).filter(num => num < 300).length
console.log('Ennyi termék ára van 300 alatt:',cheaperThanTH);


console.log('Van olyan termék, melyet pontosan 125Ft-ért tudunk megvenni:',Object.values(productDatabase).includes(125));

let count2 = 0;
for(let i=0;i < Object.values(productDatabase).length;i++){
    if(count > Object.values(productDatabase)[i]){
        count2 =+ Object.values(productDatabase)[i]
    }
};

for(let k in productDatabase){
    if(productDatabase[k] == count2){
         let product2 = k;
        console.log('A legolcsóbb termék a:',product2) 
    }
};