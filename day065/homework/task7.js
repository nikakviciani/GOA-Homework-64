// 7) შექმენით HTML input <input id="numInput" type="number" placeholder="Enter number"> და ღილაკი <button id="cubeBtn">Cube</button>. <p id="numOut"></p>. JS-ში დაწერეთ ფუნქცია cubeNumber(), რომ ღილაკზე დაჭერისას გამოჩნდეს შეყვანილი რიცხვის კუბი
document.getElementById('cubeBtn').onclick = cubeNumber;

function cubeNumber() {
    let num = document.getElementById('numInput').value;
    let cube = num ** 3;
    document.getElementById('numOut').textContent = cube;
}
