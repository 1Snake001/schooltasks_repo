'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// NE NYÚLJ A FENTI KÓDHOZ

// Készíts egy négyzet rajzoló függvényt ami két paramétert vár:
// A négyzet méretét és a kitöltés színét, majd kirajzol
// egy ilyen színű és méretű négyzetet a canvas közepére.
// Készíts egy loop-ot, ami kitölti a canvast szívárványszínű négyzetekkel
// (piros, narancs, sárga, zöld, kék, indigó, ibolya)

let colors = ['red', 'orange', 'yellow', 'green', 'blue', '#4B0082', 'violet'];

function squareDrawer(squareSide){
    for(let i = 0; i < colors.length; i++){
        ctx.strokeStyle = colors[i]
        squareSide+=50;
        ctx.strokeRect(canvas.width/2 - squareSide/2,canvas.height/2 -squareSide/2, squareSide, squareSide);
    };
};

squareDrawer(50);