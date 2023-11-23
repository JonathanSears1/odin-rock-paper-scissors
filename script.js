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
function playRound(playerSelection = prompt("choose your move"), compterChoice = getComputerChoice()) {
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
        console.error(`Invalid input. You entered ${playerSelection}, please enter rock, paper, or scissors`)
        return
    }
}    
    return `You played ${playerSelection} and the computer played ${compterChoice}. You ${outcome}!`
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

