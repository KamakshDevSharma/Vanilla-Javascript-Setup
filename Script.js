const canvas = document.querySelector('canvas');
const c = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

//
var colors = ["blue", "red", "orangered", "purple", "brown", "blueviolet"];
var mouse = {
    x: null,
    y: null
}
document.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
})

//
class Box {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        c.fillStyle = this.color;
        c.fillRect(this.x,this.y,this.width,this.height);
    }

    update() {
        this.draw();
    }
    /*
        code for 2d rect collision:

        if (this.x + this.radius >= player.x && this.x - this.radius <= player.x + player.width && this.y + this.radius >= player.y) {
            this.yVel = -this.yVel;
        }
    */
}

//
class Circle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 360);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
    }

    bounceFromWall() {
        if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
            this.xVel = -this.xVel;
        }
        if (this.y + this.radius >= canvas.height || this.y - this.radius <= 0) {
            this.yVel = -this.yVel;
        }
    }

    update() {
        this.draw();
    }
}

function animate() {
    requestAnimationFrame(animate);


} animate();