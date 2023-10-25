let cicrle_class="circle"
let x_class="x"
let circleTurn;

const GameBoard = (() =>{
    const gameboard=document.querySelector("#gameboard");
    const startCells=["", "", "", "", "", "", "", "", ""]

    const createBoard = ()=>{
        startCells.forEach((cell, index) =>{
            const cellElement=document.createElement("div");
            cellElement.classList.add("cell");
            gameboard.appendChild(cellElement)
            cellElement.addEventListener("click", handleClick, {once:true});
        });
    }

    return{
        createBoard,
    }

})();

function handleClick(e){
    const cell=e.target;
    const currentClass=circleTurn? cicrle_class : x_class;
    placeMark(cell, currentClass)
    swapTurns()
}

function placeMark(cell, currentClass){
    cell.classList.add(currentClass);
}

function swapTurns(){
    circleTurn = !circleTurn
}


const Game =(()=>{
    
    const start=()=>{
        const X=document.querySelector("#X-button");
        X.addEventListener("click", function(){
        const info=document.querySelector(".info");
        info.textContent="X plays first"
        });

        const O=document.querySelector("#O-button");
        O.addEventListener("click", function(){
        const info=document.querySelector(".info");
        info.textContent="O plays first"
        });
        
    };

    return{
        start,
    }

})();

const startGame=document.querySelector("#start-button");
startGame.addEventListener("click", function(){
    GameBoard.createBoard();
    Game.start();
},{once:true});
