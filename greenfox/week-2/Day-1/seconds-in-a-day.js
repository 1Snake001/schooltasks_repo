'use strict';

const currentHours = 14;
const currentMinutes = 34;
const currentSeconds = 42;

// Írj egy programot, ami kiszámítja, hogy hány másodperc
// van még hátra a napból úgy, hogy az aktuális időt a fenti változókkal
// lehet beállítani

let hoursOfDay = 24;
let minutesOfHours = 60;
let secondsOfMinutes = 60;

let currentDayTime = (currentHours * minutesOfHours * secondsOfMinutes) + (currentMinutes * secondsOfMinutes) + currentSeconds;
let secondsOfDay = hoursOfDay * minutesOfHours * secondsOfMinutes;

 let remainingSeconds = secondsOfDay - currentDayTime;
 console.log(remainingSeconds); 
