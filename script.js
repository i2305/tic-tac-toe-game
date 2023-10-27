let cicrle_class="circle"
let x_class="x"
let circleTurn;
const winningCombos=[
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
]

const GameBoard = (() =>{
    const gameboard=document.querySelector("#gameboard");
    const startCells=["", "", "", "", "", "", "", "", ""];

    const createBoard = ()=>{
        startCells.forEach((cell, index) =>{
            const cellElement=document.createElement("div");
            cellElement.classList.add("cell");
            gameboard.appendChild(cellElement)
            cellElement.addEventListener("click", handleClick, {once:true});
        });
    }

    const remove=()=>{
        gameboard.remove();
    }

    return{
        createBoard,
        remove,
    }

})();



function handleClick(e){
    const cell=e.target;
    const currentClass=circleTurn? cicrle_class : x_class;
    placeMark(cell, currentClass)
    swapTurns()
};


function placeMark(cell, currentClass){
   cell.classList.add(currentClass);
};

function swapTurns(){
    circleTurn = !circleTurn   
};

/*function checkWin(currentClass){
   return winningCombos.some(combinations=>{
    return combinations.every(index =>{
        return cellElement[index].classList.contains(currentClass)
    })
   })
}*/

const startGame=document.querySelector("#start-button");
startGame.addEventListener("click", function(){
    const info=document.querySelector(".info");
    info.textContent="X plays first"
    GameBoard.createBoard();
});

