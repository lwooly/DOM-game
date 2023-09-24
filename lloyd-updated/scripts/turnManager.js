//turnManager
export class GameTurns {
    constructor() {
        this.turn = 0,
        this.player1Turn = true;
        this.player2Turn = false;
    }

    playerTurnUpdate() {
        if (this.turn % 2 === 0) {
            this.player1Turn = true;
            this.player2Turn = false;
        } else {
            this.player1Turn = false;
            this.player2Turn = true;
        }
    }
    
    turnComplete() {
        this.turn += 1;
        this.playerTurnUpdate()
    }

    
}