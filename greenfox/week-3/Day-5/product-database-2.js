/*
A termék adatbázisunkat egy asszociatív tömbként(Map) fogjuk reprezentálni, ahol a termék nevek (kulcs) szövegek, azok árai (érték) pedig számok.

Készíts egy Map-et az alábbi kulcs-érték párokkal:

Termék név (kulcs)	Ár (érték)
Tojás	200
Tej	200
Hal	400
Alma	150
Kenyér	50
Csirke	550
Készíts egy alkalmazást, mely megoldja az alábbi problémákat:

Mely termékek kerülnek kevesebbe mint 201? (csak a név)
Mely termékek kerülnek többe mint 150? (név és ár)
 */

let product = {
 'Tojás':200,
 'Tej':200,
 'Hal':400,
 'Alma':150,
 'Kenyér':50,
 'Csirke':550
};

let cheaperThanTH = []; 
for(let k in product){
 if(product[k] < 201){
     cheaperThanTH.push(k)
    }
};
console.log(
'Az alábbi termékek kerülnek kevesebbe mint 201:',cheaperThanTH.join(', ')
);

let expensiveThanOH = []; 
for(let k in product){
 if(product[k] > 150){
    expensiveThanOH.push(`${k}: ${product[k]}`)
    }
};

console.log(
    'Az alábbi termékek kerülnek többe mint 150:',expensiveThanOH.join(', ')
    );
