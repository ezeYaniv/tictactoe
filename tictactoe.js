const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let gameTracker = [], turn;
const turnX = 'X',
  turnO = 'O';

function initializeGame() {
  $(document).ready(function () {
    $('.start').css('display', 'none');
    $('.square').children('p').text('');
    gameTracker = [];
    turn = turnX;
    $('h1').text('Player ' + turn + ' Turn');
    $('.square').click(function () {
      makeMove($(this));
      if (!checkWinDraw()) {
        turn = turn == turnX ? turnO : turnX;
        $('h1').text('Player ' + turn + ' Turn');
      } else if(checkWinDraw() == 'tie') {
        $('h1').text('Draw!');
        endGame();
      } else {
        $('h1').text('Player '+turn+" wins!");
        endGame();
      }
    });
  });
}

function makeMove(square) {
  if (square.text() == '') {
    square.children('p').text(turn);
    let squareNum = square.attr('id').slice(-1);
    gameTracker[squareNum - 1] = turn;
  } else {
    alert('That square is taken, please choose another.');
  }
}

function checkWinDraw() {
  for ([first, second, third] of winCombos) {
    if (gameTracker[first] !== undefined && gameTracker[first] === gameTracker[second] && gameTracker[first] === gameTracker[third]) {
      return turn;
    }
  }
  if (gameTracker.filter((element, index) => element != null).length == 9) {
    return 'tie';
  }
}

function endGame() {
    $('.start').css('display', '');
    $('.square').off();
}