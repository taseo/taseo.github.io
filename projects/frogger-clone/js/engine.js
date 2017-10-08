// Engine.js
// Game loop (updates entities and render) and calls update and render method on player and enemy objects (defined in app.js)

var Engine = (function(global) {

  // Variable definitions and getting 2D context for canvas

  var doc = global.document,
      win = global.window,
      canvas = doc.createElement('canvas'),
      ctx = canvas.getContext('2d'),
      lastTime;

  // Defining canvas size and adding it to page

  canvas.width = 505;
  canvas.height = 606;
  doc.querySelector('#canvas').appendChild(canvas);

  // Main function (called recursively to provide continues loop)

  function main() {

    // Time delta (dt) information
    // As everyone’s computer processes instructions at different speeds, dt is used as constant value that is applied to enemy movement
    // It ensures smooth animation regardless of how fast their computer is

    var now = Date.now(),
        dt = (now - lastTime) / 1000.0;

    // Update (requires time delta parameter) and render function calls
    updateEntities(dt);
    render();

    lastTime = now;

    // requestAnimationFrame function call (to draw another frame as soon as browser is available) passing main function as parameter

    win.requestAnimationFrame(main);
  }

  // Initialization function (gets called only once)

  function init() {
      lastTime = Date.now();
      main();
  }

  // updateEntities function calls update method on player and enemies objects (handles updating data/properties related to those objects)

  function updateEntities(dt) {
    allEnemies.forEach(function(enemy) {
      enemy.update(dt);
    });
    player.update();
  }

  // Game render function (redraws all game elements on each loop of the game engine)

  function render() {

  // Array that holds relative URLs (only for reference) to the images used for the game level and local variable declarations for render function

  var rowImages = ['images/water-block.png',   // Top row is water
                   'images/stone-block.png',   // Row 1 of 3 of stone
                   'images/stone-block.png',   // Row 2 of 3 of stone
                   'images/stone-block.png',   // Row 3 of 3 of stone
                   'images/grass-block.png',   // Row 1 of 2 of grass
                   'images/grass-block.png'    // Row 2 of 2 of grass
                  ],
      numRows = 6,
      numCols = 5,
      row, col;

      // Loop that draws game level ("grid")

      for (row = 0; row < numRows; row++) {
          for (col = 0; col < numCols; col++) {

          // The drawImage function of the canvas' context element requires 3 parameters: the image to draw, the x coordinate to start drawing and the y coordinate to start drawing
          // Resources object is used to refer to images and serves as cache as they are constantly redrawn

          ctx.drawImage(Resources.get(rowImages[row]), col * 101, row * 83);
          }
      }
      renderEntities();
    }

    // renderEntities function calls render methods defined for objects in app.js file

    function renderEntities() {
      allEnemies.forEach(function(enemy) {
        enemy.render();
      });
      player.render();
    }

    // Needed images are loaded to Resources object, when ready init function (starts game) is called

    Resources.load([
        'images/stone-block.png',
        'images/water-block.png',
        'images/grass-block.png',
        'images/enemy-bug.png',
        'images/char-boy.png',
        'images/char-cat-girl.png',
        'images/char-horn-girl.png',
        'images/char-pink-girl.png',
        'images/char-princess-girl.png',
        'images/selector.png'
    ]);
    Resources.onReady(init);

    // ctx variable assigned to the global variable (the window object when run in a browser) so that it can be accessed from app.js file

    global.ctx = ctx;
})(this);
