function rockPaperScissorsWinner(array) {
  let firstPlayerMove = array[0];
  let secondPlayerMove = array[1];
  // something in here for the readlinesync?
  let result = '';
  console.log('The array is:' + array);
  console.log('We are about to enter the loop');
  console.log('We are inside the for loop');
  if ((array === 0, 1) || (array === 1, 2) || (array === 2, 0)) {
    console.log('We are in branch 1');
    result = 'Player One wins!';
  } else if ((array === 1, 0) || (array === 2, 1) || (array === 0, 2)) {
    console.log('We are in branch 2');
    result = 'Player Two wins!';
  } else if ((array === 0, 0) || (array === 1, 1) || (array === 2, 2)) {
    console.log('We are in branch 3');
    result = 'This game ends in a draw. Try again';
  }
  return result;
}
if (require.main === module) {
  console.log('Running sanity checks for rockPaperScissorsWinner:');
  console.log(rockPaperScissorsWinner([0, 0])); // draw, branch 3
  console.log('------------------------');
  console.log(rockPaperScissorsWinner([0, 1])); // player 1, branch 1
  console.log('------------------------');
  console.log(rockPaperScissorsWinner([1, 0])); // player 2, branch 2
  console.log('------------------------');
  console.log(rockPaperScissorsWinner([2, 1])); // player 2, branch 2
}

module.exports = rockPaperScissorsWinner;
