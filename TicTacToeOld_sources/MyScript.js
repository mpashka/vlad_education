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

let cellElements
let circleTurn
let restartButton

window.addEventListener("load", function(event) {
  __init()
});


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
    cell.addEventListener('click', registerClick, { once: true })
  })
}

function registerClick(e) {
  const cell = e.target
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS

  if (checkWin(CIRCLE_CLASS) || checkWin(X_CLASS)) return

  placeMark(cell, currentClass)

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
  /*if (cellElements[0][0].classList.contains(currentClass) && cellElements[0][1].classList.contains(currentClass) && cellElements[0][2].classList.contains(currentClass))
    console.log(true)
  if (cellElements[1][0].classList.contains(currentClass) && cellElements[1][1].classList.contains(currentClass) && cellElements[1][2].classList.contains(currentClass))
    console.log(true)
  if (cellElements[2][0].classList.contains(currentClass) && cellElements[2][1].classList.contains(currentClass) && cellElements[2][2].classList.contains(currentClass))
    console.log(true)
  if (cellElements[3][0].classList.contains(currentClass) && cellElements[3][1].classList.contains(currentClass) && cellElements[3][2].classList.contains(currentClass))
    console.log(true)
  if (cellElements[4][0].classList.contains(currentClass) && cellElements[4][1].classList.contains(currentClass) && cellElements[4][2].classList.contains(currentClass))
    console.log(true)
  if (cellElements[5][0].classList.contains(currentClass) && cellElements[5][1].classList.contains(currentClass) && cellElements[5][2].classList.contains(currentClass))
    console.log(true)
  if (cellElements[6][0].classList.contains(currentClass) && cellElements[6][1].classList.contains(currentClass) && cellElements[6][2].classList.contains(currentClass))
    console.log(true)
  if (cellElements[7][0].classList.contains(currentClass) && cellElements[7][1].classList.contains(currentClass) && cellElements[7][2].classList.contains(currentClass))
    console.log(true)*/

  return WINNING_COMBINATIONS.some(combination => combination.every(index => cellElements[index].classList.contains(currentClass)))
}
function checkDraw(){
  return Array.from(cellElements).every(cell => cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS))
}
