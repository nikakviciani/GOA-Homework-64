// 2) შექმენით მარტივი img slider პროექტი, რომელშიც გექნებათ 2 ღიალკი: prev, next წინა სურათზე დაბრუნებისა და შემდეგ სურათზე გადასვლისთვის, ღილაკებზე დაჭერით შესაბამისად უნდა გამოიტანოთ მომდევნო და უკანასკნელი სურათი
const images = [
    "http://www.sololearn.com/uploads/slider/1.jpg", 
    "http://www.sololearn.com/uploads/slider/2.jpg", 
    "http://www.sololearn.com/uploads/slider/3.jpg"
]; 
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let imgElement = document.getElementById("slider");
let currentIndex = 0;
function updateImage() {
    imgElement.src = images[currentIndex];
}
updateImage();
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});