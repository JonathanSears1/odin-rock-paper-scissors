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
        console.error(`computer input ${compterChoice} and player input ${playerSelection} did not create a win condition`)
        return
    }
}    
    return `You played ${playerSelection} and the computer played ${compterChoice}. You ${outcome}!`
}   

function game() {
    for (let i = 1;i<=5;i++) {
        console.log(`round ${i}`)
        console.log(playRound())
    }
    return
}

