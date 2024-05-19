import { renderOver } from "./render.js";

export function runGame() {
  
  let lives = 5;
  let points = 0;
  let level = 1;
  
  const penguinElements = document.querySelectorAll(".penguin")
  
  const healthCounter = document.querySelector(".health div");
  healthCounter.innerText = "x" + lives;

  const pointsCounter = document.querySelector(".points div");
  pointsCounter.innerText = points + "pts";

  const levelCounter = document.querySelector(".level");
  levelCounter.innerText = "LV: " + level;
  
  nextPenguin();

  penguinElements.forEach((penguin) => {
    penguin.addEventListener("click", () => {
      penguin.classList.remove("penguin-move");
      clickedPenguin();
      nextPenguin();
    });
  
    penguin.addEventListener("animationiteration", () => {
      penguin.classList.remove("penguin-move");
      missedPenguin();
      nextPenguin();
    });
  });
  
  function clickedPenguin() {
    points += 100;
    console.log(`Points: ${points}`);
    pointsCounter.innerText = points + "pts";
  }

  function missedPenguin() {
    lives--;
    console.log(`lives: ${lives}`);
    healthCounter.innerText = "x" + lives;
  }
  
  function nextPenguin() {
    if (lives === 0) {
      console.log("Game Over!");
      renderOver(points);
      return;
    }
    const randomN = Math.floor(Math.random() * 7);
    console.log(`Number: ${randomN + 1}`);
    penguinElements[randomN].classList.add("penguin-move");
  }
}