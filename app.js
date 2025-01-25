let userWin = 0;
let compWin = 0;
let playerScore = document.querySelector("#player-score");
let compScore = document.querySelector("#comp-score");
let msgBox = document.querySelector(".game-msg")
let choices = document.querySelectorAll(".box");

let getCompChoice = () => {
    possibleChoices = ["rock", "paper", "scissor"];
    let getIndex = Math.floor(Math.random() * 3);
    return possibleChoices[getIndex];
}
let winMsg = (userWin) => {

}
let drawGame = (userChoice, compChoice) => {
    msgBox.style.width = "40vw";
    msgBox.innerText = `Draw! Player(${userChoice}) same as Comp(${compChoice})`;
    msgBox.style.backgroundColor = "grey";
}
let userWinMsg = (userChoice, compChoice) => {
    userWin++;
    playerScore.innerText = userWin;
    msgBox.style.width = "40vw";
    msgBox.innerText = `You Won! Player(${userChoice}) beats Comp(${compChoice})`;
    msgBox.style.backgroundColor = "green";
}
let compWinMsg = (userChoice, compChoice) => {
    compWin++;
    compScore.innerText = compWin;
    msgBox.style.width = "40vw";
    msgBox.innerText = `You Lost! Comp(${compChoice}) beats Player(${userChoice})`;
    msgBox.style.backgroundColor = "red";
}
let showWin = (isWin, userChoice, compChoice) => {
    if(isWin){
        userWinMsg(userChoice, compChoice);
    }
    else {
        compWinMsg(userChoice, compChoice);
    }
}
let checkWin = (userChoice, compChoice) => {
    if(userChoice === compChoice)
        drawGame(userChoice, compChoice);
    else {
        let isWin = true;
        if(userChoice === "rock"){
            isWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            isWin = compChoice === "scissor" ? false : true;
        }
        else {
            isWin = compChoice === "rock" ? false : true;
        }
        showWin(isWin, userChoice, compChoice);
    }
} 

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id")
        console.log(userChoice);
        let compChoice = getCompChoice();
        console.log(compChoice)
        checkWin(userChoice, compChoice);
    });
});
