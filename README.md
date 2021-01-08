# snakes-and-ladders #

This is a NodeJs/Typescript module that propose a solution for the **Feature 1**
of the the **Snakes and Ladders kata**.
http://agilekatas.co.uk/katas/SnakesAndLadders-Kata

## Development process ##

It's designed using outside-in approach. Starting from BDD
examples I progressed creating acceptance tests and using mocks and
spies (Jest) to emulate collaborators behavior. I Followed the TDD cycle,
so at the end I have a set of examples, that make easy to understand the
expected game operation.

The only collaborator, a **Dice**, is injected as a parameters on the
**Game** class constructor.

To implement this exercise I used Git and a technique called 'micro
commits' to have enough granularity on every commit to let us read the
TDD cycle as it was developed.

## Design ##

The entry point is the **Game** class that has few public methods that allows
to control it.

The **Game** class let the player roll a dice to know how many spaces
will the token be moved on. That **Dice** class is a collaborator that provides
a random number between a defined interval. In this case from 1 to 6.

At this point is not necessary to implement separately any other entity
like **Player**, **Token** or **Board**. The **Game** class is enough to
keep all the business logic limiting the complexity.

## Assumptions ##

During the development, and just to implement this first feature, I
considered the following assumptions:

* The **Game** starts placing the token on the first position of the board.
* There is, at this point, only one **Player** and one **Token** per
player, with a _one-to-one_ relation between them, so I decided to
just to focus on the **tokenPosition** for the moment.
* The game will finish **only** when the token reach the last square of
the board. This meaning position 100. Otherwise the game will remain
open.
* If we try to move the token beyond the board size, the token will
stay on the same position. It wont bounce nor reach the last square
position discarding the remaining spaces.
* Code style will follow Visual Studio Code default settings.

## Possible improvements ##

Some improvements that could be made:

* The implementation can be more secure if we just offer one way to move
 the token like, for example, after rolling the die. I decided to leave both
 options available because that point wasn't clear enough from the feature
 description.

## Build and test execution ##

The **snakes-and-ladders** NodeJs module is based on **npm** and all the
dependencies are defined as development ones.

For the execution of the tests you should have installed:

* NodeJS
* npm

### Compile ###

For a fresh compile of the module we will use this command:

> npm run clean build


### Run the unit tests ###

We can run the unit tests executing the following command:

> npm test

### Development ###

For development purposes we can execute a **watch** version of the test run.
It will recompile and run tests as it detects that any file has changed. Please
run:

> npm run test:watch

### Coverage ###

A coverage service can be launched to obtain some useful information from the
project.

> npm run build view:coverage

To step the server you can just press CTRL+C.
