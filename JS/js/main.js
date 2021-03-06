let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");
let x = 50, y = 110;

let dx = 6,
    dy = 9,
    mass = 1,
    radius = 40,
    k = 1; // px \ frame

let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;

//theory

let frx  = 1,
    fry  = 1,
    ax = 0,
    ay = 1;
/*

    Сила = масса * ускорение -> ускорение = сила / масса
    Скорость = предыдущая скорость + ускорение ( на время, но здесь это каждый фрейм)

*/
//init
canvas.height = 500
canvas.width = 520 ;

dx = 20;
dy = 10;
//functions
function clear(){
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.height, canvas.width);
}

function update(){

  dx += frx / mass
  dy += fry / mass
  // if(x + dx > canvas.width - radius || x + dx < radius)
  //   dx = - k * dx;
  // if(y + dy > canvas.height - radius || y + dy < radius)
  //   dy = - k * dy;

    if(x + dx > canvas.width-radius || x + dx < radius)
    dx = -dx;

    if(y + dy > canvas.height-radius || y + dy < radius)
    dy = -dy


    x += dx
    y += dy
}

function show(){
    ctx.fillStyle = "#29a329";
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
}

setInterval(function () {
  clear();
  update();
  show();
}, 20);
