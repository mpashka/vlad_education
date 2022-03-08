const WINNING_COMBINATION = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
]
let board = [
  [0,0,0],
  [0,0,0],
  [0,0,0],
];

/*blocks.onclick = function() { alert(1); }*/
const blocks = document.querySelectorAll('[data-cell]')
blocks.forEach(block =>{
  block.addEventListener('click', operateClick, { once: true })
})
function operateClick(event){
  console.log('clicked')
}

game()

class Block {
  constructor(id) {
    this.id = id;
  }

  addSymbol_X(block) {
  }

  addSymbol_O(block) {
  }
}


function game(){
  let X_turn = true;
}

