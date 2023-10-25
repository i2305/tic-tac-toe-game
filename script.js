const GameBoard = (() =>{
    const gameboard=document.querySelector("#gameboard");
    const startCells=["", "", "", "", "", "", "", "", ""]

    const createBoard = ()=>{
        startCells.forEach((cell, index) =>{
            const cellElement=document.createElement("div");
            cellElement.classList.add("cell");
            gameboard.appendChild(cellElement)
        });
    }

    return{
        createBoard,
    }

})();

const Game =(()=>{
    let currentPlayer;
    let gameOver;

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
    currentPlayer=0;
    gameOver=false;

    return{
        start,
    }

})();

const startGame=document.querySelector("#start-button");
startGame.addEventListener("click", function(){
    GameBoard.createBoard();
    Game.start();
},{once:true});
