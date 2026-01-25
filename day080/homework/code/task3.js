https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

function expandedForm(num) {
  return String(num)
    .split('')
    .map((d, i, arr) => d * Math.pow(10, arr.length - i - 1))
    .filter(x => x > 0)
    .join(' + ');
}
