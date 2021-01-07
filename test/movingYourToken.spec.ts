import {Game} from '../src/Game'

describe('Token can move across the Board', () => {
    it('Token is placed in the first square when the game is started', () => {
        let game: Game = new Game();

        game.start();

        expect(game.getTokenPosition()).toBe(1);
    })
})
