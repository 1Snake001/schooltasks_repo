// Írj egy függvényt countLines() néven, ami fogad egy fájlnevet stringként,
// majd visszadja a fájlban található sorok számát.
// Ha nem tudja megnyitni a fájlt adjon vissza nullát és
// ne jelezzen semmilyen hibát.

let fs = require("fs");
let fileName = "lines.txt"; /* "../print-each-line/my-file.txt" */

function countLines() {
  try {
    let lines = fs.readFileSync(fileName, "utf8");
    let linesCount = lines.split("\n");
    return linesCount.length;
  } catch {
    return 0;
  };
};

console.log(countLines(fileName));
