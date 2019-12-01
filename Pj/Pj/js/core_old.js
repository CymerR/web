const canvas = document.querySelector("#canvas"),
	  ctx    = canvas.getContext("2d");


canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;


class Obj{

	constructor(mass, x, y, radius){
		this.mass = mass
		this.x = x
		this.y = y
		this.radius = radius
	}

	update(dx, dy){
		this.x += dx
		this.y += dy
	}

	determine(vAcc){
		this.ax = vAcc.x
		this.ay = vAcc.y
	}

}


let x  = canvas.width  / 2
let y  = canvas.height / 2,
	dy = 0,
	dx = 8,
	dy2 = 0,
	dx2 = 0,
	k  = 1,
	dt = 0.15,
	kuk = 0.3,
	ky = 0.73,
	radius = 30,
	gravity = .23;

setInterval(() =>{

	//clear
	ctx.fillStyle = "#000";
	ctx.clearRect(0,0, canvas.width, canvas.height);
	//draw
	ctx.fillStyle = "#fff";
	ctx.fillRect(x, y, radius, radius)

	// ctx.fillText("x = " + ball1.x, 40, 30);
	// ctx.fillText("y = " + ball1.y, 40, 50);
	//
	// ctx.fillText("x = " + ball2.x, 80, 80);
	// ctx.fillText("y = " + ball2.y, 80, 100);

	if (x + 50 >= canvas.width  || x <= 0)
		dx = -dx * k;
	if (y + 50 >= canvas.height || y <= 0)
		dy = -dy

	// if (ball2.x + 50 >= canvas.width  || ball2.x <= 0)
	// 	dx2 = -dx2 * k;
	// if (ball2.y + 50 >= canvas.height || ball2.y <= 0)
	// 	dy2 = -dy2 * 0.76


	x += dx;
	y += dy;

	dy += gravity
	//
	//
	// ball1.update(dx, dy)
	// ball2.update(dx2, dy2)


}, 20)
