let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#message");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score")
const showY = document.querySelector("#your");
const showC = document.querySelector('#computer')

const showWinner = (userWin, compChoice, userChoice) =>{
    if (userWin){
        userScore++;
        showC.innerText = compChoice;
        showY.innerText = userChoice;
        userScorePara.innerText = userScore;
        msg.innerText = "You Win!!";
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        showC.innerText = compChoice;
        showY.innerText = userChoice;
        compScorePara.innerText = compScore;
        msg.innerText = "You Lose, Try Again!";
        msg.style.backgroundColor = "red";
    }
} 

const drawGame = () =>{
    msg.innerText = "Game Draw, Play Again";
    msg.style.backgroundColor = "#081b31";
}

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissor"];
    const randIndx = Math.floor(Math.random()*3);
    return options[randIndx];
}

const playGame = (userChoice)=>{
    let userWin = true;
    const compChoice = genCompChoice();
    if (userChoice === compChoice){
        drawGame();
    }
    else{
        
        if (userChoice ==="rock"){
            userWin = compChoice==="paper"?false:true; 
        }
        else if (userChoice ==="paper"){
            userWin = compChoice==="scissor" ? false : true; 
        }
        else{
            userWin = compChoice==="rock" ? false : true; 
        }
        showWinner(userWin, compChoice, userChoice);
    }
    


}
choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })

})