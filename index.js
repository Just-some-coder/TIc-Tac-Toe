let gridSize = 3;
let pieceBool = true;
let gameOverFlag = false;
let xWon = 'x'.repeat(gridSize);
let oWon = 'o'.repeat(gridSize);
let xScore = 0;
let yScore = 0;

const player1 = "Player 1";
const player2 = "Player 2";

// document.querySelector('#score_x').innerHTML = `${player1}'s Score: 0`;
// document.querySelector('#score_y').innerHTML = `${player2}'s Score: 0`;
function getGridSize(){
    document.querySelector('#homeScreen').style.display = "none";
    document.querySelector('#selectGridSize').style.display = 'grid';
}

function launchTwoPlayer(){
    document.querySelector('#selectGridSize').style.display = "none";
    document.querySelector('#game').style.display = "flex";
    xWon = 'x'.repeat(gridSize);
    oWon = 'o'.repeat(gridSize);
    createGrid(gridSize);
}
function increaseGridSize(){
    gridSize++;
    document.querySelector('#gridSize').innerHTML = gridSize;
}

function decreaseGridSize(){
    if(gridSize===0){
        return;
    }
    gridSize--;
    document.querySelector('#gridSize').innerHTML = gridSize;
}
function checkWinner(){

    let matchWinner = checkLinesHorizontal() || checkLinesVertical() || checkDiagonals();

    if(matchWinner === 1){
        xScore++;
        document.querySelector(`#score_x`).innerHTML = `${player1}'s <br>Score: ${xScore}`;
    }else if(matchWinner === -1){
        yScore++;
        document.querySelector(`#score_y`).innerHTML = `${player2}'s <br>Score: ${yScore}`;
    }

}
function addPiece(id) {
    if(gameOverFlag){
        return;
    }
    if (document.querySelector('#' + id).innerHTML !== "") {
        return;
    }
    if (pieceBool) {
        document.querySelector('#' + id).innerHTML = 'x';
        pieceBool = false;
    } else {
        document.querySelector('#' + id).innerHTML = 'o';
        pieceBool = true;
    }

    checkWinner();
}
function createGrid() {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            let boxProto = `<button id = 'box${i}${j}' class = 'box' onclick='addPiece(id)'></button>`;
            document.querySelector('#tic-tac-toe').innerHTML += boxProto;
        }
    }
    document.querySelector('#tic-tac-toe').style.gridTemplateColumns = 'repeat(' + gridSize + ',150px)';
}

function emptyGrid(){
    for(let i = 0;i<gridSize;i++){
        for(let j = 0;j<gridSize;j++){
            document.querySelector(`#box${i}${j}`).innerHTML = '';
        }
    }
}

function newGame(){
    gameOverFlag = false;
    emptyGrid();
    pieceBool = true;
    document.querySelector('#gameWinner').innerHTML = '';
}

function checkLinesHorizontal()     {

    for (let i = 0; i < gridSize; i++) {
        let verificationString = "";
        for (let j = 0; j < gridSize; j++) {
            verificationString += document.querySelector(`#box${i}${j}`).innerHTML;
        }

        if (verificationString === xWon) {
            document.querySelector('#gameWinner').innerHTML = `${player1} WON`;
            gameOverFlag = true;
            return 1;
        }
        if (verificationString === oWon) {
            document.querySelector('#gameWinner').innerHTML = `${player2} WON`;
            gameOverFlag = true;
            return -1;
        }

        verificationString = "";
    }
    return null;
}

function checkLinesVertical(){
    let verificationString = "";
    for(let i = 0;i<gridSize;i++){
        for(let j = 0;j<gridSize;j++){
            verificationString+=document.querySelector(`#box${j}${i}`).innerHTML
        }
        if (verificationString === xWon) {
            document.querySelector('#gameWinner').innerHTML = `${player1} WON`;
            gameOverFlag = true;
            return 1;
        }
        if (verificationString === oWon) {
            document.querySelector('#gameWinner').innerHTML = `${player2} WON`;
            gameOverFlag = true;
            return -1;
        }
        verificationString = "";
    }
    return null;
}
function checkDiagonals(){
    let verificationString = "";
    for(let i = 0;i<gridSize;i++){
        verificationString+=document.querySelector(`#box${i}${i}`).innerHTML;
    }
    if (verificationString === xWon) {
        document.querySelector('#gameWinner').innerHTML = `${player1} WON`;
        gameOverFlag = true;
        return 1;
    }
    if (verificationString === oWon) {
        document.querySelector('#gameWinner').innerHTML = `${player2} WON`;
        gameOverFlag = true;
        return -1;
    }

    verificationString = "";

    let i = 0;
    let j = gridSize-1;
    while(j>=0){
        verificationString += document.querySelector(`#box${i}${j}`).innerHTML;
        i++;
        j--;
    }

    if (verificationString === xWon) {
        document.querySelector('#gameWinner').innerHTML = `${player1} WON`;
        gameOverFlag = true;
        return 1;
    }
    if (verificationString === oWon) {
        document.querySelector('#gameWinner').innerHTML = `${player2} WON`;
        gameOverFlag = true;
        return -1;
    }
    return null;
}

