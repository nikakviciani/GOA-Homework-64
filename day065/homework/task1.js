// <!-- 2) შექმენით ობიექტი laptop, რომელსაც ექნება ბრენდი, RAM და price. დაამატეთ method turnOn(), რომელიც console.log()-ში გამოიტანს "Laptop is on". შემდეგ HTML ღილაკზე <button id="laptopBtn">Turn On Laptop</button> დაჭერისას გამოიძახეთ method. კომენტარებში ახსენით property, method და როგორ მოქმედებს ობიექტი HTML ელემენტზე -->
// ობიექტი laptop შეიცავს properties (ბრენდი, RAM, ფასი) და method-ს (turnOn)
const laptop = {
    brand: 'Dell', // property: ბრენდი
    ram: '32gb',   // property: ოპერატიული მეხსიერება
    price: 500,    // property: ფასი
    turnOn: function() { // method: მოქმედება ობიექტზე
        console.log("Laptop is on");
    }
};

// ღილაკზე დაჭერისას გამოიძახება laptop.turnOn() method
document.getElementById('laptopBtn').addEventListener('click', function() {
    laptop.turnOn();
});

function turnOn(){
    console.log("Laptop is on")
}