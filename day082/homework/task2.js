// 2) შექმენით ობიექტი user ველებით name და age და მეორე ობიექტი details ველებით city და country გამოიყენეთ spread ოპერატორი რომ ეს ორი ობიექტი გააერთიანოთ ახალ ობიექტში fullUser და კონსოლში გამოიტანეთ საბოლოო შედეგი კომენტარებით ახსენით როგორ მუშაობს ... ოპერატორი ობიექტების გაერთიანებისას

const user = {
    name: 'Luka',
    age: 25
};

const details = {
    city: 'Tbilisi',
    country: 'Georgia'
};

// Using the spread operator to merge user and details objects into fullUser
const fullUser = { ...user, ...details };

// Logging the final result
console.log(fullUser);

// The spread operator (...) takes the properties of the user and details objects 
// and merges them into a new object fullUser, allowing for a concise way to combine multiple objects.