"use strict";

const canvas = document.querySelector(".main-canvas");
const ctx = canvas.getContext("2d");

// NE NYÚLJ A FENTI KÓDHOZ

// Készíts egy függvényt, ami rajzol egy vonalat és két paramétert vár:
// A vonal kezdőpontjának x és y koordinátáját. Majd húz
// egy volnalat abból a pontból a canvas középpontjáig.
// Rajzolj legalább három vonalat egy loop segítségével.

let lineDrawer = (x, y) => {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(canvas.width / 2, canvas.height / 2);
  ctx.stroke();
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
};

for (let i = 1; i <= 5; i++) {
  lineDrawer(
    getRandomInt(canvas.width / 5) * i,
    getRandomInt(canvas.height / 5) * i
  );
};
