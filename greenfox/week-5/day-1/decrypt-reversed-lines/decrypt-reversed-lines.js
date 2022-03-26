"use strict";
// Készíts egy függvény, ami dekódolja a reversed-lines.txt tartalmát
let fs = require("fs");

function decode(text) {
  let content = fs.readFileSync(text, "utf8");
  let decContent = content.split("\n");
  let newText = [];
  for (let i = 0; i < decContent.length; i++) {
    newText.push(decContent[i].split("").reverse().join(""));
  }
  let newContent = newText.join("\n");
  return newContent;
}

console.log(decode("reversed-lines.txt"));
