"use strict";

const canvas = document.querySelector(".main-canvas");
const ctx = canvas.getContext("2d");

// NE NYÚLJ A FENTI KÓDHOZ

// Készíts egy függvényt, ami rajzol egy vonalat és két paramétert vár:
// A vonal kezdőpontjának x és y koordinátáit. Ezután rajzol egy vonalat
// a megadott pont és a canvas közepe között.
// Töltsd meg a canvast vonalakkal, a szélektől indulva 20 pixelenként.

function toCenter(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(canvas.width / 2, canvas.height / 2);
  ctx.stroke();
};

for (let i = 0; i <= canvas.width; i += 20) {
  toCenter(i, 0);
  toCenter(i, canvas.height);
};

for (let j = 0; j <= canvas.height; j += 20) {
  toCenter(0, j);
  toCenter(canvas.width, j);
};
