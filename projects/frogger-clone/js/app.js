// App.js
// Creates objects (Player, Enemy) and handles game logic

// Player models array and global variables

var playerModels = ['images/char-boy.png',
                    'images/char-cat-girl.png',
                    'images/char-horn-girl.png',
                    'images/char-pink-girl.png',
                    'images/char-princess-girl.png'
                  ];

var highestLevel = 1;
var allEnemies = [];

// HTML elements

var hitPointBlocks = document.querySelectorAll('.hit-point-block');
var playerLevelIndicator = document.querySelector('#level');
var highestLevelIndicator = document.querySelector('#highest-level');
var helpMessage = document.querySelector('#help-message');

// Enemy class

var Enemy = function(yPos) {
  this.sprite = 'images/enemy-bug.png';
  this.x = -150;
  this.y = yPos;
  this.generateSpeed();
};

// Enemy update method (called by engine's updateEntities function) calls enemy movement and collision methods
// Movement speed is multiplied by dt (delta) parameter (comes from egine's main function) to ensure game runs at the same speed for all computers

Enemy.prototype.update = function(dt) {
  this.manageEnemy(dt);
  this.handleEnemyCollision(70, 70);
};

// Enemy render method (gets called by engine's renderEntities function)

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Enemy speed method (calculates movement speed for each enemy within min-max range and increments it based on player's level)

Enemy.prototype.generateSpeed = function() {
  var accelerationRate;
  var max;

  switch(this.y) {
    case 59:
      max = 140;
      accelerationRate = 60;
      break;
    case 142:
      max = 110;
      accelerationRate = 40;
      break;
    case 225:
      max = 80;
      accelerationRate = 20;
      break;
  }

  var minSpeed = 0 + (accelerationRate * player.level);
  var maxSpeed = max + (accelerationRate * player.level);

  this.speed = Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed;
};

// Enemy movement method (resets position when enemy reaches end of screen and sets new speed, otherwise sets new x coordinate to simulate movement)

Enemy.prototype.manageEnemy = function(dt) {
  if(this.x > 500) {
    this.x = -150;
    this.generateSpeed();
  } else {
    this.x = this.x + this.speed * dt;
  }
};

// Enemy collision method (checks if player has touched bug, reset's his/her position and calls for method to decreases hit points)

Enemy.prototype.handleEnemyCollision = function(hitBoxWidth, hitBoxHeight) {
  if(this.x < player.x + hitBoxWidth &&
     this.x + hitBoxWidth > player.x &&
     this.y < player.y + hitBoxHeight &&
     this.y + hitBoxHeight > player.y) {
       player.x = 202;
       player.y = 391;
       player.manageHitPoints(1);
     }
};

// Player class

var Player = function() {
  this.sprite = 'images/selector.png';
  this.x = 202;
  this.y = 391;
  this.isAlive = true;
  this.hitPoints = 3;
  this.level = 1;
  this.highestLevel = highestLevel;
};

// Player update method (called by engine's updateEntities function) checks if player has reached goal (water) and calls manageLevel method

Player.prototype.update = function() {
  if(this.y === -24) {
    this.x = 202;
    this.y = 391;
    this.manageLevel();
  }
};

// Player render method (gets called by engine's renderEntities function)
// Calls for method to either draw only player or all available champions if none has been selected yet

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    if(this.sprite === 'images/selector.png') {
      var xPos = 0;
      playerModels.forEach(function(model) {
        ctx.drawImage(Resources.get(model), xPos, 391);
        xPos += 101;
      });
    }
};

// Player manageLevel method increments player's level and calls for generateSpeed method on each enemy to increment their movement speed

Player.prototype.manageLevel = function() {
  player.level++;
  playerLevelIndicator.innerHTML = player.level;

  allEnemies.forEach(function(enemy) {
    enemy.generateSpeed();
  });
};

// Player select champion method sets champion's image, resets starting position and displays appropriate help message

Player.prototype.selectChampion = function() {
  this.sprite = playerModels[this.x / 101];
  this.x = 202;
  this.y = 391;
  helpMessage.innerHTML = 'Use arrow keys (left, up, right and down) to move your champion. Avoid bugs to stay alive and reach water to level up';
};

// Player manage hit points method decreases player's hit points, loops trough hit points' indicator and calls for method to check if champion is alive

Player.prototype.manageHitPoints = function(num) {
  this.hitPoints -= num;

  for(var i = hitPointBlocks.length - 1; i >= 0; i--) {
    if(hitPointBlocks[i].classList.contains('fa-heart')) {
      hitPointBlocks[i].classList.remove('fa-heart');
      hitPointBlocks[i].classList.add('fa-heart-o');
      break;
    }
  }
  this.manageLives();
};

// Player manageLives method checks if player is alive (hit points are larger than zero), draws help message and updates highest level variable

Player.prototype.manageLives = function() {
  if(this.hitPoints <= 0) {
    helpMessage.innerHTML = 'You died, bugs ate you! Click on "Reset Game" button to play again';
    this.x = -200;
    this.y = -200;
    this.isAlive = false;

    if (this.level > player.highestLevel) highestLevel = this.level;
  }
};

// Player handleInput methods updates player's coordinates based on pressed keys and calls for selectChampion method when enter is pressed

Player.prototype.handleInput = function(pressedKey) {
  if(this.isAlive) {
    switch (pressedKey) {
      case 'left':
        if (this.x >= 101) this.x -= 101;
        break;
      case 'up':
        if (this.sprite !== 'images/selector.png' && this.y >= 59) this.y -= 83;
        break;
      case 'right':
        if (this.x <= 303) player.x += 101;
        break;
      case 'down':
        if (this.sprite !== 'images/selector.png' && this.y <= 308) this.y += 83;
        break;
      case 'select':
        if (this.sprite === 'images/selector.png') this.selectChampion();
        break;
    }
  }
};

// Event listener for key press

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        13: 'select',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});

// Event listener for reset game button (creates new player object, stores it in the same player variable and resets information on screen)

document.querySelector('#reset-button').addEventListener('click', function() {
  helpMessage.innerHTML = 'Choose your champion using left and right arrow keys, press enter to select';
  player = new Player();

  playerLevelIndicator.innerHTML = player.level;
  highestLevelIndicator.innerHTML = player.highestLevel;

 for(var i = 0; i < hitPointBlocks.length; i++) {
     hitPointBlocks[i].classList.remove('fa-heart-o');
     hitPointBlocks[i].classList.add('fa-heart');
   }
});

// New player object

var player = new Player();

// Creates three enemy objects and stores them in array

for (var i = 225; i > 58; i -= 83) {
  allEnemies.push(new Enemy(i));
}
