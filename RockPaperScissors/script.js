const options = [
  {
    name: "Rock",
    image: "./images/rock.png",
  },
  {
    name: "Scissors",
    image: "./images/scissors.png",
  },
  {
    name: "Paper",
    image: "./images/paper.png",
  },
];

let rockCard = document.getElementById("rockCard");
let paperCard = document.getElementById("paperCard");
let scissorsCard = document.getElementById("scissorsCard");
let computersChoice = document.querySelector("#computersChoice img");
let title = document.querySelector("#computersChoice .card-title");
let winner = document.getElementById("winner");
let restart = document.getElementById("restartBtn");
let score = document.getElementById("score");

function random() {
  let random = Math.floor(Math.random() * 3);
  return random;
}

let rezultat = 0;
let broj;
let izborKorisnika;

function kompjuter() {
  let broj = random();
  let option = options[broj];

  computersChoice.setAttribute("src", option.image);
  title.innerHTML = option.name;

  return broj;
}

rockCard.onclick = function () {
  izborKorisnika = 0;
  kompjuter();
  pobjednik();
  rez();
};

paperCard.onclick = function () {
  izborKorisnika = 1;
  kompjuter();
  pobjednik();
  rez();
};

scissorsCard.onclick = function () {
  izborKorisnika = 2;
  kompjuter();
  pobjednik();
  rez();
};

function pobjednik() {
  odabir = izborKorisnika;
  pc = kompjuter();

  if (odabir == pc) {
    winner.innerText = "No one wins!";
  } else if (odabir == 1 && pc == 0) {
    winner.innerText = "User wins!";
    rezultat++;
  } else if (odabir == 0 && pc == 1) {
    winner.innerText = "User wins!";
    rezultat++;
  } else if (odabir == 2 && pc == 1) {
    winner.innerText = "User wins!";
    rezultat++;
  } else {
    winner.innerText = "Computer wins!";
  }
}

function rez() {
  score.innerText = "Score: " + rezultat;
}

restart.onclick = function () {
  rezultat = 0;
  computersChoice.src = "./images/default.png";
  title.innerHTML = "";
  rez();
};
