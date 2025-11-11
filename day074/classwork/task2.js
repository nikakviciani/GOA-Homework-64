// 2) შექმენით shopping-ის გვერდი, თქვენ თავიდან გექნებათ პროდუქტების მასივი, რომელშიც იქნება ყველა პროდუქტი რომელსაც ყიდით ობიექტის სახით მოცემული, თქვენი ამოცანაა რომ ეს ყველა პროდუქტი გამოიტანოთ გვერდზე js-ის მეშვეობით, უნდა იყოს კალათა რომელშიც მომხმარბელს შეეძლება პროდუქტის დამატება
const products = [
    { id: 1, name: 'Carrot', price: 1.99, image: 'carrot.jpg' },
    { id: 2, name: 'Tomato', price: 2.49, image: 'tomato.jpg' },
    { id: 3, name: 'Cucumber', price: 1.79, image: 'cucumber.jpg' },
    { id: 4, name: 'Broccoli', price: 3.99, image: 'broccoli.jpg' },
    { id: 5, name: 'Spinach', price: 2.99, image: 'spinach.jpg' }
];

const cart = [];

function displayProducts() {
    const container = document.getElementById('products-container');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        container.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price;
        cartElement.innerHTML += `<div>${item.name} - $${item.price}</div>`;
    });
    cartElement.innerHTML += `<strong>Total: $${total.toFixed(2)}</strong>`;
}

window.onload = displayProducts;