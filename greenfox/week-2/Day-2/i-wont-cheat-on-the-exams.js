"use strict";

// Írj egy programot ami 100-szor kiírja:
// "Nem fogok csalni az a vizsgán!"

let counter = 0;

for (let i = 0; i < 100; i++) {
  console.log(counter++ + 1, ":", "Nem fogok csalni az a vizsgán!");
}
