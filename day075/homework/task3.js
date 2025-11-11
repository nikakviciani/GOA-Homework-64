// 4) შექმენით ფორმა, სადაც მომხმარებელი შეიყვანს სრულ სახელს, ელფოსტას და ტელეფონის ნომერს. ფორმის გაგზავნისას ეს ინფორმაცია დაემატოს ქვემოთ არსებულ ცხრილში ახალ რიგად. გამოიყენეთ JavaScript-ში შექმნილი container და presentational ფუნქციები, რომლებსაც ექნებათ განსხვავებული დანიშნულება, container ფუნქცია მოამზადებს მონაცემებს და შექმნის tr ელემენტს, ხოლო presentational ფუნქცია დაამატებს მას ცხრილში. კომენტარებით ახსენით თითოეული ფუნქციის როლი
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // ფორმის სტანდარტული გაგზავნის შეჩერება
    const fullName = document.getElementById("fullName").value; // მომხმარებლის მიერ შეყვანილი სრული სახელი
    const email = document.getElementById("email").value; // მომხმარებლის მიერ შეყვანილი ელფოსტა        
    const phoneNumber = document.getElementById("phoneNumber").value; // მომხმარებლის მიერ შეყვანილი ტელეფონის ნომერი

    // container ფუნქცია, რომელიც ამზადებს მონაცემებს და ქმნის tr ელემენტს
    function createTableRow(name, email, phone) {
        const row = document.createElement("tr"); // ახალი რიგის ელემენტის შექმნა
        const nameCell = document.createElement("td"); // ახალი უჯრის ელემენტის შექმნა სახელისთვის      
        nameCell.textContent = name; // უჯრის ტექსტის დაყენება სახელზე
        const emailCell = document.createElement("td"); // ახალი უჯრის ელემენტის შექმნა ელფოსტისთვის
        emailCell.textContent = email;
        const phoneCell = document.createElement("td"); // ახალი უჯრის ელემენტის შექმნა ტელეფონის ნომრისთვის
        phoneCell.textContent = phone;
        row.appendChild(nameCell); // სახელის უჯრის დამატება რიგში
        row.appendChild(emailCell); // ელფოსტის უჯრის დამატება რიგში
        row.appendChild(phoneCell); // ტელეფონის ნომრის უჯრის დამატება რიგში
        return row; // რიგის ელემენტის დაბრუნება
    }   
    // presentational ფუნქცია, რომელიც დამატებს რიგს ცხრილში
    function addRowToTable(row) {
        const tableBody = document.getElementById("tableBody"); // ცხრილის body ელემენტის მიღება
        tableBody.appendChild(row); // რიგის დამატება ცხრილში
    }