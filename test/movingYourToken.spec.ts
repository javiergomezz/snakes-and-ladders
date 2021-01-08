import {Game} from '../src/Game';
import {Dice} from '../src/Dice';

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
