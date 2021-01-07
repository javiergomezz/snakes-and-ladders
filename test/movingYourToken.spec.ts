import {Game} from '../src/Game'

describe('Token can be moved across the Board', () => {

    let game: Game;

    beforeEach(() => {
        game = new Game();
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
