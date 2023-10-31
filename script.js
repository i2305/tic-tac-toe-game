let cicrle_class="circle"
let x_class="x"
let circleTurn;
const info=document.querySelector(".winning-message");
const message=document.getElementById("game-over")
const winningCombos=[
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
]

const GameBoard = (() =>{
    let gameboard=document.querySelector("#gameboard");
    const startCells=["", "", "", "", "", "", "", "", ""];


    const createBoard = ()=>{
        startCells.forEach((_cell, index) =>{
            const cellElement=document.createElement("div");
            cellElement.classList.add("cell");
            cellElement.id=index;
            cellElement.addEventListener("click", handleClick, {once:true});
            gameboard.append(cellElement);
        });
    };

    const resetBoard=()=>{
        const allCells=document.querySelectorAll(".cell")
        allCells.forEach(cell=>{
            cell.classList.remove(x_class)
            cell.classList.remove(cicrle_class)
            cell.removeEventListener("click", handleClick)
            cell.addEventListener("click", handleClick, {once:true});
        })
    }
    return{
        createBoard,
        resetBoard,
    }

})();

GameBoard.createBoard();

function handleClick(e){
    const cell=e.target;
    const currentClass=circleTurn? cicrle_class : x_class;
    placeMark(cell, currentClass)
    if(xWins(x_class)){
        info.innerText="X wins!"
        message.classList.add("show")
    } else if (circleWins(cicrle_class)){
        info.innerText="O wins!"
        message.classList.add("show")
    } else if (isDraw()){
        info.innerText="It's a draw!"
        message.classList.add("show")
    };
    swapTurns();
};


function placeMark(cell, currentClass){
   cell.classList.add(currentClass);
};

function swapTurns(){
    circleTurn = !circleTurn   
};

function circleWins(cicrle_class){
    const cellElements=document.querySelectorAll(".cell")
    return winningCombos.some(combination=>{
        return combination.every(index=>{
            return cellElements[index].classList.contains(cicrle_class)
        })
    })
}

function xWins(x_class){
    const cellElements=document.querySelectorAll(".cell")
    return winningCombos.some(combination=>{
        return combination.every(index=>{
            return cellElements[index].classList.contains(x_class)
        })
    })
}

function isDraw(){
    const cellElements=document.querySelectorAll(".cell")
    return [...cellElements].every(cell=>{
        return cell.classList.contains(x_class) || cell.classList.contains(cicrle_class)
    })
}


const restartGame=document.querySelector("#reset-button");
restartGame.addEventListener("click", function(){
    info.innerText=""
    message.classList.remove("show")
    GameBoard.resetBoard();

})
