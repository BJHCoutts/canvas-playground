console.log("r/place");

const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");

c.fillStyle = "rgba(30, 60,199, .8)";
c.fillRect(100, 100, 100, 100);
c.fillRect(500, 500, 100, 100);
c.fillRect(700, 700, 100, 100);

c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(700, 900);
c.strokeStyle = "red";
c.stroke();

console.log(canvas);
