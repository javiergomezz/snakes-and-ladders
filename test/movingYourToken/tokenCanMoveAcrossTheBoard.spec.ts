import {Game} from '../../src/Game';
import {Dice} from '../../src/Dice';

describe('Token can be moved across the Board', () => {

    let dice: Dice;
    let game: Game;

    beforeEach(() => {
        dice = new Dice();
        game = new Game(dice);
    })

    it('Token is placed in the first square when the game is started', () => {
        game.start();

        expect(game.getTokenPosition()).toBe(1);
    })

    it('Token can be moved forward', () => {
        game.start();
        game.moveToken(3);

        expect(game.getTokenPosition()).toBe(4);
    })

    it('Token can be moved forward multiple times', () => {
        game.start();
        game.moveToken(3);
        game.moveToken(4);

        expect(game.getTokenPosition()).toBe(8);
    })
})
