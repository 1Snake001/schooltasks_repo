'use strict';
// - Hozz létre egy `typo` nevű változót, legyen az értéke `Csincsill`
// - Írj egy `appendAFunc` nevű függvényt, ami kap egy string paramétert és
//   hozzácsatol egy 'a' karaktert a string végéhez, majd visszatér az így
//   kapott teljes stringel
// - Írd ki az `appendAFunc(typo)` eredményét  a konzolra

let typo1 = `Csincsill`;
let typo2 = 'Kamill';
let typo3 = 'Angli';

let appendFunc = (string) => {
    return  string + 'a'
};

console.log(appendFunc(typo3));