let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;

let MBox = new Box(WIDTH/2, HEIGHT/2);

let velocityX = 5;
let velocityY = 5;
//functions
function clear(){
  ctx.fillStyle = "red";
  ctx.fillRect(0,0,WIDTH,HEIGHT);
}

function update(){
    MBox.x += velocityX;
    MBox.y += velocityY;
    if (MBox.x >= WIDTH)
      velocityX = -velocityX;
    if (MBox.y >= HEIGHT)
      velocityX = -velocityY;
}

function show(){
  ctx.fillStyle = "black";
  ctx.fillRect(MBox.x, MBox.y, 50, 50);
}

function loop(){
  let timer = setinterval(()=>{
    clear();
    update();
    show();
  }, 16);
}
loop();
