const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

let matrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]

function __init(){
  cellElements = document.querySelectorAll('[data-cell]')
  restartButton = document.getElementById('restartButton')

  restartButton.addEventListener('click', startGame)

  startGame()
}

function startGame() {
  circleTurn = false

  cellElements.forEach(cell => {
    cell.classList.remove(X_CLASS)
    cell.classList.remove(CIRCLE_CLASS)
    cell.addEventListener('click', registerClickUI, { once: true })
  })
}

function dataFetching(e) {
  const cell = e.target
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS

  updateMatrixData(cell, circleTurn)

  if (checkWin(CIRCLE_CLASS) || checkWin(X_CLASS)) return

  return [cell, currentClass]
}

function updateMatrixData(cell, circleTurn){

  for (let nodeListIndex = 0; nodeListIndex < cellElements.length; nodeListIndex++){
    let nodeItem = cellElements.item(nodeListIndex)
    if (nodeItem == cell){
      matrix[nodeListIndex%3][nodeListIndex/3] = circleTurn ? 1 : -1
    }
  }
}

function checkStatusOfGame(cell, currentClass){
  if (checkWin(currentClass)) {
    return endGame(1) // Winner is Defined
  }
  else if (checkDraw()){
    return endGame(2) // It's Draw
  }
  else
    swapTurns()
}

function endGame(stateOfGame){
  let message

  switch (stateOfGame){
    case 1:
      console.log(message = circleTurn ? "Circle player is winner" : "X player is winner")
      break
    case 2:
      console.log(message = "Nobody wins. It's Draw!")
      break
  }
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass)
}

function swapTurns() {
  circleTurn = !circleTurn
}

function checkWin(currentClass){
  return WINNING_COMBINATIONS.some(combination => combination.every(index => cellElements[index].classList.contains(currentClass)))
}

function checkDraw(){
  return Array.from(cellElements).every(cell => cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS))
}
