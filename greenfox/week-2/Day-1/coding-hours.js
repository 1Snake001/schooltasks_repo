'use strict';

// Egy átlagos Green Fox hallgató 6 órát kódol naponta
// Egy félév hosszúsága 17 hét
//
// Írd ki, hány órát tölt kódolással egy hallgató egy félév során,
// ha a hallgató csak hétköznap kódol
//
// Írd ki, hogy a félév hány százalékát tölti a hallgató kódolással
// ha az átlagos heti munkaidő 52 óra

let codingHours = 6;
let halfYear = 17;
let weekDaysCoding = codingHours * 5;

let codeingTime = halfYear * weekDaysCoding;
console.log(codeingTime);

let halfYearHours = halfYear * 52;

let halfYearOnePercent = halfYearHours / 100;

let codingPercent = codeingTime / halfYearOnePercent;
console.log(codingPercent+" %");


