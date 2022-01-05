"use strict";

// Rajzold ki az éjszakai eget:
//  - A háttér legyen fekete
//  - A csillagok kis négyzetek legyenek
//  - A csillagok legynek véletlenszerüen elhelyezve a canvason
//  - A csillagok színe változzon véletlenszerűen (szürke árnyalatai)

const canvas = document.querySelector(".main-canvas");
const ctx = canvas.getContext("2d");

// generate random number
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// generate random color & position
const setFillRectRanGray = (value) => {
  value = Math.floor((Math.random() * 256) | 0).toString(16);
  ctx.fillStyle = "#" + value + value + value;
  ctx.fillRect(
    getRandomInt(canvas.width - 20),
    getRandomInt(canvas.height - 20),
    20,
    20
  );
};

for (let i = 0; i < 20; i++) {
  setFillRectRanGray();
}
