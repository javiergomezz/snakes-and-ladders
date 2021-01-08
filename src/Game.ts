import { Dice } from "../src/Dice";

export class Game {
    private tokenPosition: number = 0;
    private readonly dice: Dice;
    private readonly boardSize: number = 100

    constructor(dice: Dice) {
        this.dice = dice;
    }

    start(): void {
        this.tokenPosition = 1;
    }

    isFinished(): boolean {
        return this.tokenPosition == this.boardSize;
    }
    
    moveToken(spaces: number): void {
        if((this.boardSize - this.tokenPosition) >= spaces) {
            this.tokenPosition += spaces;
        }
    }

    playerRollsDie(): void {
        this.moveToken(this.dice.roll());
    }
    
    getTokenPosition(): number {
        return  this.tokenPosition;
    }
}