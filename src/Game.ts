import { Dice } from "../src/Dice";

export class Game {
    private tokenPosition: number = 0;
    private readonly dice: Dice;

    constructor(dice: Dice) {
        this.dice = dice;
    }

    start(): void {
        this.tokenPosition = 1;
    }
    
    moveToken(spaces: number): void {
        this.tokenPosition += spaces;
    }

    playerRollsDie(): void {
        this.moveToken(this.dice.roll());
    }
    
    getTokenPosition(): number {
        return  this.tokenPosition;
    }
}