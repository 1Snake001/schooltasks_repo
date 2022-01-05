'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// NE NYÚLJ A FENTI KÓDHOZ

// Rajzold be a canvas átlóit
// Amelyik a bal felső sarokból indul, az legyen zöld, a másik piros.

function lineDraw(moveToX, moveToY, lineToX, lineToY, color) {
    ctx.beginPath();
    ctx.moveTo(moveToX, moveToY);
    ctx.lineTo(lineToX, lineToY);
    ctx.strokeStyle = color;
    ctx.stroke();
  };

  lineDraw( 0, 0, canvas.width, canvas.height, "green");
  lineDraw(canvas.width , 0,  0, canvas.height, "red");