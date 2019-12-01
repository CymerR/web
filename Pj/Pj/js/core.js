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


function lenghOf(obj1, obj2) {
	// body...
    return Math.sqrt(Math.pow(Math.abs(obj1.x - obk2.x), 2) + Math.pow(Math.abs(obj1.y - obj2.y), 2))
}

function toCalc(obj1, obj2) {
	// F = m1 * m2 / r^2
	// a = F / mass
	// are vectors
	//to acceleration we need an theta angle
	let theta = Math.atan2((Math.abs(obj1.x - obj2.x)), (Math.abs(obj1.y - obj2.y)))

	let xForce = obj1.mass * obj2.mass; 

}




let x  = canvas.width  / 2
let y  = canvas.height / 2,
	dy = 0,
	dx = 0,
	dy2 = 0,
	dx2 = 0,
	k  = 1,
	dt = 0.15,
	kuk = 0.3,
	ky = 0.73,
	gravity = 9.23; 

let ball1 = new Obj(1, 300, 30, 25)
let ball2 = new Obj(5, 400, 200, 30)

setInterval(() =>{

	//clear
	ctx.fillStyle = "#000";
	ctx.clearRect(0,0, canvas.width, canvas.height);
	//draw
	ctx.fillStyle = "#fff";
	ctx.arc(ball1.x, ball1.y, ball1.radius, Math.PI * 2, false);
	ctx.arc(ball2.x, ball2.y, ball2.radius, Math.PI * 2, false);
	ctx.fill();

	ctx.fillText("x = " + ball1.x, 40, 30);
	ctx.fillText("y = " + ball1.y, 40, 50);

	ctx.fillText("x = " + ball2.x, 80, 80);
	ctx.fillText("y = " + ball2.y, 80, 100);

	if (ball1.x + 50 >= canvas.width  || ball1.x <= 0)
		dx = -dx * k;
	if (ball1.y + 50 >= canvas.height || ball1.y <= 0)
		dy = -dy * 0.76

	if (ball2.x + 50 >= canvas.width  || ball2.x <= 0)
		dx2 = -dx2 * k;
	if (ball2.y + 50 >= canvas.height || ball2.y <= 0)
		dy2 = -dy2 * 0.76


	

	ball1.update(dx, dy)
	ball2.update(dx2, dy2)


}, 10)
