"use strict";

/* 
Készíts egy Sharpie osztályt
Tudnunk kell mindegyik filctoll
színét: color (ez legyen string típusú),
szélességét: width (legyen egy szám) és
tinta mennyiségét: inkAmount (szintén egy szám)
Példányosításkor a color és a width legyenek kötelezően megadandóak
Minden példányosított filctoll inkAmount értéke legyen alapból 100
Legyen az objektumoknak egy use() (használ) metódusa, ami csökkenti az inkAmount értékét 10-el 
*/

class Sharpie {
  constructor(color, width) {
    this.color = color;
    this.width = width;
    this.inkAmount = 100 ;
  }

  use() {
    this.inkAmount -= 10;
  }
};

const feltPen1 = new Sharpie("red", 20);
feltPen1.use();

console.log(feltPen1);
