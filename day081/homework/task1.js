// 2) შექმენით ობიექტი user, სადაც property-ის სახელი უნდა იყოს დინამიური ცვლადიდან მიღებული. გამოიყენეთ computed property syntax [variable] და დაამატეთ username, email და score ველები. შემდეგ შექმენით ფუნქცია increaseScore(amount), რომელიც გაზრდის score-ს
// გამოიყენეთ computed property syntax [variable]
const dynamicKey = 'profile';

const user = {
    [dynamicKey]: {
        username: 'lukak',
        email: 'lukak@example.com',
        score: 0
    },

    increaseScore(amount = 1) {
        if (typeof amount !== 'number' || isNaN(amount)) {
            throw new TypeError('amount must be a number');
        }
        this[dynamicKey].score += amount;
        return this[dynamicKey].score;
    }
};

// მაგალითი გამოყენებისა
console.log(user[dynamicKey].score); // 0
user.increaseScore(5);
console.log(user[dynamicKey].score); // 5