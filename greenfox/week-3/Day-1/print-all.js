'use strict';
// Hozz létre egy `numbers` változót az alábbi tartalommal: `[4, 5, 6, 7]`
// Logold ki a konzolra a numbers tömb mindegyik elemét
// *hint: használj ciklust, a console.log(numbers) nem jó megoldás!
// Bónuszpont, hogyha ezt megcsinálod a megfelelő beépített függvénnyel is

let numbers = [4, 5, 6, 7];

/* for(let i = 0; i< numbers.length; i++){
    console.log(numbers[i]);
}; */

/* for(let number of numbers){
    console.log(number);
}; */

/* for(let k in numbers){
    console.log(numbers[k])
}; */

/* numbers.map(number => console.log(number)); */

 numbers.forEach(number => console.log(number)); 

