// prompt()
// // ინფორმაციის შეყვანის ფანჯარა
// let userName = prompt("What is your name?");
// console.log(userName);
// // მეორე ხერხი
// let userAge = prompt("How old are you?", 18);
// console.log(userAge);
// 2) შექმენით სათაური, შესატანი ველი და ღილაკი. როდესაც მოხდება ღილაკზე დაჭერა სათურის ტექსტი უნდა განახლდეს და გახდეს <Hello მომხმარებლის სახელი> გამოიყენეთ external javascript და ყველაფერი ახსენით კომენტარებით
const title = document.getElementById("title");
const input = document.getElementById("input");
const button = document.getElementById("button");
button.onclick = function() {
    // ღილაკზე დაჭერისას ხდება ფუნქციის შესრულება
    // input.value - ამოღებულია მომხმარებლის მიერ შეყვანილი ტექსტი
    const name = input.value;
    title.textContent = 'hello ' + name;
};

