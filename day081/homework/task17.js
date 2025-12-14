// 18) შექმენით ობიექტი school nested director ობიექტით და გამოიტანეთ director-ის სრული სახელი nested destructuring-ით
const school = {
    name: "Example School",
    director: {
        firstName: "John",
        lastName: "Doe"
    }
};

// Nested destructuring to get the director's full name
const { director: { firstName, lastName } } = school;
const fullName = `${firstName} ${lastName}`;

console.log(fullName); // Output: John Doe