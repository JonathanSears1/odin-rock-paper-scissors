const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const shoot = document.querySelector("#shoot")
const result = document.querySelector("#result")
let choiceImg = document.querySelector("#user_img_choice")
let cpuImg = document.querySelector("#CPU_img_choice")
let cpuText = document.querySelector("#CPU_text_choice")
let playerChoice = ""


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
                outcome = "lose"
            }
            else {
                outcome = "win"
            }
        }
    else if (lowerPlayerSelection == "rock") {
        if (compterChoice == "paper") {
            outcome = "lose"
        }
        else {
            outcome = "win"
        }
    }
    else if (lowerPlayerSelection == "paper") {
        if (compterChoice == "scissors") {
            outcome = "lose"
        }
        else {
            outcome = "win"
        }
    }
    else {
        return "Please select rock, paper, or scissors before clicking shoot"
    }
}    
    return outcome
}

function game() {
    let playerScore = 0
    let computerScore = 0
    let outcome
    let message
    for (let i = 1;i<=5;i++) {
        console.log(`round ${i}`)
        message  = playRound()
        messageArr = message.split(' ')
        if (messageArr[messageArr.length -1] == "win!") {
            playerScore++
        }
        else if (messageArr[messageArr.length -1] == "lose!") {
            computerScore++
        }
        console.log(message)
        console.log(`Player score: ${playerScore}`)
        console.log(`Computer score: ${computerScore}`)
    }
    if (playerScore > computerScore) {
        outcome = "win"
    } 
    else if (playerScore < computerScore) {
        outcome = "lose"
    }
    else {
        outcome = "tie"
    }
    return `you scored ${playerScore} and the computer scored ${computerScore}, you ${outcome}`
}

shoot.addEventListener("click", () => {
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
    result.textContent = playRound(playerChoice,computerChoice)
})