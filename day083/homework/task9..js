// 10) გააკეთეთ fetch მომხმარებლების მისამართზე https://jsonplaceholder.typicode.com/users და then ბლოკში forEach გამოყენებით დაბეჭდეთ name და email კომენტარებში ახსენით რატომ არის fetch ასინქრონული და რატომ აბრუნებს ყოველთვის promise

let fetchUsers = fetch("https://jsonplaceholder.typicode.com/users");

fetchUsers
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            console.log(`Name: ${user.name}, Email: ${user.email}`);
        });
    })
    .catch(error => {
        console.log("შეცდომა:", error);
    });

// fetch ასინქრონულია, რადგან ის მომხმარებლის მიერ გამოყენებული დატვირთვის პროცესის დროს დაუშვებს სხვა კოდის შესრულებას.
// fetch-მით გადაცემული promise-ით, თუმცა ყოველთვის, fetch-მით გადაცემული promise-ით, fetch-მით გადაცემული promise-ით, fetch-მით გადაცემული promise-ით, fetch-მით გადაცემული promise-ით, fetch-მით გადაცემული promise-ით, fetch-მით გადაცემული promise-ით.