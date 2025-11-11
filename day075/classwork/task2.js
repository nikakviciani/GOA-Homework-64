// 2) მოცემულ პროდუქტების სიიდან გადაურეთ ციკლის მეშვეობით ყველა ელემენტს და დაარენდერეთ, ყველა ელემენტი უნდა დაემატოს productsContainer id-ის მოქნე div-ში, გამოიყენეთ innerHTML-ის კუთვნილება. ყველა პროდუქტს უდნა ჰქონდეს ცალკე ცივი რომელშიც ეწერბა პროდუქის სახლი h2 თეგით, აღწერა და ფასი ცალ-ცალკე პარაგრაფებით და უნდა იღლაკი რომელზეც ეწერბა "Buy" ყველა დივის ბოლოს უნდა იყოს <hr>
// const products = [
//     {name: "product1", price: 100, desc: "ery tr4yrtyrtytry rtytryr"},
//     {name: "product2", price: 200, desc: " eryert yrty rtyrrtyrt"},
//     {name: "product3", price: 300, desc: " eryerttyeryetyry r"},
//     {name: "product4", price: 400, desc: "eryeryert yertytryrt"},
const products = [
    {name: "product1", price: 100, desc: "ery tr4yrtyrtytry rtytryr"},
    {name: "product2", price: 200, desc: " eryert yrty rtyrrtyrt"},
    {name: "product3", price: 300, desc: " eryerttyeryetyry r"},
    {name: "product4", price: 400, desc: "eryeryert yertytryrt"},]
const productsContainer = document.getElementById("productsContainer");
for(let i = 0; i < products.length; i++){
    const product = products[i];
    productsContainer.innerHTML += `
        <div>
            <h2>${product.name}</h2>
            <p>${product.desc}</p>
            <p>Price: $${product.price}</p>
            <button>Buy</button>
        </div>
        <hr>
    `;}