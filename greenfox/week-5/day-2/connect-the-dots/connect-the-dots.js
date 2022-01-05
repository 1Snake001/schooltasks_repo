"use strict";

const canvas = document.querySelector(".main-canvas");
const ctx = canvas.getContext("2d");

// NE NYÚLJ A FENTI KÓDHOZ

// Készíts egy függvényt, ami egy paramétert vár:
// Egy listát [x, y] pontokkal
// és összeköti őket zöld vonalakkal.
// Kösd össze, kapsz egy dobozt: [[10, 10], [290, 10], [290, 290], [10, 290]]
// Kösd össze ezeket: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

function connect(list) {
  ctx.beginPath();
  ctx.moveTo(list[0][0], list[0][1]);

  for (let i = 1; i < list.length; i++) {
    ctx.lineTo(list[i][0], list[i][1]);
  }

  ctx.closePath();
  ctx.strokeStyle = "green";
  ctx.stroke();
}

connect([
  [50, 100],
  [70, 70],
  [80, 90],
  [90, 90],
  [100, 70],
  [120, 100],
  [85, 130],
  [50, 100],
]);
