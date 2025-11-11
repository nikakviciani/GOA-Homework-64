// 5) შექმენით ანიმაცია, სადაც პატარა ყუთი იმოძრავებს დიდ ყუთში საათის ისრის მიმართულებით. თავდაპირველად უნდა დაიწყოს მარჯვნივ წასვლა, შემდეგ ქვემოთ ჩასვლა, მერე მარცხნივ გადაადგილება და ბოლოს ზემოთ ასვლა. როდესაც ზემოთ დაბრუნდება, მოძრაობა თავიდან უნდა დაიწყოს და ეს პროცესი უსასრულოდ გრძელდებოდეს. გამოიყენეთ setInterval ფუნქცია ანიმაციის გასაშვებად და კომენტარებით ახსენით როგორ მუშაობს პოზიციის ცვლილება და მიმართულების შეცვლა
const bigBox = document.getElementById('bigBox');
const smallBox = document.getElementById('smallBox');
let positionX = 0; // პატარა ყუთის საწყისი X პოზიცია
let positionY = 0;  
let direction = 'right'; // საწყისი მიმართულება

function moveSmallBox() {
    const bigBoxWidth = bigBox.clientWidth - smallBox.clientWidth;
    const bigBoxHeight = bigBox.clientHeight - smallBox.clientHeight;
    const step = 5; // თითოეული ნაბიჯის ზომა

    // მიმართულების მიხედვით პოზიციის განახლება
    if (direction === 'right') {
        positionX += step;
        if (positionX >= bigBoxWidth) {                                 // თუ პატარა ყუთი მიაღწევს დიდ ყუთის მარჯვენა კიდეს
            positionX = bigBoxWidth; // დააყენეთ პოზიცია დიდ ყუთის მარჯვენა კიდეზე
            direction = 'down'; // შეცვალეთ მიმართულება ქვემოთ
        }
    } else if (direction === 'down') {
        positionY += step;
        if (positionY >= bigBoxHeight) {                                 // თუ პატარა ყუთი მიაღწევს დიდ ყუთის ქვედა კიდეს
            positionY = bigBoxHeight; // დააყენეთ პოზიცია დიდ ყუთის ქვედა კიდეზე
            direction = 'left'; // შეცვალეთ მიმართულება მარცხნივ    
        }
    } else if (direction === 'left') {
        positionX -= step;
        if (positionX <= 0) {                                           // თუ პატარა ყუთი მიაღწევს დიდ ყუთის მარცხენა კიდეს
            positionX = 0; // დააყენეთ პოზიცია დიდ ყუთის მარცხენა კიდეზე
            direction = 'up'; // შეცვალეთ მიმართულება ზემოთ
        }