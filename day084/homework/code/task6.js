// https://www.codewars.com/kata/525caa5c1bf619d28c000335/train/javascript%20(Tic%20Tac%20Toe)

function isSolved(board) {
  // All possible winning triplets (row, col, diagonals)
  const wins = [
    [[0,0],[0,1],[0,2]],
    [[1,0],[1,1],[1,2]],
    [[2,0],[2,1],[2,2]],
    [[0,0],[1,0],[2,0]],
    [[0,1],[1,1],[2,1]],
    [[0,2],[1,2],[2,2]],
    [[0,0],[1,1],[2,2]],
    [[0,2],[1,1],[2,0]]
  ];

  // Check each win condition
  for (let line of wins) {
    const [a, b, c] = line;
    const v1 = board[a[0]][a[1]];
    if (v1 !== 0 &&
        v1 === board[b[0]][b[1]] &&
        v1 === board[c[0]][c[1]]) {
      return v1; // 1 or 2
    }
  }

  // Check for any empty squares
  for (let row of board) {
    if (row.includes(0)) {
      return -1; // unfinished
    }
  }

  // Otherwise it's a draw
  return 0;
}
