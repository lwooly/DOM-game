import { GameTurns } from "../turnManager.js";
import { createGridSquareHTML } from "./createGridSquareHTML.js";

export const renderBoard = (boards, boardNode, titleNode, turnManager, HTMLfn = createGridSquareHTML) => {
    //determine which board to render based on turn
    const boardManager = whichBoard(turnManager, boards)
    console.log(boardManager.player, `is this called?`)

    //create title for board
    const heading = document.createElement('h1')
    heading.textContent = `${boardManager.player}'s turn`

    titleNode.append(heading)

    //create fragment to limit DOM calls
    const fragment = document.createDocumentFragment()

    //create grid squares
    for (const gridSquare of boardManager.board) {
        fragment.append(HTMLfn(gridSquare))
    }

    //append to DOM
    boardNode.replaceChildren(fragment)
}


export const whichBoard = (turnManager, boards) => {
    //determine which board to render - initially allow 5 set up clicks per player
    
    console.log(turnManager, `turn????`)
    //for turns 1 - 5 players place "ships"
    if (turnManager.turn < 5) {
        if (turnManager.player1Turn) {
            console.log(`Player 1 board`)
            return boards.player1Board;

        } else {
            console.log(`Player 2 board`)
            return boards.player2Board;
        }
    } else {
        // for remaining turns alternative board is rendered
        if (turnManager.player1Turn) {
            console.log(`Player 2 board`)
            return boards.player2Board;
        } else {
            console.log(`Player 1 board`)
            return boards.player1Board;
        }
    }
}