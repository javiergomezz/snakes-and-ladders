export class Dice {
    private static MAX_NUMBER: number = 6;
    private static MIN_NUMBER: number = 1;

    roll(): number {
        return Math.floor(Math.random() * Dice.MAX_NUMBER) + Dice.MIN_NUMBER;
    }
}