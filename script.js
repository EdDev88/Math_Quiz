let but = document.getElementById("st_button");
let start = document.querySelector(".start");
let game = document.querySelector(".game");
let usAnswer = document.getElementById("answer");
let screen = document.querySelector(".screen");
let ansButton = document.getElementById("answer_button");
let plname = document.querySelector(".player")
let operator = ["+","-","*","/"];
let answer;
let name = document.querySelector(".name");
let end = document.querySelector(".finish");

function Start(){
   if(name.value == ""){
      alert('Please enter your Name');
   }
   else{
    game.style.zIndex = "1";
    start.style.zIndex = "-1";
    plname.innerHTML = name.value;
    getAnswer();
   }
}

function getAnswer(){

    let num1 = Math.floor(Math.random() * 100);
    let num2 = Math.floor(Math.random() * 100);
    let oper = operator[Math.floor(Math.random() * 4)];

    if (oper == "/") {
        for (let i = 0; i < 200; i++) {
            if (num1 % num2 == 0 && num1 != 0 && num2 != 0 && num2 != 1 && num1 != num2) {
                break;
            }
            n1 = Math.floor(Math.random() * 100);
            n2 = Math.floor(Math.random() * 100);
        }
    }

    if (oper == "*") {
        for (let i = 0; i < 100; i++) {
            if (num1 * num2 <= 1000) {
                break;
            }
            num1 = Math.floor(Math.random() * 50);
            num2 = Math.floor(Math.random() * 50);
        }
    }
    screen.innerHTML = num1 + oper + num2;
    answer = eval(screen.innerHTML);
    screen.innerHTML = screen.innerHTML + " = ?";
}

let count = 0;
function test(){
    count++;
    let answers = [];
    console.log(count);
    getAnswer();
    if(count == 4){
        checkanswer();
    }
    else{
        getAnswer();
    }
}

function checkanswer(answer,usAnswer) {
    if(usAnswer == answer){
        game.style.zIndex = "-2";
        end.style.zIndex = "1";
        end.innerHTML = "Congratulations !!! " + name.value+ " You Win !!!";
        plname.innerHTML = "";
    }
    else if(usAnswer != answer){
        game.style.zIndex = "-2";
        end.style.zIndex = "1";
        end.innerHTML = "Sorry " + name.value + " But You Lose";
    }
}









