// 4) შექმენით მასივი passwords სამი ელემენტით. გამოიყენეთ array destructuring თითოეულის მისაღებად. დაამატეთ მეოთხე ელემენტი და გამოიყენეთ rest operator დარჩენილი ელემენტებისთვის
const passwords = ['alpha123', 'beta456', 'gamma789'];

// destructure the three elements
const [first, second, third] = passwords;
console.log(first, second, third); // alpha123 beta456 gamma789

// add a fourth element
passwords.push('delta000');

// use rest operator to collect remaining elements
const [p1, p2, ...rest] = passwords;
console.log(p1, p2);   // alpha123 beta456
console.log(rest);     // ['gamma789', 'delta000']

// or destructure all and collect any extras
const [a, b, c, ...remaining] = passwords;
console.log(a, b, c, remaining);