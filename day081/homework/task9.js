// 10) შექმენით class Cat რომელიც constructor-ში დამატებით იღებს color-ს და იყენებს super().
class Cat extends Animal {
    constructor(...args) {
        const color = args.pop();
        super(...args);
        this.color = color;
    }

    meow() {
        return `${this.name} says meow`;
    }
}