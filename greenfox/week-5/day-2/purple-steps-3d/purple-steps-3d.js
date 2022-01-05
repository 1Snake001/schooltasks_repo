"use strict";

const canvas = document.querySelector(".main-canvas");
const ctx = canvas.getContext("2d");

// NE NYÚLJ A FENTI KÓDHOZ

// Reprodukáld ezt:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]

function purpleSteps3D() {
  ctx.fillStyle = "#B247F0";
  for (let i = 15; i < canvas.width / 9; i += i / 3) {
    let v = i - 10.5;
    ctx.fillRect(v += v / 3 * 6, v, i, i);
  }
}

purpleSteps3D();

/*
function purpleSteps3D(size) {
    ctx.fillStyle = "purple";

    let a = size;

    for (let i = 0; i < 6; i++) {
        ctx.fillRect(a, a, size, size);
        a += size;
        size += a / 8;
    }
}

purpleSteps3D(15);
*/
