import {Game} from '../src/Game'

describe('Token can move across the Board', () => {
    it('Token is placed in the first square when the game is started', () => {
        let game: Game = new Game();

        game.start();

        expect(game.getTokenPosition()).toBe(1);
    })

    it('Token is on the fourth square when is moved three spaces from first square', () => {
        let game: Game = new Game();

        game.start();
        game.moveToken(3);

        expect(game.getTokenPosition()).toBe(4);
    })
})
