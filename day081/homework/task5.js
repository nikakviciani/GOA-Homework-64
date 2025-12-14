// 6) შექმენით ორი მასივი და მესამე მასივი მათი გაერთიანებით spread operator-ის გამოყენებით. შეადარეთ შედეგი იმ შემთხვევას როცა მასივს ჩასვამთ პირდაპირ სხვაში

const a = [1, 2, 3];
const b = [4, 5, 6];

const spreadCombined = [...a, ...b];
const nestedCombined = [a, b];

console.log('spreadCombined:', spreadCombined); // [1, 2, 3, 4, 5, 6]
console.log('nestedCombined:', nestedCombined); // [[1, 2, 3], [4, 5, 6]]

console.log('spread length:', spreadCombined.length); // 6
console.log('nested length:', nestedCombined.length); // 2

// Show reference behavior: changing a affects nestedCombined but not spreadCombined
a[0] = 99;
console.log('after modifying a:');
console.log('spreadCombined (unchanged):', spreadCombined);
console.log('nestedCombined (reflects change):', nestedCombined);