let humanYearsInput=document.getElementById("humanYears");
let calculateBtn=document.getElementById("calculateBtn");
let dogImage=document.getElementById("dogImg");
let dogYears=document.getElementById("dogYears");
let catImage=document.getElementById("catImg");
let catYears=document.getElementById("catYears");
let error=document.getElementById(`humanYearsError`);



function calculateDogYears(){
    let answer=parseInt(humanYearsInput.value);
    let godineKera;
    if(answer==1){
        godineKera=15;
    }else if(answer>1){
        godineKera=15 + 9 + (answer - 2)* 5;
    }else{
        godineKera=0; 
    }
    dogYears.innerText=godineKera;
}

function calculateCatYears(){
    let answer=parseInt(humanYearsInput.value);
    let godineMace;
    if(answer==1){
        godineMace=15;
    }else if(answer>1){
        godineMace=15 + 9 + (answer - 2)* 4;
        
    }else{
        godineMace=0; 
    }
    catYears.innerText=godineMace;
}

function catImg(){
    let godineMace=parseInt(humanYearsInput.value)

    if(godineMace<=24){
        catImage.src='./images/babyCat.png';
    }else if(godineMace>24 && godineMace<=44){
        catImage.src='images/adultCat.gif';
    }else{
        catImage.src='/images/oldCat.jpeg';
    }
}

function dogImg(){
    let godineKera=parseInt(humanYearsInput.value)

    if(godineKera<=24){
        dogImage.src='./images/babyDog.webp';
    }else if(godineKera>24 && godineKera<=44){
        dogImage.src='images/adultDog.png';
    }else{
        dogImage.src='/images/oldDog.png';
    }
}

calculateBtn.onclick=function(){

    if(isNaN(humanYearsInput.value)){
        error.classList.remove('hide');
    }else{
    error.classList.add('hide');
    calculateDogYears();
    calculateCatYears();
    catImg();
    dogImg();

    }

}


