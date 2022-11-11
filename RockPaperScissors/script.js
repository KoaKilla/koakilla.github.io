// const computerChoiceDisplay = document.getElementById('computer-choice')
// const userChoiceDisplay = document.getElementById('user-choice')
// const resultDisplay = document.getElementById('result')
// const possibleChoices = document.querySelectorAll('button')
// let userChoice
// let computerChoice
// let result

// possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
//     userChoice = e.target.id
//     userChoiceDisplay.innerHTML = userChoice
//     generateComputerChoice()
//     getResult()
// console.log(userChoice)
// }))

// function generateComputerChoice() {
//     const randomNumber = Math.floor(Math.random() * 3) + 1// or possibleChoices.length
//     if (randomNumber === 1){
//         computerChoice = 'rock'
//     }
//     if (randomNumber === 2){
//         computerChoice = 'paper'
//     }
//     if (randomNumber === 3){
//         computerChoice = 'scissors'
//     }
//     computerChoiceDisplay.innerHTML = computerChoice
// }

// const getResult = () => {
//     switch (userChoice + computerChoice) {
//         case 'scissorsspaper':
//         case 'rockscissors':
//         case 'paperrock':
//             resultDisplay.innerHTML = 'You Win!'
//             break
//         case 'paperscissors':
//         case 'scissorsrock':
//         case 'rockpaper':
//         resultDisplay.innerHTML = 'You Lose :('
//             break
//         case 'paperpaper':
//         case 'scissorsscissors':
//         case 'rockrock':
//          resultDisplay.innerHTML = 'Draw!'
//             break
// }
// }


let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];

}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice + " beats " + computerChoice + ". You Win! ";
    document.getElementById(userChoice).classList.add("cyan-glow");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("cyan-glow")}, 500)
}

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice + " loses to " + computerChoice + ". You lost :( ";
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("red-glow")}, 500)
}

function draw(userChoice, computerChoice){
    result_p.innerHTML = userChoice + " equals " + computerChoice + ". Draw! ";
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            win(userChoice, computerChoice);
            break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            lose(userChoice, computerChoice);
            break
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
            draw(userChoice, computerChoice);
            break;
    }
}

function main(){
rock_div.addEventListener("click", function(){
    game("rock"); //rock
})

paper_div.addEventListener("click", function(){
    game("paper"); //paper
})

scissors_div.addEventListener("click", function(){
    game("scissors"); //scissors
})
}

main();