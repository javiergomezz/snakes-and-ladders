import {Game} from '../src/Game';
import {Dice} from '../src/Dice';
import {Player} from '../src/Player';
//import {Math} from '../src/Math'

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

const each = require("jest-each").default;

describe('Moves are determined by dice rolls', () => {
    each([
        [6, 0.9],
        [5, 0.7],
        [4, 0.5],
        [3, 0.4],
        [2 ,0.2],
        [1, 0.1]
      ]).it('Player can roll a six-sided die and have %d based on a random seed %d', (expectedDieResult: number, randomNumber: number) => {
        let minDieValue: number = 1;
        let maxDieValue: number = 6;
        //let randomNumber: number = 0.5;
        //let expectedDieResult: number = Math.floor(randomNumber * maxDieValue) + minDieValue;
        let dice: Dice = new Dice();
        spyOn(global.Math, 'random').and.returnValue(randomNumber);

        let actualValue: number = dice.roll();

        expect(actualValue).toBe(expectedDieResult);
        expect(global.Math.random).toBeCalledTimes(1);
    })
})
