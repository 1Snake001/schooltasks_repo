'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// NE NYÚLJ A FENTI KÓDHOZ

// Készíts egy függvényt, ami rajzol egy négyzetet és egy paramétert vár:
// A négyzet méretét (egy oldal hossza)
// kirajzol egy ekkora négyzetet a canvas közepére.
// Rajzolj 3 négyzetet ezzel a függvénnyel.
// Kerüld a  kód duplikációt.

        function middleRectAngle(squareSide){
            ctx.strokeRect(canvas.width/2 -squareSide/2,canvas.height/2 -squareSide/2, squareSide , squareSide)
        };

        middleRectAngle(50);
        middleRectAngle(100);
        middleRectAngle(200);