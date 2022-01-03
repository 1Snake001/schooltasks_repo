'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// NE NYÚLJ A FENTI KÓDHOZ

// Töltsd ki a canvast sakktábla mintával.


 function checker(){
     for(let x = 0; x <= 600 ; x+=200){
        for(let y=0;y<=400;y+=200){
            ctx.fillRect(x, y, 100, 100);
            ctx.fillRect(x + 100, y-100 , 100, 100);
       }
     }
 };

 checker();