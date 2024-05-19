import { runGame } from "./game.js";

const areaElement = document.querySelector(".area");

renderHome();

function renderHome() {
  areaElement.innerHTML = "";
  const homeElement = document.createElement("div");
  homeElement.classList.add("container", "home");

  const homeHTML = `
    <h1 class="title">Whack a Penguin <img src="img/hammer.svg" alt=""></h1>

    <div class="discription">
      <div>
        <h2>penguins are stupid!</h2>
        <p>
          It will be your job to knock some sense into them.
          everytime you catch a penguin you get points, if you miss 5 times its game over!
        </p>
      </div>
      <img src="img/penguin.svg" alt="">
    </div>
    <button class="start-btn btn">Start</button>
  `;
    
  homeElement.innerHTML = homeHTML;
  areaElement.prepend(homeElement);

  document.querySelector(".start-btn").addEventListener("click", () => renderGame());
}

export function renderGame() {
  const areaHTML = `
    <div class="container status-bar">
      <div>
        <div class="health">
          <img src="./img/full-heart.svg" alt="">
          <div></div>
        </div>
        <div class="points">
          <img src="./img/points.svg" alt="">
          <div></div>
        </div>
      </div>
      <div class="level"></div>
    </div>
    <div class="container game">
      <div class="one">
        <img class="hole" src="img/snow.webp" alt="">
        <div class="penguin-box">
          <img draggable="false" class="penguin" src="img/penguin.svg" alt="">
        </div>
      </div>
      <div class="two">
        <img class="hole" src="img/snow.webp" alt="">
        <div class="penguin-box">
          <img draggable="false" class="penguin" src="img/penguin.svg" alt="">
        </div>
      </div>
      <div class="three">
        <img class="hole" src="img/snow.webp" alt="">
        <div class="penguin-box">
          <img draggable="false" class="penguin" src="img/penguin.svg" alt="">
        </div>
      </div>
      <div class="four">
        <img class="hole" src="img/snow.webp" alt="">
        <div class="penguin-box">
          <img draggable="false" class="penguin" src="img/penguin.svg" alt="">
        </div>
      </div>
      <div class="five">
        <img class="hole" src="img/snow.webp" alt="">
        <div class="penguin-box">
          <img draggable="false" class="penguin" src="img/penguin.svg" alt="">
        </div>
      </div>
      <div class="six">
        <img class="hole" src="img/snow.webp" alt="">
        <div class="penguin-box">
          <img draggable="false" class="penguin" src="img/penguin.svg" alt="">
        </div>
      </div>
      <div class="seven">
        <img class="hole" src="img/snow.webp" alt="">
        <div class="penguin-box">
          <img draggable="false" class="penguin" src="img/penguin.svg" alt="">
        </div>
      </div>
    </div>
  `;
  areaElement.innerHTML = areaHTML;
  
  runGame();
}

export function renderOver(points) {
  areaElement.innerHTML = "";
  const overElement = document.createElement("div");
  overElement.classList.add("container", "over");
  const overHTML = `
    <h2 class="sub-title">Game Over</h2>
    <div>
      <img src="img/points.svg" alt="">
      <h3>${points}PTS</h3>
    </div>
    <div class="over-btns">
      <button class="home-btn btn">Home</button>
      <button class="try-again-btn btn">Try Again</button>
    </div>
  `;
  overElement.innerHTML = overHTML;
  areaElement.prepend(overElement);

  document.querySelector(".home-btn").addEventListener("click", () => renderHome());
  document.querySelector(".try-again-btn").addEventListener("click", () => renderGame());
}