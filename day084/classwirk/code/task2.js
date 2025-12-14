// https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript

function sumDigPow(a, b) {
  
  var result = [];
  for(var num = a; num <= b; num++) {
    var strNum = (String(num)).split("")
    
    var total = 0;
    strNum.map((digit, index) => {
      total += Number(digit) ** (index + 1)
    })
    if (total == num) {
      result.push(num)
    }
  }
  return result;
}