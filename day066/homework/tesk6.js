// 7) შექმენით ორი HTML checkbox <input id="ticket" type="checkbox"> "მაქვს ბილეთი" და <input id="friend" type="checkbox"> "მყავს მეგობარი", ღილაკი <button id="entryBtn">Check Entry</button> და <p id="entryOut"></p>. JS-ში დაწერეთ ფუნქცია checkEntry(), რომელიც ღილაკზე დაჭერისას შეამოწმებს თუ რომელიმე მონიშნულია || ოპერაციით, გამოიტანოს "შეგიძლიათ შესვლა", თუ არცერთი მონიშნულია — "შესვლა აკრძალულია"
document.getElementById('entryBtn').onclick = function checkEntry() {
    let ticket = document.getElementById('ticket').checked;
    let friend = document.getElementById('friend').checked;
    if (ticket || friend) {
        document.getElementById('entryOut').innerText = "შეგიძლიათ შესვლა";
    } else {
        document.getElementById('entryOut').innerText = "შესვლა აკრძალულია";
    }
}