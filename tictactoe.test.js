const { test, expect } = require('@jest/globals');
// const {playGame, initializeGame, makeMove, endTurn, checkWinDraw, endGame } = require('./tictactoe');
const tictactoe = require('./tictactoe');
const {checkWinDraw} = require('./tictactoe.js');

// test('gameTracker should equal [] after running initializeGame()', () => {
//     tictactoe.initializeGame();
//     alert(gameTracker);
//     // expect(gameTracker).toBe([]);
// })

test('X wins: If gameTracker shows X won and it is X turn, checkWinDraw should return "X"', () => {
    let gameTracker = ["X","O",,"X","O",,"X",,];
    expect(tictactoe.checkWinDraw("X", gameTracker)).toBe("X");
});

test('O wins: If gameTracker shows O won and it is O turn, checkWinDraw should return "O"', () => {
    let gameTracker = [,"O",,"X","O",,"X","O","X"];
    expect(tictactoe.checkWinDraw("O", gameTracker)).toBe("O");
});

test('Draw: If board is full with no winning combo and it is X turn, checkWinDraw should return "tie"', () => {
    let gameTracker = ["X","O","O","O","X","X","X","X","O"];
    expect(tictactoe.checkWinDraw("X", gameTracker)).toBe("tie");
});

test('No winner: If board is not full and no winning combo and it is X turn, checkWinDraw should return nothing', () => {
    let gameTracker = ["X","O","O","O","X","X",,,];
    expect(tictactoe.checkWinDraw("X", gameTracker)).toBe(null);
});