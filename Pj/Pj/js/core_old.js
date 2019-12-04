const canvas = document.querySelector("#canvas"),
	  	ctx    = canvas.getContext("2d");

let flagGravity = document.querySelector('#checkbox')


canvas.width  = window.innerWidth;
canvas.height = window.innerHeight - 80;

let slider = document.querySelector('#gravity')

slider.min = 0.1
slider.max = 10;
slider.step = 0.05

slider.defaultValue = .23;

function Entity(mass, x, y) {
		this.mass = mass
		this.x = x
		this.y = y

		this.dx = 0
		this.dy = 0
}

let x  = canvas.width  / 2
let y  = canvas.height / 2,
		dx = 1,
		dy = 4,
		radius = 30,
		gravity = .23;

var fi = 0;


ball =  new Entity(15, x, y);
ball.dy = -5
ball.dx = 5;
ball.radius = 60

ball2 = new Entity(14, x+20, y - 40);

setInterval(() =>{

 	var fi = 0;
	gravity = +slider.value;

	if (flagGravity.checked)
			gravity = 0;

	//clear
	clear()
	//draw
	ctx.fillStyle = "#fff";
	ctx.fillRect(ball.x, ball.y, ball.radius, ball.radius);

	fi = Math.atan(Math.abs(ball.dy) /  Math.abs(ball.dx));

	ctx.fillStyle = "honeydew";
	ctx.font = "48px serif"
	ctx.fillText("φ : " + Math.round(100 * fi) / 100, 40, 70);


	ctx.beginPath();
	ctx.moveTo(50, 90);
	ctx.lineTo(Math.sin(fi) * 15, Math.cos(fi) * 15 );
	ctx.fill();

	//collision tests
	collisionTester(ball);

		ball.x += ball.dx;
		ball.y += ball.dy;

		ball.dy += gravity;


}, 20)


function clear() {
	ctx.fillStyle = "#000";
	ctx.clearRect(0,0, canvas.width, canvas.height);
}


function collisionTester(ball) {
	if (ball.x + ball.radius >= canvas.width  || ball.x <= 0)
			ball.dx = -ball.dx * 0.9;

	ball.x + ball.radius >= canvas.width ? ball.x = canvas.width- ball.radius : ball.x = ball.x;
	ball.x <= 0 ? ball.x = 0 : ball.x = ball.x;
	if (ball.y <= 0)
			ball.dy =  -ball.dy * 0.7;
	if (ball.y + ball.radius >= canvas.height)
			ball.dy = -ball.dy + 2 * gravity;
	if (ball.y <= 0)
		ball.y = 0
	if (ball.y + ball.radius >= canvas.height)
			ball.y = canvas.height - ball.radius
}
canvas.addEventListener("click",(e)=>{
	ball.dx *= 1.4
	ball.dy *= 1.4;
});

canvas.addEventListener("keyDown", (evetn)=> {
	console.log(evetn.key);
})
