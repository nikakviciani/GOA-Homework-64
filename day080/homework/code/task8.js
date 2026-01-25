// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str) {
  return str
    .split(" ")
    .map(w => /^[A-Za-z]+$/.test(w) ? w.slice(1) + w[0] + "ay" : w)
    .join(" ");
}
