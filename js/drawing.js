
const canvas = document.querySelector(".hero__canvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

const ctx = canvas.getContext("2d");
ctx.fillStyle = "lightBlue";
ctx.fillRect(20, 20, width - 40, height - 120);

/* ctx.fillStyle = 'green';

//заполненный прямоуг
ctx.fillRect(70, 70, 220, 220);
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 200, 200);

//пустой прямоуг
ctx.lineWidth = 5;  //Ширина
ctx.strokeStyle = 'tomato';
ctx.strokeRect(25, 25, 175, 200);


ctx.fillStyle = 'red';
ctx.lineWidth = 5;  //Ширина
ctx.beginPath();
ctx.moveTo(600, 600);
// draw your path
ctx.fill();
 */

function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}

/* ctx.beginPath(); //сбросить все сабпути- т.е. начать отрисовку с начала.
const x = 300;
const y = 300;
ctx.moveTo(x,y); // перенести начало рисования
ctx.lineTo(x + 300, y); // линия
ctx.lineTo(x + 300, y + 100);
ctx.lineTo(x, y + 100);
ctx.lineTo(x , y);
ctx.fill();  //Отрисовать ранее заданное И закрасить .
ctx.stroke();  //Отрисовать ранее заданное контуром (т.е. обычными линиями).
 */

ctx.fillRect(399, 399, 2, 2);
ctx.strokeStyle = "tomato";

const lineWidth = 20;
ctx.lineWidth = lineWidth; //Ширина
//    ctx.strokeStyle = `rgb(${Math.random() * 250},${Math.random() * 250},${Math.random() * 250})`;
let timePoint = 0;
for (let i = 0; i < 361; i += 6) {
  //i+=6 будет секунда

  setTimeout(() => {
    for (let j = 10; j < 300; j += lineWidth) {
      setTimeout(() => {
        ctx.beginPath();
        ctx.strokeStyle = `rgb(${Math.random() * 250},${Math.random() * 250},${Math.random() * 250})`;
        ctx.arc(800, 400, j, degToRad(90), degToRad(90 + i), false);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(800, 400, j, degToRad(-90), degToRad(-90 + i), false);
        ctx.stroke();
      }, 10 * j); //166.7 * i  будет секунда
    }
  }, 2 * i); //166.7 * i  будет секунда
}
/* 
ctx.fillStyle = 'tomato';
ctx.beginPath();
ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
ctx.fill();
 */
/* const shift = 200;
setTimeout(() => {
  ctx.beginPath();
  ctx.fillStyle = `rgb(${Math.random() * 250},${Math.random() * 250},${Math.random() * 250})`;
  ctx.arc(shift + 400, 400, 150, degToRad(0), degToRad(360), false);
  ctx.fill();
}, 1000);
setTimeout(() => {
  ctx.beginPath();
  ctx.fillStyle = `rgb(${Math.random() * 250},${Math.random() * 250},${Math.random() * 250})`;
  ctx.arc(shift + 600, 400, 150, degToRad(0), degToRad(360), false);
  ctx.fill();
}, 2000);
setTimeout(() => {
  ctx.beginPath();
  ctx.fillStyle = `rgb(${Math.random() * 250},${Math.random() * 250},${Math.random() * 250})`;
  ctx.arc(shift + 800, 400, 150, degToRad(0), degToRad(360), false);
  ctx.fill();
}, 3000);
 */
