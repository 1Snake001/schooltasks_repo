"use strict";

// Írj egy függvényt, ami kap egy fájlnevet paraméterként
// A fájl tartalmaz egy befejezett Amőba meccset
// Biztosítottunk pár példafájlt (draw.txt, win-x.txt, win-o.txt)
// Adj vissza 'X'-et, 'O'-t vagy 'Döntetlen'-t a beadott fájl alapján.

/* console.log(ticTacResult('win-o.txt')) */
// Ezt kéne kiírja: 'O'

/* console.log(ticTacResult('win-x.txt')) */
// Ezt kéne kiírja: 'X'

/* console.log(ticTacResult('draw.txt')) */
// Ezt kéne kiírja: 'Döntetlen'

let fs = require("fs");

let text = fs.readFileSync("win-x.txt", "utf8");
let horizontalRows = text.split("\n");
console.log(horizontalRows.includes("XXX"));

let verticalRows = [];

function x(x){
    for (let i = 0; i < text.split("\n").length; i++) {
        let v = text.split('\n')[i][x];
        verticalRows.push(v);
  }
};
x(0);
x(1);
x(2);

console.log(verticalRows);

