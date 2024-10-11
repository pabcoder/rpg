const player = {};
const playerStep = 2;
let playerX = 0;
let playerY = 0;

let fireBall = {
  fired: false,
  x: 0,
  y: 0,
  direction: 1,
  step: 6,
  image: null
}

const width = 800;
const height = 800;
const cubeSize = 40;
let sand;
let grass;
let currentDirection = '3';
let currentPose = 0;
let spriteStep = 0;

const map = [
  ['g', 'g', 's', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
  ['g', 'g', 's', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
  ['g', 'g', 's', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
  ['g', 'g', 's', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
  ['g', 'g', 's', 's', 's', 's', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
  ['g', 'g', 'g', 'g', 'g', 's', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
  ['g', 'g', 'g', 'g', 'g', 's', 's', 's', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
  ['g', 'g', 'g', 'g', 'g', 's', 's', 's', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
  ['g', 'g', 'g', 'g', 'g', 'g', 'g', 's', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
  ['g', 'g', 'g', 'g', 'g', 'g', 'g', 's', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
  ['g', 'g', 'g', 'g', 'g', 'g', 'g', 's', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
  ['g', 'g', 'g', 'g', 'g', 'g', 'g', 's', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
  ['g', 'g', 'g', 'g', 'g', 'g', 'g', 's', 's', 's', 's', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
  ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 's', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
  ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 's', 'g', 'g', 's', 'g', 'g', 'g', 'g', 'g', 'g'],
  ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 's', 'g', 'g', 's', 'g', 'g', 'g', 'g', 'g', 'g'],
  ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 's', 'g', 'g', 's', 'g', 'g', 'g', 'g', 'g', 'g'],
  ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 's', 's', 's', 's', 'g', 'g', 'g', 'g', 'g', 'g'],
  ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
  ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'],
];

function preload() {
  sand = loadImage('/assets/images/sand.png');
  grass = loadImage('/assets/images/grass.png');
  fireBall.image = loadImage('/assets/images/fireball.png');

  player['10'] = loadImage('/assets/images/1-0.png');
  player['11'] = loadImage('/assets/images/1-1.png');
  player['12'] = loadImage('/assets/images/1-2.png');
  
  player['20'] = loadImage('/assets/images/2-0.png');
  player['21'] = loadImage('/assets/images/2-1.png');
  player['22'] = loadImage('/assets/images/2-2.png');
  
  player['30'] = loadImage('/assets/images/3-0.png');
  player['31'] = loadImage('/assets/images/3-1.png');
  player['32'] = loadImage('/assets/images/3-2.png');
  
  player['40'] = loadImage('/assets/images/4-0.png');
  player['41'] = loadImage('/assets/images/4-1.png');
  player['42'] = loadImage('/assets/images/4-2.png');
}

function setup() {
  createCanvas(width, height);
}

function draw() {
  background(color('white'));

  paintMap();

  image(player[`${currentDirection}${currentPose}`], playerX, playerY, 50, 50);

  if (keyIsDown(LEFT_ARROW)) {
    playerX -= playerStep;
    currentDirection = '4';
  }

  if (keyIsDown(RIGHT_ARROW)) {
    playerX += playerStep;
    currentDirection = '2';
  }

  if (keyIsDown(UP_ARROW)) {
    playerY -= playerStep;
    currentDirection = '1';
  }

  if (keyIsDown(DOWN_ARROW)) {
    playerY += playerStep;
    currentDirection = '3';
  }

  if (!keyIsDown(LEFT_ARROW) && !keyIsDown(RIGHT_ARROW) && !keyIsDown(UP_ARROW) && !keyIsDown(DOWN_ARROW)) {
    currentPose = 0;
  } else {
    stepCalculation();
  }

  if (fireBall.fired) {
    handleFireball();
    image(fireBall.image, fireBall.x, fireBall.y, 27, 27);
  }
}

function keyPressed(event) {
  if (event.code === 'Space') {
    fireBall.fired = true;
    fireBall.x = playerX;
    fireBall.y = playerY;
    fireBall.direction = currentDirection;
  }
}

const paintMap = () => {
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === 'g') {
        image(grass, j * cubeSize, i * cubeSize, cubeSize, cubeSize);
      } else {
        image(sand, j * cubeSize, i * cubeSize, cubeSize, cubeSize);
      }
    }
  }
}

const handleFireball = () => {
  if (fireBall.fired) {
    if (fireBall.direction === '1') {
      fireBall.y -= fireBall.step;
    }

    if (fireBall.direction === '2') {
      fireBall.x += fireBall.step;
    }

    if (fireBall.direction === '3') {
      fireBall.y += fireBall.step;
    }

    if (fireBall.direction === '4') {
      fireBall.x -= fireBall.step;
    }
  }
}

const stepCalculation = () => {
  if (currentPose === 0) {
    currentPose = 1;
  }

  spriteStep++;

  if (spriteStep > 10) {
    currentPose++;
    spriteStep = 0;

    if (currentPose > 2) {
      currentPose = 1;
    }
  }
}