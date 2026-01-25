// https://www.codewars.com/kata/586a933fc66d187b6e00031a/train/javascript

function generateName() {
  let name;
  do {
    name = Math.random().toString(36).substr(2, 6);
  } while (photoManager[name]);
  return name;
}
