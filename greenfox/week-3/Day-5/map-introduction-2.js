'use strict'

/* 
Készíts egy asszociatív tömböt (Map) ahol a kulcsok (keys)
és az értékek (values) szöveges típusúak!

Töltsd bele a következő kulcs-érték párokat:

Kulcs (Key)	Érték (Value)
978-1-60309-452-8	A Letter to Jo
978-1-60309-459-7	Lupus
978-1-60309-444-3	Red Panda and Moon Bear
978-1-60309-461-0	The Lab
Írasd ki az összes kulcs-érték párt a következő formátumban:

A Letter to Jo (ISBN: 978-1-60309-452-8)
Lupus (ISBN: 978-1-60309-459-7)
Red Panda and Moon Bear (ISBN: 978-1-60309-444-3)
The Lab (ISBN: 978-1-60309-461-0)
Távolítsd el azt a kulcs-érték párt, melynek a kulcsa 978-1-60309-444-3!

Távolítsd el azt a kulcs-érték párt, melynek az értéke The Lab!

Add hozzá az alábbi kulcs-érték párokat a Map-hez:

Kulcs (Key)	Érték (Value)
978-1-60309-450-4	They Called Us Enemy
978-1-60309-453-5	Why Did We Trust Him?
Írasd ki, van-e érték társítva a 478-0-61159-424-8-as kulcshoz, vagy sem!

Írasd ki a 978-1-60309-453-5- as kulcshoz tartozó értéket!
*/

const MAP = {};

let data = [
    ['978-1-60309-452-8','A Letter to Jo'],
    ['978-1-60309-459-7','Lupus'],
    ['978-1-60309-444-3','Red Panda and Moon Bear'],
    ['978-1-60309-461-0','The Lab']
];

for(let i = 0; i < data.length; i++){
   MAP[data[i][0]] = data[i][1]
};

console.log(MAP);



/* for(let i = 0; i < Object.keys(MAP).length; i++){
    console.log(Object.values(MAP)[i]+' ('+ 'ISBN:'+Object.keys(MAP)[i] + ')') 
}; */

 for(let key in MAP){
  console.log(`${MAP[key]} (ISBN:${key})`)
};

delete MAP['978-1-60309-444-3'];

console.log(MAP);

for(let key in MAP){
    if(MAP[key]== 'The Lab'){
     delete MAP[key]
    }
};

console.log(MAP);

/* let moreData = [
    ["978-1-60309-450-4","They Called Us Enemy"],
    ["978-1-60309-453-5","Why Did We Trust Him?"]
];

for (let i = 0; i < moreData.length; i++) {
    MAP[moreData[i][0]] = moreData[i][1];
} */

MAP['978-1-60309-450-4'] ='They Called Us Enemy';
MAP['978-1-60309-453-5'] ='Why Did We Trust Him?';
console.log(MAP);

/* if(MAP["478-0-61159-424-8"]===undefined) {
    console.log("Nincs érték társítva!");
} else {
    console.log("Van érték társítva!");
} */

if(Object.keys(MAP).includes('478-0-61159-424-8') == false){
    console.log("Nincs érték társítva!");
}else{
    console.log("Van érték társítva!");
};

console.log(MAP['978-1-60309-453-5'])
