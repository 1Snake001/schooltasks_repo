/*
 Készíts egy tömböt ('TombA') mely tartalmazza a következő értékeket:
 Alma, Avokádó, Áfonya, Durian, Mangó
Készíts egy új tömböt TombB névvel amely a TombA értékeit tartalmazza!
Írattasd ki, hogy a TombA tartalmazza-e a Durian-t vagy sem!
Távolítsd el a Durian-t a TombB-ből!
Add hozzá a Kivi-t a TombA 4. eleme utánn!
Hasonlítsd össze TombA és TombB méretét!
Keresd meg az Avokádó indexét a TombA-ban!
Keresd meg az Durian indexét a TombB-ban!
Add hozzá a TombB-hez a Dinnye-t és a Pomelo-t egyszerre!
Írasd ki a TombA 3. elemét!
*/

let TombA = ['Alma', 'Avokádó', 'Áfonya', 'Durian', 'Mangó'];

/* let TombB = TombA; */

let TombB = [];
let arr = TombA.length;
for(let i = 0 ; i < arr; i++){
   TombB.push(TombA[i]); 
};
console.log(TombB)
console.log(TombA.includes('Durian'));
TombA.splice(4,0,'Kivi');

console.log(TombA);

console.log(TombA.length > TombB.length);
console.log(TombA.length , TombB.length);


console.log(TombA.indexOf('Avokádó'));
console.log(TombB.indexOf('Durian'));

TombB.splice(3,0,"Dinnye", "Pomelo");
console.log(TombB);

console.log(TombA[2]); 