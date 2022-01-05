'use strict'

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// NE NYÚLJ A FENTI KÓDHOZ

// Reprodukáld ezt:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

function purpleSteps(){
    ctx.fillStyle= "#B247F0"
        for(let x = 10; x < canvas.width/2-100 ; x+=10){
            ctx.fillRect(x, x, 10, 10);
        }
};

purpleSteps();