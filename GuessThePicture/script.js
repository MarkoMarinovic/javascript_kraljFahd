const items = [
  {
    image: "./images/cat.png",
    answers: ["cat", "kitty"],
  },
  {
    image: "./images/dog.jpeg",
    answers: ["dog"],
  },
  {
    image: "./images/tree.png",
    answers: ["tree", "scape"],
  },
  {
    image: "./images/laptop.webp",
    answers: ["laptop", "computer"],
  },
  {
    image: "./images/bird.png",
    answers: ["bird", "birds"],
  },
];

let answerInput = document.getElementById("answerInput");
let image = document.getElementById("image");
let nextBtn = document.getElementById("nextBtn");
let result = document.getElementById("result");
let restartBtn = document.getElementById("restartBtn");
let previous=document.getElementById('previousBtn');

let brojac;
let rezultat;
let odgovoreno=false;

function start() {
  brojac = 0;
  rezultat = 0;
  image.src = items[brojac].image;
}
start();

nextBtn.onclick = function () {
  izracunajRezultat();
  prikaziRezultat();
  brojac++;
  ucitajSliku();
  provjeriRezultat();
  
  answerInput.value = "";
};

function ucitajSliku(){
    let item = items[brojac];
  image.setAttribute("src", item.image);
}

function izracunajRezultat() {
  let answer = answerInput.value;
  let item = items[brojac];

  if (item.answers.includes(answer.toLowerCase())) {
    rezultat++;
    odgovoreno==true;
    
  }else odgovoreno==false;
}

function prikaziRezultat() {
  result.innerText = rezultat;
  result.classList.remove("hide");
}

restartBtn.onclick = function () {
  start();
  result.classList.add("hide");
};


let buttonDiv = document.getElementById('buttonDiv');



previous.onclick=function(){
    brojac--;
    ucitajSliku();

    if(odgovoreno===true){
        
        rezultat=rezultat;
    }
}

function provjeriRezultat(){
    if(odgovoreno==true){
        rezultat--;
    }else{
        izracunajRezultat();
    }
}