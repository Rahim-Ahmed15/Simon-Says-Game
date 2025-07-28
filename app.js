let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let highestScore=0;
let btnColor=["red","yellow","green","blue"];
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
if(started==false){
    console.log(`game is started The Highest Score by auser`);
    let hs=document.querySelector(".hs");
    hs.innerText=`The Highest Score is ${highestScore}`;
    started=true;
    levelUp();
}
})
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },100);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },100);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*4);
    let randColor=btnColor[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}
function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        if(level>highestScore){
            highestScore=level;
        } 
        h2.innerHTML=`Game is Over!! You Score:<b>${level}</b><br>Press any Key to Restart`;
       document.querySelector("body").style.backgroundColor="red";
       setTimeout(function(){
         document.querySelector("body").style.backgroundColor="white";
       },150);
        reset();
    }
}
function btnPress(){
    let btn=this;
    userFlash(btn); 
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}