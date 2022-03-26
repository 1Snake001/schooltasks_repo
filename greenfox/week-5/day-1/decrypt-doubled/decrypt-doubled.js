"use strict";

// Készíts egy függvényt decryptDoubled() neven, ami fogad egy fájlnevet stringként
// és dekódolja a duplicated-chars.txt tartalmát
// Ha a fájl nem található meg adja vissza ezt a szöveget: File not found
// A dekódolás eredménye az output.txt fájlba legyen elmentve

let fs = require("fs");

function decryptDoubled(decodingTxt) {
  try {
    let content = fs.readFileSync(decodingTxt, "utf8");

    let newText = [];
 
   for (let i = 0; i < content.split("").length; i++) {
    if ((i % 2== 0)|| content[i]== '\n') {
      newText.push(content[i]);
      }
    };
   let joinedContent = newText.join('')

    fs.writeFileSync("output.txt", joinedContent);
  } catch (error) {
    console.log("File not found");
  }
};

decryptDoubled("duplicated-chars.txt");
