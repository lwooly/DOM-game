// IMPORTS
import { GridSquare, GridManager } from "./board-manage-classes.js"
import { renderBoard, whichBoard } from "./renderBoard/renderBoard.js"
import { GameTurns } from "./turnManager.js"



// VARIABLES


// FUNCTIONS


// SELECTORS
const gameBoard = document.querySelector('#board')
const turnNode = document.querySelector('body')

// STATE

//create boards for player 1 and player 2 seperately
const player1Board = new GridManager('Player 1')
player1Board.setupBoard()

const player2Board = new GridManager('Player 2')
player2Board.setupBoard()


// game turns
const turnManager = new GameTurns()

console.log(turnManager)


// ACTIONS


//create boards to play
const gameBoardsObj = {
    player1Board: player1Board,
    player2Board: player2Board
}

console.log(gameBoardsObj, `objtest`)

//render the player1Board for game start
renderBoard(gameBoardsObj, gameBoard, turnNode, turnManager)


// BINDINGS
gameBoard.addEventListener('click', (event) => {
    //find square clicked
    const id = event.target.dataset.id

    //update properties of square
    const board = whichBoard(turnManager, gameBoardsObj)
    //make ships before turn 5
    if (turnManager.turn < 5) {
        board.makeShipById(id)
    } else {
        //select square after turn 5
        board.selectGridSquareById(id)
    }

    //re-render board to show ship
    renderBoard(gameBoardsObj, gameBoard, turnManager)

    turnManager.turnComplete()
    //after 2 seconds end turn and then 
    setTimeout(() => {
        //turn complete
        return renderBoard(gameBoardsObj, gameBoard, turnNode, turnNode, turnManager)}, 2000)
})

//this works but need to be confirmed by a click of a button rather than by instant click.

//initial clicks add a token blue marker then call make ship by ID on the eventual button press