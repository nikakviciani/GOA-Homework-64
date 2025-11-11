// bubbling ნიშნავს რომ event-ი იწევს თავის მშობელ ელემენტზე და შემდეგ მის მშობელზე და ა.შ., კიდევ მდე სანამ არ მიაღწევს document ობიექტს,
// capturing კი პირიქით, იწევს ყველაზე მაღალ დონეზე და შემდეგ ეშვება ქვემოთ.ასევე, capturing ფაზაში event listener-ები უნდა დაემატოს true პარამეტრით, ხოლო bubbling ფაზაში false პარამეტრით.

document.getElementById("outer").addEventListener("click", function() {
    alert("Outer Div Clicked - Bubbling Phase");
}, false);
