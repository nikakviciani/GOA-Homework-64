// 16) შექმენით class SpeedBike რომელიც Bike-სგან იღებს მემკვიდრეობას და ამატებს increaseSpeed(amount) მეთოდს
class SpeedBike extends Bike {
    constructor(brand, model, speed = 0) {
        super(brand, model);
        this.speed = speed;
    }

    increaseSpeed(amount) {
        this.speed += amount;
        console.log(`Speed increased to ${this.speed}`);
    }
}