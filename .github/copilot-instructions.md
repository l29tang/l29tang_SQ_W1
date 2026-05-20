# Copilot Instructions for l29tang_SQ_W1

## Project Overview
This is a **p5.js creative coding project** for a course assignment (Week 1). It displays graphics on an HTML5 canvas using p5.js, combining pre-loaded images and programmatically-drawn shapes to create an interactive visual demonstration.

## Architecture

### Core Structure
- **index.html**: Entry point that loads p5.js library (v1.9.4 from CDN) and the sketch
- **sketch.js**: Main p5.js application (197 lines) with global state, three lifecycle functions, and two event handlers
- **style.css**: Minimal styling—centers the canvas on a dark background
- **assets/**: Images (background.jpeg, controller.png) loaded by preload()

### Data Flow
1. **preload()** → Loads `assets/images/background.jpeg` into `controllerImg` global variable
2. **setup()** → Executed once; draws static content (text, image, shapes) onto canvas
3. **draw()** → Empty loop (no animation)
4. **mousePressed()** and **keyPressed()** → Event handlers for interactivity

## Key p5.js Conventions in This Codebase

### Coordinate System
- **Origin point pattern**: Use `originX` and `originY` variables to anchor complex drawings, enabling reusable, repositionable shape groups (see controller drawing at line ~90)
- **Shape coordinate differences**:
  - `rect(x, y, width, height, cornerRadius)` → x,y = TOP-LEFT corner
  - `ellipse(x, y, width, height)` → x,y = CENTER of shape
  - `line(x1, y1, x2, y2)` → both endpoints
  - `text(string, x, y)` → anchor depends on `textAlign()`

### Drawing State Persistence
- `fill()`, `stroke()`, `strokeWeight()`, `textSize()`, `textAlign()` persist until changed
- Always set state immediately before drawing (see shape colors at lines 125–135)
- `noStroke()` disables outlines; call before shapes that shouldn't have borders

### Asset Loading
- **All image/sound loading must happen in preload()** — not setup() or draw() — to ensure assets are ready before use
- Use relative paths from index.html: `loadImage("assets/images/background.jpeg")`

## Developer Interactions & Debugging

### User Interactions (Built-in)
- **Click**: Triggers `mousePressed()` → draws random-colored circle at cursor
- **Press 'k'**: Logs current mouse coordinates to Chrome console via `console.log(mouseX, mouseY)`

### Debugging Pattern
The 'k' key logging pattern is intentional for positioning shapes and images. If adding new elements, use this to find precise coordinates.

## Project Conventions

### Code Organization
- Comment blocks separate major sections (SECTION 1, 2, 3)
- Function signatures include one-line descriptions before implementation
- Global variables at top; functions organized: preload → setup → draw → events

### Naming & Documentation
- Variable names are descriptive: `originX`, `controllerImg`, not abbreviated
- Heavy inline comments explain non-obvious p5.js behavior (e.g., why D-pad coordinates are hardcoded rather than relative)

### Styling
- **Dark background**: `#1a1a1a` body with canvas centered (style.css, lines 8–13)
- **p5.js defaults**: No explicit color profiles; RGB 0–255 throughout

## Common Tasks

### To Add a New Shape
1. Set `fill()`, `stroke()`, `strokeWeight()` before drawing
2. Use appropriate function (rect/ellipse/line)
3. If repositionable, nest coordinates relative to an anchor point

### To Add Images
1. Declare a global variable: `let newImg;`
2. Load in preload(): `newImg = loadImage("path/from/index.html");`
3. Draw in setup() or draw(): `image(newImg, x, y, width, height);`

### To Add Interactivity
- Extend or create event handlers: `mousePressed()`, `keyPressed()`, `mouseMoved()`, etc.
- Access built-in variables: `mouseX`, `mouseY`, `key`, `width`, `height`

## External Dependencies
- **p5.js 1.9.4**: Loaded via CDN (https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.4/p5.min.js)
- No npm packages or build step required; open index.html in a browser to run

## Deployment
- **Local**: Open index.html in Chrome
- **GitHub Pages**: Project is configured for GitHub Pages hosting (verify repo settings)
