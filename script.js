const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const shoot = document.querySelector("#shoot")
const result = document.querySelector("#result")
const userWinCount = document.querySelector("#user_wins")
const cpuWinCount = document.querySelector("#cpu_wins")
const container = document.querySelector(".container")
let choiceImg = document.querySelector("#user_img_choice")
let cpuImg = document.querySelector("#CPU_img_choice")
let cpuText = document.querySelector("#CPU_text_choice")
let playerChoice = ""

let gamesPlayed = 0
let userWins = 0
let cpuWins = 0

rock.addEventListener("click", () => {
    playerChoice = "rock"
    console.log(playerChoice)
    choiceImg.src = "images/pngimg.com - stone_PNG13545.png"
})

paper.addEventListener("click", () => {
    playerChoice = "paper"
    console.log(playerChoice)
    choiceImg.src = "images/White-Paper-No-Background.png"
})

scissors.addEventListener("click", () => {
    playerChoice = "scissors"
    console.log(playerChoice)
    choiceImg.src = "images/scissors.png"
})

function getComputerChoice() {
    choice = Math.floor(Math.random() * 3)
    if (choice == 0) {
        return "rock"
    }
    else if (choice == 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function playRound(playerSelection, compterChoice = getComputerChoice()) {
    let lowerPlayerSelection = playerSelection.toLowerCase()
    let outcome
    if (lowerPlayerSelection == compterChoice) {
        outcome = "tie"
    }
    else {
    if (lowerPlayerSelection == "scissors") {
        if (compterChoice == "rock") {
                cpuWins += 1
                outcome = "lose"
            }
            else {
                userWins += 1
                outcome = "win"
            }
        }
    else if (lowerPlayerSelection == "rock") {
        if (compterChoice == "paper") {
            cpuWins += 1
            outcome = "lose"
        }
        else {
            userWins += 1
            outcome = "win"
        }
    }
    else if (lowerPlayerSelection == "paper") {
        if (compterChoice == "scissors") {
            cpuWins += 1
            outcome = "lose"
        }
        else {
            userWins += 1
            outcome = "win"
        }
    }
    else {
        return "Please select rock, paper, or scissors before clicking shoot"
    }
}
    gamesPlayed += 1    
    return outcome
}

shoot.addEventListener("click", () => {
    if (userWins < 5 && cpuWins < 5) {
        shoot.textContent = "SHOOT!"
    let computerChoice = getComputerChoice()
    if (computerChoice == "rock") {
        cpuImg.src = "images/pngimg.com - stone_PNG13545.png"
    }
    if (computerChoice == "scissors") {
        cpuImg.src = "images/scissors.png"
    }
    if (computerChoice == "paper") {
        cpuImg.src = "images/White-Paper-No-Background.png"
    }
    cpuText.textContent = computerChoice
    playRound(playerChoice,computerChoice)
    if (userWins == 5) {
        result.textContent = "CONGRATULATIONS! YOU WIN!!!!"
        shoot.textContent = "Play Again?"
    }
    if (cpuWins == 5) {
        result.textContent = "Sorry, you lose :("
        shoot.textContent = "Play Again?"
    }
    }
    else {
        userWins = 0
        cpuWins = 0
        cpuImg.src = "images/Question_mark_(black).svg.png"
        choiceImg.src = "images/Question_mark_(black).svg.png"
        result.textContent = ""
    }
    userWinCount.textContent = `User Wins: ${userWins}`
    cpuWinCount.textContent = `CPU Wins: ${cpuWins}`
})