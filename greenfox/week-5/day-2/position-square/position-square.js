'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// NE NYÚLJ A FENTI KÓDHOZ

// Készíts egy függvényt, ami rajzol egy négyzetet és két paramétert vár:
// Az x és y koordinátáit a négyzet bal felső sarkának, majd rajzol
// egy 50x50-es négyzetet ebből a pontból.
// Rajzolj 3 négyzetet ezzel a függvénnyel.
// Kerüld a kód duplikációt.

  function drawSquare(x,y){
      

      for(let i=0;i<=3;i++){
       ctx.fillRect(x,y,50,50)   
        x+=x;
        y+=y;
      };
};

drawSquare(100,50,50,50);
