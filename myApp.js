let playerRed = "red";
let playerYellow = "yellow";
let currPlayer = playerRed;
let gameOver = false;
let winner = document.querySelector("h2");
let board;

let rows=6;
let columns=7;

window.onload = function() {
    setGame();
}

function setGame() {
    board = [];
    currColumns = [5, 5, 5, 5, 5, 5, 5];

    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            // JS
            row.push(' ');
            // HTML
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.addEventListener("click", setPiece);
            document.getElementById("board").append(tile);
        }
        board.push(row);
    }
}

function setPiece() {

    if (gameOver) {
        return;
    }
    
    let c = this.id[this.id.length-1];
    let r=currColumns[c];

    if (r<0) {
        return;
    }
    
    board[r][c] = currPlayer;
    let tile = document.getElementById(r.toString() + "-" + c.toString());
    tile.classList.add(currPlayer);

    checkWin(r,c,currPlayer);

    if (currPlayer===playerRed) {
        currPlayer = playerYellow;
    } else if (currPlayer===playerYellow) {
        currPlayer = playerRed;
    }

    currColumns[c]--;
    
}

function checkWin(r, c, currPlayer) {
    //horizontal
        //1st in row
        if (board[r][c]===currPlayer && board[r][c+1]===currPlayer && board[r][c+2]===currPlayer && board[r][c+3]===currPlayer) {
            setWinner(currPlayer);
        } 
        //2nd in row
        else if (board[r][c]===currPlayer && board[r][c-1]===currPlayer && board[r][c+1]===currPlayer && board[r][c+2]===currPlayer) {
            setWinner(currPlayer);
        }
        //3rd in row
        else if (board[r][c]===currPlayer && board[r][c-1]===currPlayer && board[r][c-2]===currPlayer && board[r][c+1]===currPlayer) {
            setWinner(currPlayer);
        }
        //4th in row
        else if (board[r][c]===currPlayer && board[r][c-1]===currPlayer && board[r][c-2]===currPlayer && board[r][c-3]===currPlayer) {
            setWinner(currPlayer);
        }

    //vertical
        //1st in column
        if (board[r][c]===currPlayer && board[r+1]?.[c]===currPlayer && board[r+2]?.[c] && board[r+3]?.[c]){
            setWinner(currPlayer);
        }
        //2nd in column
        else if (board[r][c]===currPlayer && board[r-1]?.[c]===currPlayer && board[r+1]?.[c] && board[r+2]?.[c]){
            setWinner(currPlayer);
        }
        //3rd in column
        else if (board[r][c]===currPlayer && board[r-2]?.[c]===currPlayer && board[r-1]?.[c] && board[r+1]?.[c]){
            setWinner(currPlayer);
        }
        //4th in column
        else if (board[r][c]===currPlayer && board[r-3]?.[c]===currPlayer && board[r-2]?.[c] && board[r-1]?.[c]){
            setWinner(currPlayer);
        }

        //left to right diagonal
            if (board[r][c]===currPlayer && board[r-1]?.[c-1]===currPlayer && board[r-2]?.[c-2] && board[r-3]?.[c-3]){
                setWinner(currPlayer);
            }
            else if (board[r][c]===currPlayer && board[r-1]?.[c-1]===currPlayer && board[r-2]?.[c-2] && board[r+1]?.[c+1]){
                setWinner(currPlayer);
            }
            else if (board[r][c]===currPlayer && board[r-1]?.[c-1]===currPlayer && board[r+1]?.[c+1] && board[r+2]?.[c+2]){
                setWinner(currPlayer);
            }
            else if (board[r][c]===currPlayer && board[r+1]?.[c+1]===currPlayer && board[r+2]?.[c+2] && board[r+3]?.[c+3]){
                setWinner(currPlayer);
            }

        //right to left diagonal
            if (board[r][c]===currPlayer && board[r-1]?.[c+1]===currPlayer && board[r-2]?.[c+2] && board[r-3]?.[c+3]){
                setWinner(currPlayer);
            }
            else if (board[r][c]===currPlayer && board[r-1]?.[c+1]===currPlayer && board[r-2]?.[c+2] && board[r+1]?.[c-1]){
                setWinner(currPlayer);
            }
            else if (board[r][c]===currPlayer && board[r-1]?.[c+1]===currPlayer && board[r+1]?.[c-1] && board[r+2]?.[c-2]){
                setWinner(currPlayer);
            }
            else if (board[r][c]===currPlayer && board[r+1]?.[c-1]===currPlayer && board[r+2]?.[c-2] && board[r+3]?.[c-3]){
                setWinner(currPlayer);
            }


}


function setWinner(player) {
    winner.innerHTML = player + " wins!";
    gameOver = true;
}

/*

eventlisteners for each column
- each click changes currplayer
-call redplayerturn or yellowplayerturn depending on currplayer

redplayerturn
-go at highest empty row number -- turn grid value to "R"
-add red to classlist by using tile id
-check 4inarow

yellowplayerturn
-go at highest empty row number -- turn grid value to "Y"
-add yellow to classlist by using tile id
-check 4inarow

check 4inarow
-check if 4 in a row involving this move
- account for edge (only check if exists)

playerwins
-disable eventlisteners
-display player wins message

*/