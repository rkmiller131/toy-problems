/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

function rockPaperScissors (rounds = 3) {
  const result = [];
  let currentPlay = '';
  function permutations(lastPlay) {
    // base case: we have as many string chars as the rounds provided
    if (lastPlay.length === rounds) {
      result.push(lastPlay);
      return;
    }
    // recursive case: continue to build the play permutations
    ['R', 'P', 'S'].forEach((play) => {
      return permutations(lastPlay + play);
    });
  }
  permutations(currentPlay);
  return result;
}

// console.log(rockPaperScissors(4));