////////////////////////////////////////////////////////////
var attack = () =>{  
    
    let A = document.getElementById("monsterBar");
    let boxA = document.querySelector('.monsterHealth');

    let B = document.getElementById("myBar");
    let boxB = document.querySelector('.myHealth');

    A.style.width= boxA.offsetWidth - randomNmuber()+"px";
    B.style.width= boxB.offsetWidth - randomNmuber()+"px";

    if((parseInt(A.style.width) > (parseInt(B.style.width)))){
        document.getElementById("btnSpecialAttack").style.backgroundColor = "#6e2443";  
    }
    else{
        document.getElementById("btnSpecialAttack").style.backgroundColor = "rgb(207, 207, 207)";
    }

if(parseInt(A.style.width) < 5){
    document.getElementById("startId").style.display="flex";
    document.getElementById("btnId").style.display="none";
    let score=document.getElementById("winner");
    score.innerHTML="winner";
    alert("you Won");
    }

else if(parseInt(B.style.width) < 5){
    document.getElementById("startId").style.display="flex";
    document.getElementById("btnId").style.display="none";
    let score = document.getElementById("winner");
    score.innerHTML="loser";
    alert("you Lose");
    }
// console.log(boxA.style.width , boxB.style.width);
addScore();
}   
///////////////////////////////////////////////////

let specialAttack = () =>{

    let C = document.getElementById("monsterBar");
    let boxC = document.querySelector('.monsterHealth');

    let D = document.getElementById("myBar");
    let boxD = document.querySelector('.myHealth');


if(parseInt(C.style.width) > (parseInt(D.style.width))){
    C.style.width= boxC.offsetWidth - randomNmuber()+"px";
    addScore();
    }
}
////////////////////////////////////////////////////////

var addScore = () =>{
    var monsterElement=document.createElement("p");
    monsterElement.append(randomNmuber());
    document.getElementById("score").append("Monster Attack Power:",monsterElement) ;

    var myElement=document.createElement("p");
    myElement.append(randomNmuber());
    document.getElementById("score").append("Your Attack Power:",myElement);
}
//////////////////////////////////////////////////

let healed=0;
let heal = () =>{
    let B = document.getElementById("myBar");
    let boxB = document.querySelector('.myHealth');
    
    if (healed>=3) {
        alert("cannot heal more than 3 times");
        document.getElementById("btn").disabled = true;
    }
    else{
        healed += 1;
        B.style.width= boxB.offsetWidth + randomNmuber()+"px";
    }
    console.log(healed);
}
//////////////////////////////////////////////////////

function randomNmuber(){
    num= Math.floor(Math.random()*50);
    return(num)
}
//////////////////////////////////////////////////////// 

let giveUp = () => {
    let score = document.getElementById("winner");
    score.innerHTML="You Lost";
    alert("You Lost");
    document.getElementById("startId").style.display="flex";
    document.getElementById("btnId").style.display="none";
}
////////////////////////////////////////////////////////

function startGame(){
    location.reload();
}
/////////////////////////////////////////////////////////