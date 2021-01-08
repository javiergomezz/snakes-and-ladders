import {Game} from '../../src/Game';
import {Dice} from '../../src/Dice';

describe('Player can win the game', () => {
    it('With the right die roll you can win the game', () => {
        let dice: Dice = new Dice();
        let game: Game = new Game(dice);
        spyOn(dice, 'roll').and.returnValue(3);
        
        game.start();
        game.moveToken(96);
        game.playerRollsDie();

        expect(game.getTokenPosition()).toBe(100);
        expect(game.isFinished()).toBeTruthy();
    })

    it('With the wrong die roll you cannot win the game', () => {
        let dice: Dice = new Dice();
        let game: Game = new Game(dice);
        spyOn(dice, 'roll').and.returnValue(4);
        
        game.start();
        game.moveToken(96);
        game.playerRollsDie();

        expect(game.getTokenPosition()).toBe(97);
        expect(game.isFinished()).toBeFalsy();
    })
})
