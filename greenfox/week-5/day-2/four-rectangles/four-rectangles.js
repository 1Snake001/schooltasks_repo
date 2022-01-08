"use strict";

const canvas = document.querySelector(".main-canvas");
const ctx = canvas.getContext("2d");

// NE NYÚLJ A FENTI KÓDHOZ

// Rajzolj négy különböző méretű és színű négyszöget
// Kerüld a kód duplikációt

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let rectAngle = (movetoX, movetoY, width, height) => {
  let randomColor = Math.floor((Math.random() * 16777215) | 0).toString(16);
  ctx.fillStyle = "#" + randomColor;
  ctx.fillRect(movetoX, movetoY, width, height);
};
for (let i = 0; i < 4; i++) {
  rectAngle(
    getRandomInt(canvas.width - 150),
    getRandomInt(canvas.height - 120),
    getRandomInt(60),
    getRandomInt(60)
  );
}
