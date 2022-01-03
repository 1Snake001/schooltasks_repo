'use strict'

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');


ctx.fillStyle = 'gray';
ctx.fillRect(20, 20,200,200);

// triangle
ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(240, 240);
ctx.lineTo(300, 300);
ctx.lineTo(400, 100);
ctx.lineTo(240, 240);
ctx.stroke();

// circle
ctx.fillStyle = 'blue'
ctx.beginPath();
ctx.arc(400,500,50,0,3*Math);
ctx.lineTo(400, 500)
ctx.fill();*/

// CLOCKWISE, angle = PI
ctx.beginPath();
ctx.arc(50, 50, 40, 0, Math.PI, false);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "red";
ctx.fill();

// CLOCKWISE, angle = 2 PI
ctx.beginPath();
ctx.arc(150, 50, 40, 0, 2 * Math.PI, false);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "red";
ctx.fill();

// CLOCKWISE, angle = 3 PI
ctx.beginPath();
ctx.arc(250, 50, 40, 0, 3 * Math.PI, false);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "red";
ctx.fill();

// COUNTERCLOCKWISE, angle = PI
ctx.beginPath();
ctx.arc(50, 150, 40, 0, Math.PI, true);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "blue";
ctx.fill();

// COUNTERCLOCKWISE, angle = 2 PI
ctx.beginPath();
ctx.arc(150, 150, 40, 0, 2 * Math.PI, true);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "blue";
ctx.fill();

// COUNTERCLOCKWISE, angle = 3 PI
ctx.beginPath();
ctx.arc(250, 150, 40, 0, 3 * Math.PI, true);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "blue";
ctx.fill();