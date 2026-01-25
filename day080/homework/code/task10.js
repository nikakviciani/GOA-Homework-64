// https://www.codewars.com/kata/51edd51599a189fe7f000015/train/javascript

const solution = function(firstArray, secondArray) {
  let sum = 0;
  for (let i = 0; i < firstArray.length; i++) {
    sum += (firstArray[i] - secondArray[i]) ** 2;
  }
  return sum / firstArray.length;
}
