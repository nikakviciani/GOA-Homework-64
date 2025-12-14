// 9) შექმენით class Animal მეთოდით sound() რომელიც ბეჭდავს "Unknown sound". შექმენით class Dog რომელიც override-ს გააკეთებს და დაბეჭდავს "Bark!"
class Animal {
    sound() {
        console.log("Unknown sound");
    }
}

class Dog extends Animal {
    sound() {
        console.log("Bark!");
    }
}

// Example usage:
new Animal().sound();
new Dog().sound();