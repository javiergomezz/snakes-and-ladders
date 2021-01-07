import {Game} from '../src/Game'

describe('Token can move across the Board', () => {

    let game: Game;

    beforeEach(() => {
        game = new Game();
    })

    it('Token is placed in the first square when the game is started', () => {
        game.start();

        expect(game.getTokenPosition()).toBe(1);
    })

    it('Token is on the fourth square when is moved three spaces from first square', () => {
        game.start();
        game.moveToken(3);

        expect(game.getTokenPosition()).toBe(4);
    })
})
