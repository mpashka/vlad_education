const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'

let matrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]

function __init(){
  cellElements = document.querySelectorAll('[data-cell]')
  restartButton = document.getElementById('restartButton')
  statusMessageText = document.querySelector('[game-status-message-text]')

  restartButton.addEventListener('click', startGame)

  startGame()
}

function dataFetching(e) {
  const cell = e.target
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS

  updateMatrixData(cell, circleTurn)

  return [cell, currentClass]
}

function updateMatrixData(cell, circleTurn){
  for (let nodeListIndex = 0; nodeListIndex < cellElements.length; nodeListIndex++){
    let nodeItem = cellElements.item(nodeListIndex)

    if (nodeItem == cell){
      matrix[Math.trunc(nodeListIndex/3)][nodeListIndex%3] = circleTurn ? 1 : -1
      console.log(nodeListIndex%3, Math.trunc(nodeListIndex/3), matrix)
    }
  }
}

function checkWinner(circleTurn){

  let symbol = circleTurn ? 1 : -1

  let rowCounter, colCounter
  let mainDiag = 0
  let secondDiag = 0

  for(let i = 0; i < 3; i++){
    mainDiag += matrix[i][i]
    secondDiag += matrix[3-i-1][i]

    rowCounter = 0
    colCounter = 0
    for(let j = 0; j < 3; j++){
      rowCounter += matrix[i][j]
      colCounter += matrix[j][i]
    }

    if (rowCounter == symbol*3) return statusMessageShow("Row")
    if (colCounter == symbol*3) return statusMessageShow("Column")
    if (mainDiag == symbol*3) return statusMessageShow("Main Diagonal")
    if (secondDiag == symbol*3) return statusMessageShow("Second Diagonal")
    statusMessageShow("", circleTurn)
  }
}
function checkDraw(){
  if (matrix.every(row => row.every(element => element != 0))) return true
}
function swapTurns() {
  circleTurn = !circleTurn
}