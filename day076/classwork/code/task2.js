// https://www.codewars.com/kata/5a63948acadebff56f000018/train/javascript

function maxProduct(numbers, size) {
  numbers.sort((a, b) => b - a);
  let product = 1;
  for (let i = 0; i < size; i++) {
    product *= numbers[i];
  }
  return product;
}
