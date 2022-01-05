"use strict";

const canvas = document.querySelector(".main-canvas");
const ctx = canvas.getContext("2d");

// NE NYÚLJ A FENTI KÓDHOZ

// Rajzolj egy négyzetet aminek minden oldala más színű.

function lineDraw(moveToX, moveToY, lineToX, lineToY, color) {
  ctx.beginPath();
  ctx.moveTo(moveToX, moveToY);
  ctx.lineTo(lineToX, lineToY);
  ctx.strokeStyle = color;
  ctx.stroke();
}

lineDraw(100, 100, 300, 100, "red");
lineDraw(300, 100, 300, 300, "purple");
lineDraw(300, 300, 100, 300, "green");
lineDraw(100, 300, 100, 100, "blue");
