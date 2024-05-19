import { renderOver } from "./render.js";

class sound {
  constructor (src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
  }
  play = function(){
    this.sound.play();
  }
  stop = function(){
    this.sound.pause();
  }
}

const Level = [
  {
    "--animation-speed": "4s",
    "filter": "invert(1)",
  },
]

export function runGame() {
  
  let lives = 5;
  let points = 0;
  let pointsIncrement = 100;
  let level = 1;

  const clickedSound = new sound("./audio/pop.mp3");
  const missedSound = new sound("./audio/bloop.mp3");
  const levelUpSound = new sound("./audio/level-up.mp3");
  
  const penguinElements = document.querySelectorAll(".penguin");
  
  const healthCounter = document.querySelector(".health div");
  healthCounter.innerText = "x" + lives;

  const pointsCounter = document.querySelector(".points div");
  pointsCounter.innerText = points + "pts";

  const levelCounter = document.querySelector(".level");
  levelCounter.innerText = "LV: " + level;
  
  nextPenguin();

  penguinElements.forEach((penguin) => {
    penguin.addEventListener("click", () => {
      clickedPenguin(penguin);
    });
  
    penguin.addEventListener("animationiteration", () => {
      missedPenguin(penguin);
    });
  });
  
  function clickedPenguin(penguinEle) {
    penguinEle.classList.remove("penguin-move");
    points += pointsIncrement;
    console.log(`Points: ${points}`);
    pointsCounter.innerText = points + "pts";

    clickedSound.play();

    const pointsBox = penguinEle.parentNode.parentNode;
    pointsBox.classList.add("clicked-penguin");

    setTimeout(() => {
      pointsBox.classList.remove("clicked-penguin");
    }, 400);
    
    if (points > 3000)
      levelHell(false);

    nextPenguin();
  }

  function missedPenguin(penguinEle) {
    penguinEle.classList.remove("penguin-move");
    lives--;
    console.log(`lives: ${lives}`);
    healthCounter.innerText = "x" + lives;
    
    if (lives === 0) {
      console.log("Game Over!");
      if (points > 3000)
        levelHell(true);
      renderOver(points);
      return;
    }

    missedSound.play();

    const missedBox = penguinEle.parentNode.parentNode;
    missedBox.classList.add("missed-penguin");
    
    setTimeout(() => {
      missedBox.classList.remove("missed-penguin");
    }, 400);

    nextPenguin();
  }
  
  function nextPenguin() {
    const randomN = Math.floor(Math.random() * 7);
    console.log(randomN);
    penguinElements[randomN].classList.add("penguin-move");
  }
  
  function levelHell(remove) {
    levelUpSound.play();
    pointsIncrement = 500;

    const mainElemnt = document.querySelector("main");
    const areaElement = document.querySelector(".area-js");
    if (remove) {
      mainElemnt.classList.remove("invert");
      mainElemnt.style.setProperty("--animation-speed", "2s");
      mainElemnt.style.setProperty("--points", '"+100pts"');
      
      areaElement.classList.remove("level-hell");
      levelCounter.innerText = "LV: 1";
    }
    else {
      mainElemnt.classList.add("invert");
      mainElemnt.style.setProperty("--animation-speed", "1s");
      mainElemnt.style.setProperty("--points", `"+${pointsIncrement}pts"`);

      areaElement.classList.add("level-hell");
      levelCounter.innerText = "LV: HELL";
    }
  }
}
