"use strict";

const canvas = document.querySelector(".main-canvas");
const ctx = canvas.getContext("2d");

// NE NYÚLJ A FENTI KÓDHOZ

// rajzolj egy piros horizontális vonalat a canvas közepére
// rajzolj egy zöld vertikális vonalat a canvas közepére

function lineDraw(moveToX, moveToY, lineToX, lineToY, color) {
  ctx.beginPath();
  ctx.moveTo(moveToX, moveToY);
  ctx.lineTo(lineToX, lineToY);
  ctx.strokeStyle = color;
  ctx.stroke();
}
lineDraw(canvas.width / 2, 0, canvas.width / 2, canvas.height, "red");
lineDraw(0, canvas.height / 2, canvas.width, canvas.height / 2, "green");
