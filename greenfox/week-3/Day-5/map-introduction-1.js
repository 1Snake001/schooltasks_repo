 'use strict';

/* 
Asszociatív tömbökkel(Map) fogunk játszani. Nyugodtan használj bármilyen beépített függvényt,
ahol lehetséges.

Készíts egy üres objektumot, ahol a kulcsok(keys) számok, és az értékek(values) szöveg típusúak (string)!

Írasd ki hogy az objektum üres-e vagy sem!

Add hozzá az alábbi kulcs(key) érték(value) párokat az objektumhoz!

Kulcs (Key)	Érték (Value)
97	a
98	b
99	c
65	A
66	B
67	C

Írasd ki az összes kulcsot!

Írasd ki az összes értéket!

Add hozzá a D értéket az 68-as kulccsal!

Írasd ki hány kulcs érték pár van az objektumban!

Írasd ki a 99-es kulcshoz tartozó értéket!

Töröld ki azt a kulcs-érték párt, ahol a kulcs 97!

Írasd ki van-e társítva érték a 100-as kulcshoz vagy sem!

Távolítsd el az összes kulcs érték párt!
*/

 let firstObject = new Object(); 

/* let object = {}; */
/* firstObject ={name:"Géza"}  */

function isObjectEmpty(object){
if(Object.keys(object).length > 0){
  console.log("Object is not empty");  
}else{
   console.log("Object is empty"); 
   }
   return object;
};

isObjectEmpty(firstObject)

/* firstObject[97] = 'a' */

 /* let newObject = {
    97:'a',
    98:'b',
    99:'c',
    65:'A',
    66:'B',
    67:'C'
}; 

for(let key in newObject){
    console.log(key, newObject[key])
     firstObject[key] = newObject[key]
}  */
 
let newObject = [
   [97,'a'],
   [98,'b'],
   [99,'c'],
   [65,'A'],
   [66,'B'],
   [67,'C']
];

for(let i = 0; i < newObject.length; i++){
    firstObject[newObject[i][0]]= newObject[i][1] 
};

 console.log(firstObject);
console.log(Object.keys(firstObject));
console.log(Object.values(firstObject));

firstObject[68]= "D";

console.table(firstObject);

console.log(Object.entries(firstObject).length);

/* console.log(Object.values(firstObject)[6]) */
console.log(firstObject[99])

delete firstObject[97];

console.table(firstObject);

console.log(firstObject[100]);


for(let k in firstObject){
      delete firstObject[k]
};

console.log(firstObject);