const container = document.querySelector(".container");
const game = document.querySelector(".game");
const userImage = document.querySelector(".user-image");
const cpuImage = document.querySelector(".cpu-image");
const state = document.querySelectorAll(".state");
const userSelection = document.querySelector(".user-selection");
const rockSelected = document.querySelector(".rock-selected");
const paperSelected = document.querySelector(".paper-selected");
const scissorsSelected = document.querySelector(".scissors-selected");
const optionImage = document.querySelectorAll(".option-image");
const userScore = document.querySelector(".userScore");
const drawScore = document.querySelector(".drawScore");
const cpuScore = document.querySelector(".cpuScore");

//Sow Score function
let you = 0;
let draw = 0;
let cpu = 0;
function showScore(winner) {
  if (winner === "You") {
    you++;
    userScore.innerHTML = you;
  } else if (winner === "CPU") {
    cpu++;
    cpuScore.innerHTML = cpu;
  } else {
    draw++;
    drawScore.innerHTML = draw;
  }
}

optionImage.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    userImage.querySelector("img").src = "images/rock.png";
    cpuImage.querySelector("img").src = "images/rock.png";
    state[1].innerHTML = "Please Wait...";
    image.classList.add("active");

    optionImage.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove("active");
    });

    game.classList.add("start");

    setTimeout(() => {
      game.classList.remove("start");
      let imageSrc = e.target.src;
      userImage.querySelector("img").src = imageSrc;

      //generate random image

      let randomNumber = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
      let cpuImageArray = [
        "images/rock.png",
        "images/paper.png",
        "images/scissors.png",
      ];
      cpuImage.querySelector("img").src = cpuImageArray[randomNumber];

      let cpuValue = ["R", "P", "S"][randomNumber];
      let userValue = ["R", "P", "S"][index];
      let resultConditions = {
        RR: "Draw",
        PP: "Draw",
        SS: "Draw",
        RP: "CPU",
        RS: "You",
        PR: "You",
        PS: "CPU",
        SR: "CPU",
        SP: "You",
      };
      let resultValue = resultConditions[userValue + cpuValue];
      state[1].innerText =
        userValue === cpuValue ? "Match Draw" : `${resultValue} Won!!`;

      showScore(resultValue);
    }, 2500);
  });
});
