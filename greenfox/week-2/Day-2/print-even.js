"use strict";

// Írj egy programot, ami kiírja az összes páros számot 0 és 500 között
let number = 2;

for (let i = 0; i < 500; i++) {
  if (i % 2 == 0) {
    let counter = number + i;
    console.log(counter);
  }
}
