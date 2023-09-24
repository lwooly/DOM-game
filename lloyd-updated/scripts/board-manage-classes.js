export class GridSquare {
    constructor(id) {
        this._id = id;
        this.isShip = false,
        this.selected = false
    }

    selectGridSquare() {
        this.selected = true;
    }

    makeShip() {
        this.isShip = true;
    }
}

export class GridManager {
    constructor(playerName) {
        this.board = [],
        this.player = playerName
    }

    //create a single grid square by id
    createGridSquare(id) {
        const gridSquare = new GridSquare(id)
        this.board.push(gridSquare)
        return gridSquare
    }

    //set up the board with a total number of squares - must be equal sizes
    setupBoard(numSquares = 100) {
        for (let i = 0; i < 100; i++) {
            this.createGridSquare(i)
        }
    }


    //read
    getGridSquareByID(id) {
        const gridSquare = this.board.find((square) => {
            return square._id === Number(id);
        })
        return gridSquare;
    }

    //update
    makeShip(gridSquare) {
        gridSquare.makeShip()
    }
    
    selectGridSquare(gridSquare) {
        gridSquare.selectGridSquare()
    }

    makeShipById(id) {
        const gridSquare = this.getGridSquareByID(id)
        gridSquare.makeShip()
    }
    
    selectGridSquareById(id) {
        const gridSquare = this.getGridSquareByID(id)
        gridSquare.selectGridSquare()
    }

    //delete
    resetBoard() {
        this.board = []
    }
}


