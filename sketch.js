var cam;
var cam2;
var img = [];
var carousel;

function preload() {
  img.push(loadImage('assets/nature.jpg'));
  img.push(loadImage('assets/nature2.jpg'));
  //img.push(loadImage('assets/wall.jpg'));
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  cam = new navCamera();
  cam2 = new cameraFPS();
  carousel = new carousel();
}

function draw() {
  background(200);
  cam.update();
  //cam2.draw();
  carousel.update();

  //texture(img[2]);
  //fill(255, 255, 0);
  //box(5000, 10, 5000);
}

function carousel() {
  // setup 8 boxes in a caraousel

  this.total = 4;
  this.radius = 200;

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
      box(100, 100, 100);
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
