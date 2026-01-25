// https://www.codewars.com/kata/51e04f6b544cf3f6550000c1/train/javascript

function beeramid(bonus, price) {
  let level = 0, totalCans = 0;
  while (true) {
    level++;
    totalCans += level * level;
    if (totalCans * price > bonus) return level - 1;
  }
}
