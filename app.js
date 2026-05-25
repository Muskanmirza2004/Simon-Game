let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let highScore = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function () {
    if(started == false){
    console.log("Game is Started");
    started = true;

    levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);

}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = "Level "+ level;

    //random btn choose
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);

}
function checkAns(idx){
    // console.log("curr level : ", level);

    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
        
    }else{
        // highscore added
        h2.innerHTML = `Game Over! Your score was <b> ${level}</b> <br> <br> Highest Score  : ${highScore} <br> Press any key to start `;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";


        },250);
        reset();
    }



}

function btnPress(){
    let btn = this;
    // console.log(this);
    userflash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);

}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click" , btnPress);
}


function reset() {
    if(level > highScore){
        highScore = level;
    }
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}



























