// 12) შექმენით class ElectricCar რომელიც Car-სგან იღებს მემკვიდრეობას და ამატებს batteryLevel ველს და override-ს უკეთებს displayInfo()
class ElectricCar extends Car {
    constructor(...args) {
        super(...args);
        this.batteryLevel = 100; // Default battery level
    }

    displayInfo() {
        const baseInfo = super.displayInfo();
        return `${baseInfo}, Battery Level: ${this.batteryLevel}%`;
    }
}