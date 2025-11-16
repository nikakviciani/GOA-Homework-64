// let btn = document.querySelector("button")
// let div = document.querySelector("div")
// btn.addEventListener("click", function(){
//     console.log("clicked")},false)
// თუ დავწეროთ true მაშინ იწერება capturing და false მაშინ bubbling. Capturing არის ის რომ event იწერება თავიდან ბოლომდე ანუ დივიდან ბტონამდე და bubbling არის ის რომ იწერება ბოლოდან დასაწყისამდე ანუ ბტონიდან დივამდე. აქედან გამომდინარე თუ დავწერთ true მაშინ event დაიწერება დივზე და შემდეგ ბტონზე ხოლო თუ დავწერთ false მაშინ ბტონზე დაიწერება და შემდეგ დივზე.
// აგეთ სიტუაციებში შედის მაგალითად თუ გვაქვს nested ელემენტები და გვინდა რომ event დაიწეროს პირველ ელემენტზე და შემდეგ მეორე ელემენტზე მაშინ გამოვიყენებთ capturing-ს ანუ true-ს. ხოლო თუ გვინდა რომ event დაიწეროს პირველ რიგში იმ ელემენტზე რომელზეც მოხდა კლიკი და შემდეგ მის მშობელ ელემენტებზე მაშინ გამოვიყენებთ bubbling-ს ანუ false-ს.
div.addEventListener("click", function(target) {
    console.dir(target)})
// target არის ობიექტი რომელიც შეიცავს ინფორმაციას იმ ელემენტზე რომელზეც მოხდა event. მაგალითად თუ დავაწკაპუნებთ ბტონზე მაშინ target იქნება ბტონი. აქედან გამომდინარე შეგვიძლია მივიღოთ ინფორმაცია იმ ელემენტის შესახებ რომელზეც მოხდა კლიკი და გავაკეთოთ შესაბამისი მოქმედებები.
// target.currectTarget არის ის ელემენტი რომელზეც addEventListener არის დაკავშირებული. მაგალითად თუ დავაწკაპუნებთ ბტონზე და addEventListener არის დაკავშირებული დივზე მაშინ target.currentTarget იქნება დივი. ეს არის მნიშვნელოვანი bubbling-ის დროს რადგან bubbling-ის დროს event შეიძლება დაიწეროს მრავალი ელემენტისთვის და currentTarget გვიჩვენებს იმ ელემენტს რომელზეც addEventListener არის დაკავშირებული.
// თუ დავწერთ target.currectTarget და თარგეთი იქნება ბტონი მაშინ currentTarget იქნება დივი რადგან addEventListener არის დაკავშირებული დივზე. შესაბამისად bubbling-ის დროს currentTarget გვიჩვენებს იმ ელემენტს რომელზეც addEventListener არის დაკავშირებული და არა იმ ელემენტს რომელზეც მოხდა კლიკი.
// true და false მნიშვნელობები გამოიყენება event listener-ის მესამე პარამეტრად რათა განსაზღვროს თუ როგორ უნდა დაიწეროს event - capturing (true) თუ bubbling (false).


//1) Event propagation ახსენით თქვენი სიტყვებით, დაწერეთ რას ნიშნავს კომენტარებით, მოიყვანეთ bubbling-ის და capturing-ის მაგალითი
// Event propagation არის პროცესი რომლის დროსაც event-ი გადადის ერთი ელემენტიდან მეორეზე. div --> button ,button --> div
// Event propagation იყოფა 2 ნაწილად ბუბბლინგ და ქაფთურინგ

let btn = document.querySelector("button")
let div = document.querySelector("div")
btn.addEventListener("click", function(){
    console.log("clicked")},false)
div.addEventListener("click", function(target) {
    console.dir(target)})
btn.addEventListener("click", function(){
    console.log("clicked")},true)