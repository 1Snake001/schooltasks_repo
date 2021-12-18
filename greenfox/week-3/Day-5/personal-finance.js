/* 
A kiadásainkat egy számokat tartalmazó listával fogjuk reprezentálni.

Készíts egy listát az alábbi elemekkel:

500, 1000, 1250, 175, 800 és 120
Készíts egy alkalmazást, mely megoldja az alábbi problémákat:

Mennyit költöttünk?
Melyik volt a legnagyobb kiadásunk?
Melyik volt a legkisebb kiadásunk?
Mennyi volt az átlag kiadásunk?
*/

let list = [500, 1000, 1250, 175, 800, 120];

console.log(
  "Ennyit költöttünk: " + list.reduce((num, nextNum) => num + nextNum)
);

let biggestExpense = list[0];

for(let i = 0; i < list.length; i++){
    if(biggestExpense < list[i]){
        biggestExpense = list[i];
    }
};

console.log('Legnagyobb kiadás: '+ biggestExpense);

let cheapest = list[0];

for(let i = 0; i < list.length; i++){
    if(cheapest > list[i]){
        cheapest = list[i];
    }
};

console.log('Legkissebb kiadás: '+ cheapest);

/* let num = 0;
for(let i = 0;i < list.length; i++){
   num+=list[i];
};

console.log('Átlag kiadás: ', num/ list.length);  */

console.log('Átlag kiadás: ',list.reduce((num, nextNum) => num + nextNum)/list.length);
