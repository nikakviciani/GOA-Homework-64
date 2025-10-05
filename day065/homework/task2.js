// 2) შექმენით HTML ღილაკი <button id="bgBtn">Change Background</button> და <div id="box" style="width:100px;height:100px;background-color:lightblue;"></div>. JS-ში დაწერეთ ფუნქცია changeBackground(), რომ ღილაკზე დაჭერისას div-ის ფონი შეიცვალოს ყვითლად?
// document.getElementById('bgBtn').addEventListener('click', changeBackground);
// function changeBackground() {
//     document.getElementById('box').style.backgroundColor='yellow'
// }
document.getElementById('bgBtn').addEventListener('click', changeBackground);

function changeBackground() {
    document.getElementById('box').style.backgroundColor = 'yellow';
}