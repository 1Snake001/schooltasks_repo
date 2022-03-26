// Írj egy programot, ami megnyit egy 'my-file.txt' nevű fájlt
// majd kiír minden sort a fájlból.
// Ha a program nem tud olvasni a fájlból (pl.: mert nem létezik),
// akkor írja ki, hogy: 'Unable to read file: my-file.txt'

let fs = require("fs");

function printEachLine() {
  let myFile;
  try {
    myFile = fs.readFileSync("my-file.txt", "utf8");
    console.log(myFile);
  } catch (error) {
    console.log(" Unable to read file: my-file.txt ");
  }
}

printEachLine();
