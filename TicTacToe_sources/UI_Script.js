let cellElements
let restartButton
let statusMessageText

let circleTurn = false

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

function statusMessageShow(condition, circleTurn){
    switch (condition){
        case "Row":
            statusMessageText.innerText = "Row Win"
            break
        case "Column":
            statusMessageText.innerText = "Column Win"
            break
        case "Main Diagonal":
            statusMessageText.innerText = "Main Diagonal Win"
            break
        case "Second Diagonal":
            statusMessageText.innerText = "Second Diagonal Win"
            break
        default:
            statusMessageText.innerText = circleTurn ? "X Turn" : "Circle turn"
            break
    }
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}