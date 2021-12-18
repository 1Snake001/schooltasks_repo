// Hozz létre egy függvényt, ami megkap bemeneten egy számokból álló listát
// Visszadaja egy másik listát, ahol az első lista elemei rendezett emelkedő
// Sorrendben szereplnek, készíts egy második paramétert, ami ha igaz
// Csökkenő sorrendben adja vissza a listát

//  Példa:
/* console.log(bubble([43, 12, 24, 9, 5])) */
//  ezt kéne kiírja: [5, 9, 12, 24, 34]
/* console.log(advancedBubble([43, 12, 24, 9, 5], true)) */
//  ezt kéne kiírja: [34, 24, 12, 9, 5] */

function bubble(arr) {
  arr = arr.sort(function (a, b) {
    return a - b;
  });
  return arr;
}

function advancedBubble(arr, isDescending) {
  if (isDescending === true) {
    arr = arr.sort(function (a, b) {
      return b - a;
    });
  } 
  return arr;
}

console.log(bubble([43, 12, 24, 9, 5]));
console.log(advancedBubble([43, 12, 24, 9, 5], true));
