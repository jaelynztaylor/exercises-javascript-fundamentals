/**
 * Given two numbers representing two players' moves in a game of rock,
 * paper, scissors, return whether the first player's move was a win,
 * loss, or draw.
 *
 * To play, two people count off to three. On the count, each hold out their
 * hand in the shape of a rock, a piece of paper, or a pair of scissors. Scissors
 * beats paper, paper beats rock, and rock beats scissors. If both players play
 * the same item, it's a draw.
 *
 * See https://en.wikipedia.org/wiki/Rock_paper_scissors
 *
 * We will represent scissors with the number 0, paper with the number 1,
 * and rock with the number 2.
 *
 * @example
 * rockPaperScissorsWinner(0, 1); // => 'win' (scissors beats paper)
 * rockPaperScissorsWinner(1, 0); // => 'lose' (paper loses to scissors)
 * rockPaperScissorsWinner(1, 2); // => 'win' (paper beats rock)
 * rockPaperScissorsWinner(2, 2); // => 'draw' (both players played rock)
 *
 * @param {number} firstPlayerMove - The first player's move
 * @param {number} secondPlayerMove - The second player's move
 * @returns {string} Returns 'win', 'lose', or 'draw' depending on
 *  whether the first player won, lost, or drew the match.
 */
let readlinesync = require('readline-sync')

firstPlayer = readlinesync.question ('What is your name, Player One?') //user input
console.log (firstPlayer + ' is Player One.')

secondPlayer = readlinesync.question ('What is your name, Player Two?') //user input
console.log (secondPlayer + ' is Player Two.')

firstPlayerMove = readlinesync.question ('What is your move Player One? Enter 0 for scissors, 1 for paper, or 2 for rock.')
//now i need to push these values into an array


function rockPaperScissorsWinner(array) {
  let firstPlayerMove = array[0]
  let secondPlayerMove = array[1]
  //something in here for the readlinesync? 
  let result = '';
  console.log('The array is:' + array)  
  console.log('We are about to enter the loop')
   console.log ('We are inside the for loop') 
    if ((array === 0,1) || (array === 1,2) || (array === 2,0)) {
      console.log('We are in branch 1')
      result = 'Player One wins!'
    }
    else if ((array === 1,0) || (array === 2,1) || (array === 0,2)){
      console.log('We are in branch 2')
      result = 'Player Two wins!'
    }
    else if((array === 0,0) || (array === 1,1) || (array === 2,2)) {
      console.log('We are in branch 3')
      result = 'This game ends in a draw. Try again'
    }
  return result
 }

if (require.main === module) {
  console.log('Running sanity checks for rockPaperScissorsWinner:');
  console.log(rockPaperScissorsWinner([0,0])) //draw, branch 3
  console.log('------------------------')
  console.log(rockPaperScissorsWinner([0,1])) //player 1, branch 1
  console.log('------------------------')
  console.log(rockPaperScissorsWinner([1,0])) //player 2, branch 2
  console.log('------------------------')
  console.log(rockPaperScissorsWinner([2,1])) //player 2, branch 2

}

module.exports = rockPaperScissorsWinner;
