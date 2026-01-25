// https://www.codewars.com/kata/525caa5c1bf619d28c000335/train/javascript

function isSolved(board) {
  const wins = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  // cols
    [0, 4, 8], [2, 4, 6]              // diagonals
  ];
  const flat = board.flat();
  for (let [a, b, c] of wins) {
    if (flat[a] && flat[a] === flat[b] && flat[a] === flat[c]) {
      return flat[a];
    }
  }
  return flat.includes(0) ? -1 : 0;
}
