// 5) შექმენით ფუნქცია calcSum(first, ...numbers) რომელიც დაბეჭდავს პირველ რიცხვს და დანარჩენი რიცხვების ჯამს

function calcSum(first, ...numbers) {
    const sum = numbers.reduce((acc, n) => acc + n, 0);
    console.log(first);
    console.log(sum);
    return sum;
}