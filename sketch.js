var cam;
var img = [];
var carousel;

function preload() {
  img.push(loadImage('assets/nature.jpg'));
  img.push(loadImage('assets/nature2.jpg'));
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  cam = new navCamera();
  carousel = new carousel();
}

function draw() {
  background(200);
  cam.update();
  carousel.update();
}

function carousel() {
  // setup 8 boxes in a caraousel

  this.total = 8;
  this.radius = 2000;

  this.update = function() {
    this.centerX = 0;
    this.centerY = 0;
    for (var i = 0; i < this.total; i++) {
      var x = (Math.cos(i / this.total * TWO_PI) * this.radius),
          z = (Math.sin(i / this.total * TWO_PI) * this.radius),
          y = 0;

      push();
      translate(x, y, z);
      fill(100, 50, (255 / 8) * i);
      texture(img[i % 2]);
      rotateY(-QUARTER_PI * (i + 2));
      box(800, 800, 800);
      pop();
    }
  }
}

function mouseReleased() {
  cam.onMouseRelease();
}

function mousePressed() {
  cam.onMousePress();
}
