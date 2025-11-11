// 2) for ციკლის მეშვეობით გადაუარეთ რიცხვებს 1-იდან 10-მდე, თითოეული რიცხვისთვის ობიექტის კონსტრუქტორით (აიღეთ კონსტრუქტორი for ციკლის გაშვებამდე) შექმენით ობიექტი რომელსაც ექნება 2 კუთვნილება რიცხვი და even (ან ლუწია თუ კენტი) თუ რიცხვი ლუწი იქნება მაშინ even კუთვნილების მნიშვნელობა უნდა იყოს true ხოლო სხვა შემთხვევაში false, ეს ყველა ობიექტი უნდა დაამატოთ nubmers მასივში
for (let i = 1; i <= 10; i++) {
    function NumberObject(num, even) {
        this.num = num;
        this.even = even;
    }
    let numbers = [];
    for (let i = 1; i <= 10; i++) {
        let even = i % 2 === 0;
        let numberObject = new NumberObject(i, even);
        numbers.push(numberObject);
    }
    console.log(numbers);
}