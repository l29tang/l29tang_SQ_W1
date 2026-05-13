// ============================================================
// Week 1 Example 1: Images and Shapes
// ============================================================

// Variables declared outside of setup() and draw() are
// accessible everywhere in the sketch (global scope).
let controllerImg;

// ------------------------------------------------------------
// preload()
// Runs once before setup(). Always load images and sounds here
// so they are ready before the sketch tries to use them.
// If you load images inside setup() they may not appear.
// ------------------------------------------------------------
function preload() {
  // loadImage() takes a file path relative to index.html
  // The image is stored in the variable so we can use it later
  controllerImg = loadImage("assets/images/background.jpeg");
}

// ------------------------------------------------------------
// setup()
// Runs once at the very start of the sketch.
// Use it to set up your canvas and draw things that
// only need to appear once (not animated).
// ------------------------------------------------------------
function setup() {
  // createCanvas(width, height) sets the size of your canvas in pixels
  createCanvas(800, 450);

  // background() fills the canvas with a colour
  // A single number = greyscale (0 is black, 255 is white)
  background(255);

  // ----------------------------------------------------------
  // SECTION 1: TEXT
  // ----------------------------------------------------------

  // fill() sets the colour used for shapes AND text
  // Three numbers = red, green, blue (each 0–255)
  fill(0, 0, 0); // white

  // textAlign() controls how text is anchored to its x position
  // CENTER means the x coordinate is the middle of the text
  textAlign(CENTER);

  // textSize can be changed at any point — it applies to text drawn after it
  textSize(50);

  // width and height are built-in p5.js variables that
  // always hold the canvas width and height
  fill(180);
  text("I love exit 8!", width / 4, 65);
  text("Drawn using p5.js shapes", (width / 4) * 3, 65);

  // ----------------------------------------------------------
  // SECTION 2: DISPLAYING AN IMAGE
  // ----------------------------------------------------------

  // image(img, x, y, width, height) draws a loaded image
  // x and y are the TOP-LEFT corner of the image
  // The last two arguments resize the image to fit that space
  image(controllerImg, 50, 85, 300, 300);

  // ----------------------------------------------------------
  // SECTION 3: DRAWING SHAPES (a controller made of shapes!)
  // ----------------------------------------------------------
  // All shapes are drawn relative to an origin point (originX, originY)
  // so the whole drawing can be moved by changing those two values.

  // originX and originY act as the anchor point for the whole drawing.
  // Changing these two values moves the entire controller at once —
  // a useful habit for keeping drawings easy to reposition.
  let originX = 450; // left edge of the shape controller
  let originY = 85; // top edge of the shape controller

  // --- Controller body ---
  // stroke() sets the outline colour — stroke(r,g,b) or a single greyscale value
  // strokeWeight() sets how thick the outline is in pixels
  // fill() sets the inside colour of the shape
  stroke(80);
  strokeWeight(2);
  fill(210);

  // rect(x, y, width, height, cornerRadius)
  // x, y = TOP-LEFT corner of the rectangle
  // The last argument rounds all four corners by that many pixels
  rect(originX, originY + 15, 300, 200, 40);

  // --- Centre touchpad area ---
  fill(170);
  rect(originX + 95, originY + 65, 110, 70, 8);

  // --- Left thumbstick ---
  // ellipse(x, y, width, height)
  // Unlike rect, x and y are the CENTRE of the ellipse — not the top-left corner
  // Two layered ellipses (a larger outer ring + smaller inner cap) make a thumbstick
  fill(60);
  ellipse(originX + 65, originY + 165, 64, 64); // outer ring
  fill(40);
  ellipse(originX + 65, originY + 165, 36, 36); // inner cap

  // --- Right thumbstick ---
  fill(60);
  ellipse(originX + 235, originY + 165, 64, 64);
  fill(40);
  ellipse(originX + 235, originY + 165, 36, 36);

  // --- D-pad (two rectangles overlapping in a + shape) ---
  // Note: these coordinates are hardcoded rather than using originX/originY
  // because the D-pad needed to be positioned precisely on the controller body.
  fill(50);
  noStroke();
  rect(482, 142.5, 28, 68, 4); // vertical bar
  rect(482 - 18, 142.5 + 18, 64, 28, 4); // horizontal bar — offset to stay centred

  // --- Face buttons ---
  // Four circles arranged in a diamond: top, left, right, bottom
  // Each has a different fill colour set before drawing it

  fill(230, 200, 0); // yellow — top
  ellipse(originX + 248, originY + 68, 24, 24);

  fill(30, 100, 220); // blue — left
  ellipse(originX + 224, originY + 92, 24, 24);

  fill(200, 30, 30); // red — right
  ellipse(originX + 272, originY + 92, 24, 24);

  fill(30, 180, 60); // green — bottom
  ellipse(originX + 248, originY + 116, 24, 24);

  // --- Bumpers (rectangular buttons along the top edge) ---
  stroke(80);
  strokeWeight(2);
  fill(190);
  rect(originX + 18, originY, 110, 26, 10); // left bumper
  rect(originX + 172, originY, 110, 26, 10); // right bumper

  // --- Small menu buttons (centre of controller) ---
  fill(136);
  noStroke();
  rect(originX + 118, originY + 45, 20, 14, 3); // left menu button
  rect(originX + 162, originY + 45, 20, 14, 3); // right menu button

  // --- Labels under each controller ---
  noStroke();
  fill(180);
  textSize(13);
  textAlign(CENTER);
  text("controller.png", originX - 150, originY + 295);
  text("drawn with shapes", originX + 150, originY + 295);

  // --- Dividing line between the two controllers ---
  stroke(80);
  strokeWeight(10);
  line(width / 2, 60, width / 2, 300);
}

// ------------------------------------------------------------
// draw()
// Runs repeatedly in a loop after setup() finishes.
// Anything you want to animate or update goes here.
// This sketch has nothing to animate, so draw() is empty.
// ------------------------------------------------------------
function draw() {
  // Nothing here for now — everything is drawn once in setup()
}

// ------------------------------------------------------------
// mousePressed()
// A built-in p5.js event function.
// Automatically called once every time the mouse is clicked.
// mouseX and mouseY hold the current mouse position.
// ------------------------------------------------------------
function mousePressed() {
  // Draw a random-coloured circle wherever the user clicks
  fill(random(255), random(255), random(255));
  noStroke();
  circle(mouseX, mouseY, 40);
}

// ------------------------------------------------------------
// keyPressed()
// A built-in p5.js event function.
// Automatically called once every time a key is pressed.
// The key variable holds the character that was pressed.
// ------------------------------------------------------------
function keyPressed() {
  // Press "k" to log the current mouse position to the Chrome console.
  // This is a handy debug tool — use it to find coordinates when
  // placing shapes or images on the canvas.
  if (key === "k") {
    console.log("Mouse X:", mouseX, "Mouse Y:", mouseY);
  }
}
