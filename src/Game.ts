import { Board } from "./Board";
import { Token } from "./Token";

export class Game {
    playerRollsDie(): void { }
    private tokenPosition: number = 0;

    start(): void {
        this.tokenPosition = 1;
    }
    
    moveToken(spaces: number): void {
        this.tokenPosition += spaces;
    }
    
    getTokenPosition(): number {
        return  this.tokenPosition;
    }
}