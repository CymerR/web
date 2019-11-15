let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;

let MBox = new Box(WIDTH/2, HEIGHT/2);

let x = 500, y = 300;

let velocityX = 5;
let velocityY = 5;
//functions
function clear(){
  ctx.fillStyle = "red";
  ctx.fillRect(0,0,WIDTH,HEIGHT);
}

function update(){
    x += velocityX;
    y += velocityY;

}

function show(){
  ctx.fillStyle = "green";
  ctx.fillRect(x, y, 50, 50);
}

let timer = setInterval(()=>{
    clear();
    update();
    show();
  }, 100);
