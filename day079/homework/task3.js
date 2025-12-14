// 4) შექმენით getProducts ფუნქცია, რომელიც async ტიპის იქნება. await-ის გამოყენებით წამოიღეთ პროდუქტის სია https://fakestoreapi.com/products API-დან. მიღებული მასივიდან თითოეული პროდუქტი გამოიტანეთ DOM-ში ცალკე დივად: სათაური, კატეგორია და სურათი. კომენტარებით ახსენით თქვენი სიტყვებით async და await რას აკეთებს
let container = document.querySelector('div')
async function getProducts() {
    // async ფუნქცია მიუთითებს, რომ ფუნქცია ასინქრონულია და შეიძლება შეიცავდეს await ოპერატორებს
    try {
        let response = await fetch('https://fakestoreapi.com/products');
        // await ოპერატორი გამოიყენება იმისთვის, რომ დააყოვნოს ფუნქციის შესრულება მანამ, სანამ პრომისი არ შესრულდება
        let products = await response.json();
        products.forEach(product => {
            let productDiv = document.createElement('div');
            let title = document.createElement('h2');
            title.textContent = product.title;
            let category = document.createElement('p');
            category.textContent = product.category;
            let image = document.createElement('img');
            image.src = product.image;
            productDiv.appendChild(title);
            productDiv.appendChild(category);
            productDiv.appendChild(image);
            container.appendChild(productDiv);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}
getProducts();
