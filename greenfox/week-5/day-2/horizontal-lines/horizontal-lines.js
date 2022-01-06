"use strict";

const canvas = document.querySelector(".main-canvas");
const ctx = canvas.getContext("2d");

// NE NYÚLJ A FENTI KÓDHOZ

// Készíts egy függvényt, ami rajzol egy vonalat és két paramétert vár:
// a vonal kezdőpontjának x és y koordinátáit, majd kirajzol
// egy 50 hosszú horizontális vonalat ebből a pontból.
// Rajzolj legalább 3 ilyen vonalat egy loop segítségével

function toHorizont(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 50, y);
  ctx.stroke();
}

for (let i = 0; i < canvas.width - 50; i += 100) {
  toHorizont(i, i);
}
