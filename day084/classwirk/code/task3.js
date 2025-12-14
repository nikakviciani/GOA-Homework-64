// https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript
function expandedForm(num) {
  const digits = String(num).split('').map(d => Number(d));

  const len = digits.length;
  const parts = [];

  digits.forEach((digit, idx) => {
    if (digit !== 0) {
      const zeros = len - idx - 1;
      const part = digit * Math.pow(10, zeros);
      parts.push(part);
    }
  });

  return parts.join
