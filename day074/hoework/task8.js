// 8) შექმენით ვებგვერდი, რომელზეც გექნებათ 1 ღილაკი. ღილაკზე დაჭერისას უნდა შეიქმნას ახალი პარაგრაფი, რომელიც შეიცავს შემთხვევით რიცხვს 0-იდან 1000-მდე დიაპაზონში. პარაგრაფი ყოველ დაჭერაზე უნდა დაემატოს body თეგში. გამოიყენეთ createElement, textContent და appendChild მეთოდები. კომენტარებით ახსენით Math.random და Math.floor ფუნქციების დანიშნულება
document.getElementById("generateButton").addEventListener("click", function() {
    // Math.random ფუნქცია აბრუნებს შემთხვევით რიცხვს 0 (მათ შორის) და 1 (არასამთვრობიდან) შორის
    // იმისთვის, რომ მივიღოთ რიცხვი 0-დან 1000-მდე, ვამრავლებთ Math.random()-ის შედეგს 1001-ზე (1000-ის ჩათვლით)
    // Math.floor ფუნქცია ამრგვალებს რიცხვს ქვემოთ ყველაზე ახლოს მდგომ მთელ რიცხვამდე
    let randomNumber = Math.floor(Math.random() * 1001); // შემთხვევითი რიცხვი 0-დან 1000-მდე
    let newParagraph = document.createElement("p"); // ახალი პარაგრაფის ელემენტის შექმნა
    newParagraph.textContent = randomNumber; // პარაგრაფის ტექსტის დაყენება შემთხვევით რიცხვზე
    document.body.appendChild(newParagraph); // ახალი პარაგრაფის დამატება body თეგში
});