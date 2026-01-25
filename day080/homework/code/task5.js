// https://www.codewars.com/kata/54129112fb7c188740000162/train/javascript

function prefill(n, v) {
  if (typeof n === "number") {
    if (!Number.isInteger(n) || n < 0) throw new TypeError(`${n} is invalid`);
  } else if (typeof n === "string") {
    if (!/^\d+$/.test(n)) throw new TypeError(`${n} is invalid`);
    n = Number(n);
  } else {
    throw new TypeError(`${n} is invalid`);
  }

  return Array(n).fill(v);
}
