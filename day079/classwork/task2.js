// await ნიშნავს რომ ფუნქცია ასინქრონულია და ის უნდა დაელოდოს პრომისს სანამ გააგრძელებს შესრულებას  
async function fetchData() {
    try {
        // ვქმნით პრომისს რომელიც იმიტირებს მონაცემების მიღებას სერვერიდან
        let dataPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("მონაცემები მიღებულია სერვერიდან");
            }, 2000);
        });
        let data = await dataPromise;
        console.log(data);
    } catch (error) {
        console.error("შეცდომა მონაცემების მიღებისას:", error);
    }
}

fetchData();
// json არის მონაცემთა ფორმატი რომელიც გამოიყენება მონაცემების სტრუქტურირებისთვის და გადაცემისთვის სერვერებსა და ვებ აპლიკაციებს შორის
// fetch() არის მეთოდი რომელიც გამოიყენება ქსელური მოთხოვნების (network requests) შესასრულებლად და მონაცემების მისაღებად სერვერებიდან
// try...catch არის კონსტრუქცია რომელიც გამოიყენება შეცდომების მართვისთვის კოდში, რათა თავიდან ავიცილოთ პროგრამის კრაშები და მოვახდინოთ შეცდომების ლოგირება

// 2) შექმენით getProducts ფუნქცია, რომელიც წამოათრევს ინფორმაციას მოცემული api-იდან, თქვენ მოგეცემათ სია 20 პროდუქტის ობიექტით, თქვენი დავალებაა თითოეული პროდუქტის სათაური, კატეგორია და სურათი დაარენდეროთ ცალ-ცალკე დივებად products container-ში (div), თქვენი სიტყვებით დაწერეთ async & await-ზე

// https://fakestoreapi.com/products
// დრო 10:55-მდე

async function getProducts() {
    try {
        let response = await fetch('https://fakestoreapi.com/products');
        let products = await response.json();
        let container = document.getElementById('products-container');
        products.forEach(product => {
            let productDiv = document.createElement('div');
            productDiv.innerHTML = `
                <h2>${product.title}</h2>
                <p>${product.category}</p>
                <img src="${product.image}" alt="${product.title}" />
            `;
            container.appendChild(productDiv);
        });
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

getProducts();
// async & await არის JavaScript-ის ფუნქციების ასინქრონული პროგრამირების მეთოდი, რომელიც საშუალებას გვაძლევს დავწეროთ კოდი ისე, თითქოს ის სინქრონულია. async ფუნქცია ყოველთვის აბრუნებს პრომისს, ხოლო await გამოიყენება პრომისის შედეგის მისაღებად და კოდის შესრულების შეჩერებისთვის,ეს მეთოდი აუმჯობესებს ოპტიმიზაციას და არ ტვირთავს cpu-ს, რადგან კოდი არ ბლოკირდება პრომისის შესრულების დროს.