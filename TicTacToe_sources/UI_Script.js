let cellElements
let restartButton
let statusMessageText
let scorePlayer1Text
let scorePlayer2Text
let winnerPosGraphic
let winnerPos = 0

let circleTurn = false
let player1_wins = 0
let player2_wins = 0

window.addEventListener("load", function(event) {
    __init()
});

function startGame() {
    circleTurn = false
    matrix = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ]
    statusMessageText.innerText = ""
    try{
        cellElements[winnerPos].removeChild(winnerPosGraphic)
    }
    catch (DOMException){
        console.log('ERROR: The node to be removed is not a child of this node.')
    }


    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS)
        cell.classList.remove(CIRCLE_CLASS)
        cell.addEventListener('click', registerClick, { once: true })
    })
}

function registerClick(e) {
    if (statusMessageText.innerText == "Row Win" ||
        statusMessageText.innerText == "Column Win" ||
        statusMessageText.innerText == "Main Diagonal Win" ||
        statusMessageText.innerText == "Second Diagonal Win") return


    let [currentCell, currentClass] = dataFetching(e)

    placeMark(currentCell, currentClass)

    checkWinner(circleTurn)

    if (checkDraw()) return statusMessageText.innerText = "It's Draw!"

    swapTurns()
}

function statusMessageShow(condition, circleTurn, i){
    switch (condition){
        case "Row":
            statusMessageText.innerText = "Row Win"
            if (!circleTurn) scorePlayer1Text.innerText = "Player 1: " + ++player1_wins
            else scorePlayer2Text.innerText = "Player 2: " + ++player2_wins

            switch (i){
                case 0:
                    winnerPos = 1
                    winnerPosGraphic.setAttribute("class", "cell HorizontalCombinationWin")
                    cellElements[winnerPos].appendChild(winnerPosGraphic)
                    break
                case 1:
                    winnerPos = 4
                    winnerPosGraphic.setAttribute("class", "cell HorizontalCombinationWin")
                    cellElements[winnerPos].appendChild(winnerPosGraphic)
                    break
                case 2:
                    winnerPos = 7
                    winnerPosGraphic.setAttribute("class", "cell HorizontalCombinationWin")
                    cellElements[winnerPos].appendChild(winnerPosGraphic)
                    break
            }
            break
        case "Column":
            statusMessageText.innerText = "Column Win"
            if (!circleTurn) scorePlayer1Text.innerText = "Player 1: " + ++player1_wins
            else scorePlayer2Text.innerText = "Player 2: " + ++player2_wins

            winnerPos = i+3
            winnerPosGraphic.setAttribute("class", "cell verticalCombinationWin")
            cellElements[winnerPos].appendChild(winnerPosGraphic)
            break
        case "Main Diagonal":
            statusMessageText.innerText = "Main Diagonal Win"
            if (!circleTurn) scorePlayer1Text.innerText = "Player 1: " + ++player1_wins
            else scorePlayer2Text.innerText = "Player 2: " + ++player2_wins

            winnerPos = 4
            winnerPosGraphic.setAttribute("class", "cell MainDiagonalCombinationWin")
            cellElements[winnerPos].appendChild(winnerPosGraphic)
            break
        case "Second Diagonal":
            statusMessageText.innerText = "Second Diagonal Win"
            if (!circleTurn) scorePlayer1Text.innerText = "Player 1: " + ++player1_wins
            else scorePlayer2Text.innerText = "Player 2: " + ++player2_wins

            winnerPos = 4
            winnerPosGraphic.setAttribute("class", "cell SecondDiagonalCombinationWin")
            cellElements[winnerPos].appendChild(winnerPosGraphic)
            break
        default:
            statusMessageText.innerText = circleTurn ? "X Turn" : "Circle turn"
            break
    }
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}