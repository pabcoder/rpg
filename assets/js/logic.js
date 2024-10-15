const playerImgs = {};
let playerX = 0;
let playerY = 0;

let fireBall = {
  fired: false,
  x: 0,
  y: 0,
  direction: 1,
  step: 6,
  image: null,
};

const width = 800;
const height = 800;
const cubeSize = 40;
let sand;
let grass;

let translX = 0;
let translY = 0;

const map = [
  [
    "g",
    "g",
    "s",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
  ],
  [
    "g",
    "g",
    "s",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
  ],
  [
    "g",
    "g",
    "s",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
  ],
  [
    "g",
    "g",
    "s",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
  ],
  [
    "g",
    "g",
    "s",
    "s",
    "s",
    "s",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
  ],
  [
    "g",
    "g",
    "g",
    "g",
    "g",
    "s",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
  ],
  [
    "g",
    "g",
    "g",
    "g",
    "g",
    "s",
    "s",
    "s",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
  ],
  [
    "g",
    "g",
    "g",
    "g",
    "g",
    "s",
    "s",
    "s",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
  ],
  [
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "s",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
  ],
  [
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "s",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
  ],
  [
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "s",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
  ],
  [
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "s",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
  ],
  [
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "s",
    "s",
    "s",
    "s",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
  ],
  [
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "s",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
  ],
  [
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "s",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
  ],
  [
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "s",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
  ],
  [
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "s",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
  ],
  [
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "s",
    "s",
    "s",
    "s",
    "s",
    "s",
    "s",
    "s",
    "g",
    "g",
  ],
  [
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "s",
    "g",
    "g",
  ],
  [
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "g",
    "s",
    "s",
    "s",
  ],
];

function preload() {
  sand = loadImage("/assets/images/sand.png");
  grass = loadImage("/assets/images/grass.png");
  fireBall.image = loadImage("/assets/images/fireball.png");

  playerImgs["10"] = loadImage("/assets/images/1-0.png");
  playerImgs["11"] = loadImage("/assets/images/1-1.png");
  playerImgs["12"] = loadImage("/assets/images/1-2.png");

  playerImgs["20"] = loadImage("/assets/images/2-0.png");
  playerImgs["21"] = loadImage("/assets/images/2-1.png");
  playerImgs["22"] = loadImage("/assets/images/2-2.png");

  playerImgs["30"] = loadImage("/assets/images/3-0.png");
  playerImgs["31"] = loadImage("/assets/images/3-1.png");
  playerImgs["32"] = loadImage("/assets/images/3-2.png");

  playerImgs["40"] = loadImage("/assets/images/4-0.png");
  playerImgs["41"] = loadImage("/assets/images/4-1.png");
  playerImgs["42"] = loadImage("/assets/images/4-2.png");

  player = new Player(width / 2 - 25, width / 2 - 25, playerImgs);
}

function setup() {
  createCanvas(width, height);
}

function draw() {
  background(color("white"));

  push();
  translate(translX, translY);
  paintMap();
  pop();

  player.show();

  if (keyIsDown(LEFT_ARROW)) {
    translX += player.getPlayerStep();
    player.setCurrentDirection("4");
  }

  if (keyIsDown(RIGHT_ARROW)) {
    translX -= player.getPlayerStep();
    player.setCurrentDirection("2");
  }

  if (keyIsDown(UP_ARROW)) {
    translY += player.getPlayerStep();
    player.setCurrentDirection("1");
  }

  if (keyIsDown(DOWN_ARROW)) {
    translY -= player.getPlayerStep();
    player.setCurrentDirection("3");
  }

  if (
    !keyIsDown(LEFT_ARROW) &&
    !keyIsDown(RIGHT_ARROW) &&
    !keyIsDown(UP_ARROW) &&
    !keyIsDown(DOWN_ARROW)
  ) {
    player.setCurrentPose(0);
  } else {
    stepCalculation();
  }

  if (fireBall.fired) {
    handleFireball();
    image(fireBall.image, fireBall.x, fireBall.y, 27, 27);
  }
}

function keyPressed(event) {
  if (event.code === "Space") {
    fireBall.fired = true;
    fireBall.x = playerX;
    fireBall.y = playerY;
    fireBall.direction = player.getCurrentDirection();
  }
}

const paintMap = () => {
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === "g") {
        image(grass, j * cubeSize, i * cubeSize, cubeSize, cubeSize);
      } else {
        image(sand, j * cubeSize, i * cubeSize, cubeSize, cubeSize);
      }
    }
  }
};

const handleFireball = () => {
  if (fireBall.fired) {
    if (fireBall.direction === "1") {
      fireBall.y -= fireBall.step;
    }

    if (fireBall.direction === "2") {
      fireBall.x += fireBall.step;
    }

    if (fireBall.direction === "3") {
      fireBall.y += fireBall.step;
    }

    if (fireBall.direction === "4") {
      fireBall.x -= fireBall.step;
    }
  }
};

const stepCalculation = () => {
  if (player.getCurrentPose() === 0) {
    player.setCurrentPose(1);
  }

  player.setSpriteStep(player.getSpriteStep() + 1);

  if (player.getSpriteStep() > 10) {
    player.setCurrentPose(player.getCurrentPose() + 1);
    player.setSpriteStep(0);

    if (player.getCurrentPose() > 2) {
      player.setCurrentPose(1);
    }
  }
};
