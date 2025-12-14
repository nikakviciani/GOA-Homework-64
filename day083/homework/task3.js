// 4) შექმენით productPrices Map პროდუქტების ფასებით გამოიყენეთ for of ლუპი რომ დაბეჭდოთ თითო key და value შემდეგ map.set ით გაზარდეთ ერთ-ერთი პროდუქტის ფასი 20 პროცენტით

// Create a Map with product prices
const productPrices = new Map([
    ["apple", 100],
    ["banana", 50],
    ["orange", 75]
]);

// Print each key and value using for...of loop
for (const [product, price] of productPrices) {
    console.log(`${product}: ${price}`);
}

// Increase apple price by 20%
const currentPrice = productPrices.get("apple");
productPrices.set("apple", currentPrice * 1.2);

console.log("\nAfter 20% increase:");
for (const [product, price] of productPrices) {
    console.log(`${product}: ${price}`);
}