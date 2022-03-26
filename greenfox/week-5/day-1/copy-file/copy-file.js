"use strict";

// Írj egy függvényt, ami átmásolja egy fájl tartalmát egy másikba
// A két fájl nevét paraméterként kapja meg
// És visszaad egy boolean értéket, attól függően,
// hogy sikeres volt-e a másolás

let fs = require("fs");

function fileCopy(oldText, newText) {
  try {
    let myFile = fs.readFileSync(oldText, "utf8");
    let newFile = fs.writeFileSync(newText, myFile);
    return true;
  } catch (error) {
    return false;
  }
}

console.log(fileCopy("my-file.txt", "new-file.txt"));
