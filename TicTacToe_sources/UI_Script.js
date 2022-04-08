let cellElements
let circleTurn
let restartButton

window.addEventListener("load", function(event) {
    __init()
});

function registerClickUI(e) {
    let [currentCell, currentClass] = dataFetching(e)

    placeMark(currentCell, currentClass)

    checkStatusOfGame(currentCell, currentClass)
}