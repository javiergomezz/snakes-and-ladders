import {Game} from '../../src/Game';
import {Dice} from '../../src/Dice';

const each = require("jest-each").default;

describe('Moves are determined by dice rolls', () => {
    it('When a player rolls a four the token moves until the fifth square', () => {
        let dice: Dice = new Dice();
        let game: Game = new Game(dice);
        spyOn(dice, 'roll').and.returnValue(4);
        
        game.start();
        game.playerRollsDie();

        expect(game.getTokenPosition()).toBe(5);
    })

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
        let dice: Dice = new Dice();
        spyOn(global.Math, 'random').and.returnValue(randomNumber);

        let actualValue: number = dice.roll();

        expect(actualValue).toBe(expectedDieResult);
        expect(global.Math.random).toBeCalledTimes(1);
    })
})