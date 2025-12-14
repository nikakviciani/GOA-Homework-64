// 8) გააკეთეთ fetch მოთხოვნა მისამართზე https://jsonplaceholder.typicode.com/posts და then ბლოკში გამოიტანეთ მხოლოდ პირველ 5 პოსტის title კომენტარებში ახსენით რა არის response.json და რატომ უნდა გამოვიყენოთ ის

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        for (int i = 0; i < 5; i++) {
            console.log(data[i].title);
        }
    });