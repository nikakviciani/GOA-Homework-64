// https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript

function sumDigPow(a, b) {
  const results = [];
  for (let n = a; n <= b; n++) {
    const sum = String(n)
      .split('')
      .reduce((acc, digit, idx) => acc + Math.pow(+digit, idx + 1), 0);
    if (sum === n) results.push(n);
  }
  return results;
}
